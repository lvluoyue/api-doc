
Add-Type -AssemblyName Microsoft.PowerShell.Commands.Utility
# 关闭curl进度显示
$ProgressPreference = 'SilentlyContinue'

function Invoke-Request {
    param (
        [string]$Uri,
        [hashtable]$Headers,
        [Microsoft.PowerShell.Commands.WebRequestSession]$WebSession = $null,
        [int]$Timeout = 30
    )
    try {
        return Invoke-WebRequest -Uri $Uri -Method Get `
            -UseBasicParsing `
            -DisableKeepAlive `
            -Headers $Headers `
            -WebSession $WebSession `
            -TimeoutSec $Timeout `
            -ErrorAction Stop
    } catch {
        if($_.Exception -match "The operation has timed out") {
            Write-Host "请求超时，请检查网络连接" -ForegroundColor Red
        }else {
            Write-Host "请求失败，错误信息:" -ForegroundColor Red
            Write-Host $_.Exception.Message
        }
        Exit ;
    }
}

function Get-CookieValue {
    param (
        [string[]]$Cookies,
        [string]$CookieName
    )
    $cookie = $Cookies | Where-Object { $_ -match "$CookieName=([^;]+)" }
    if ($cookie -and $matches[1]) {
        return $matches[1]
    }
    return $null
}

try {
    Write-Host "脚本启动，正在登录..." -ForegroundColor Green

    # 目标URL地址，原始格式
    $targetUrl = "https://xui.ptlogin2.qq.com/cgi-bin/xlogin?appid=716027609&daid=383&style=33&login_text=%E7%99%BB%E5%BD%95&hide_title_bar=1&hide_border=1&target=self&s_url=https%3A%2F%2Fgraph.qq.com%2Foauth2.0%2Flogin_jump&pt_3rd_aid=100497308&pt_feedback_link=https%3A%2F%2Fsupport.qq.com%2Fproducts%2F77942%3FcustomInfo%3D.appid100497308&theme=2&verify_theme="
    $refererHeaders = @{"Referer" = $targetUrl}

    # 发送GET请求并自动处理响应
    $response = Invoke-Request -Uri $targetUrl

    # 获取目标Cookie
    $pt_local_token = Get-CookieValue -Cookies $response.Headers['Set-Cookie'] -CookieName "pt_local_token"
    if (-not $pt_local_token) {
        Write-Host "未能成功获取 pt_local_token Cookie值" -ForegroundColor Red
        Exit ;
    }

    Write-Host "成功获取 pt_local_token: $pt_local_token" -ForegroundColor Green

    $getUinsUrl = "https://localhost.ptlogin2.qq.com:4301/pt_get_uins?callback=ptui_getuins_CB&r=0.9038523633869937&pt_local_tk=$pt_local_token"


    # 创建WebSession对象并添加Cookie
    $webSession = New-Object Microsoft.PowerShell.Commands.WebRequestSession
    $cookieObj = New-Object System.Net.Cookie("pt_local_token", $pt_local_token, "/", "localhost.ptlogin2.qq.com")
    $webSession.Cookies.Add($cookieObj)

    $newResponse = Invoke-Request -Uri $getUinsUrl -Headers $refererHeaders -WebSession $webSession

    # 解析响应内容中的 var_sso_uin_list
    $responseContent = $newResponse.Content
    if (-not ($responseContent -match 'var var_sso_uin_list=(\[.*?\]);')) {
        Write-Host "未能发现有效的用户列表。" -ForegroundColor Red
        Exit ;
    }

    $userList = ConvertFrom-Json $matches[1]

    # 显示用户列表并让用户选择
    Write-Host "请选择一个用户:" -ForegroundColor Cyan
    for ($i = 0; $i -lt $userList.Length; $i++) {
        Write-Host "[$i] 账号: $($userList[$i].uin)"
    }
    $userChoice = Read-Host "请输入用户编号"

    if (-not ($userChoice -match '^\d+$') -or [int]$userChoice -lt 0 -or [int]$userChoice -ge $userList.Length) {
        Write-Host "无效的选择。" -ForegroundColor Red
        Exit ;
    }

    $selectedUser = $userList[$userChoice]

    # 构造新的请求
    $newRequestUrl = "https://localhost.ptlogin2.qq.com:4301/pt_get_st?clientuin=$($selectedUser.uin)&r=0.5287717305315094&pt_local_tk=$pt_local_token&callback=__jp0"

    $newRequestResponse = Invoke-Request -Uri $newRequestUrl -Headers $refererHeaders -WebSession $webSession

    # 获取Cookie
    $newCookieCollection = $newRequestResponse.Headers['Set-Cookie']
    $clientuin = Get-CookieValue -Cookies $newCookieCollection -CookieName "clientuin"
    $clientkey = Get-CookieValue -Cookies $newCookieCollection -CookieName "clientkey"

    if (-not $clientuin -or -not $clientkey) {
        Write-Host "未能发现有效的clientuin和clientkey" -ForegroundColor Red
        Exit ;
    }

    Write-Host "clientuin: $clientuin" -ForegroundColor Green
    Write-Host "clientkey: $clientkey" -ForegroundColor Green
}
finally {
    # 恢复默认的进度显示
    $ProgressPreference = 'Continue'

    Write-Host "按任意键退出程序。" 
    [Console]::Read() | Out-Null ;
    Exit ;
}