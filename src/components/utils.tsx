import Taro  from '@tarojs/taro'

export const toTargetPage = (url, params?) => {
  let result = url + '?'
  for (const key in params) {
    if (Object.prototype.hasOwnProperty.call(params, key)) {
      const element = params[key];
      let param = `${key}=${element}`
      result += `${result.endsWith('?') ? param : '&'+ param }`
      
    }
  }
    Taro.navigateTo({
      url: result,
    })
  }