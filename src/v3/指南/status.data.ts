export default {
  async load () {
    return (await fetch('https://api.vkeys.cn/system/info/code')).json()
  }
}
