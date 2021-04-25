import axios from 'axios'
// mock baseURL 
axios.defaults.baseURL = 'https://www.fastmock.site/mock/00e5005376179246a3e904287d8363d3/api';

async function request(method, url, dataConfig) {
  const errMsgStatusMap = {
    500: '服务器繁忙或出错了，请稍后再试',
  }
  let correctData // 正确数据
  let errorData // 错误数据
  let config = {}

  config = {
    method,
    url,
  }
  Object.assign(config, dataConfig)

  const headers = network.getCustomHeader()
  config.headers = config.headers || {}
  config.headers = { ...config.headers, ...headers }
  try {
    const response = await axios(config)
    if (!response.data && response.data !== '') {
      // json 格式错误，此时返回 null
      errorData = {
        status: 200,
        userMessage: '服务器出了点问题，请稍后再试',
        message: '服务器返回非 JSON 格式',
        responseData: null,
      }
    } else {
      const responseData = response.data

      if (responseData === '' || typeof responseData.errors === 'undefined') {
        // 成功
        correctData = responseData
      } else {
        // 接口返回明确错误
        errorData = {
          status: 200,
          userMessage: responseData.message,
          message: responseData.message,
          responseData, // { error_code: 10010(eg), error: '无权限'(eg) }
        }
      }
    }
  } catch (e) {
    if (e.response && e.response.data) {
      // 接口返回错误，状态码非 200，但有明确的错误数据 { error_code: xx, error: xx }
      errorData = {
        headers: e.response.headers,
        status: e.response.status,
        userMessage: e.response.data.message,
        message: e.response.data.message,
        responseData: e.response.data,
      }
    } else if (e.response && !e.response.data) {
      // 接口返回错误，无明确错误数据，如服务器内部错误
      errorData = {
        headers: e.response.headers,
        status: e.response.status,
        userMessage: errMsgStatusMap[e.response.status] || e.response.statusText,
        message: errMsgStatusMap[e.response.status] || e.response.statusText,
        responseData: null,
      }
    } else {
      // 接口返回错误，无明确错误数据，如服务器内部错误
      errorData = {
        status: null,
        userMessage: '网络异常',
        message: e.message,
        responseData: null,
      }
    }
    errorData.e = e
    errorData.stack = e.stack ? e.stack : 'no stack'
  }

  if (typeof correctData !== 'undefined') {
    return correctData
  }
  throw errorData
}

const network = {}
network.get = (url, config, noGhost) => {
  let params = {}
  if (config && typeof config.params === 'object') {
    // for (const key in config.params) {
    //   if (Array.isArray(config.params[key])) {
    //     params[key] = config.params[key].join(',')
    //   }
    // }
    params = { ...config.params, ...params }
  }

  return request('get', url, { ...config, params }, noGhost)
} // eg: { params: xx }
network.post = (url, config) => request('post', url, config) // eg: { data: xx }
network.delete = (url, config) => request('delete', url, config) // eg: { data: xx }
network.put = (url, config) => request('put', url, config) // eg: { data: xx }
network.patch = (url, config) => request('patch', url, config) // eg: { data: xx }

network.resolveApi = function (api) {
  return axios.defaults.baseURL + api
}

network.getCustomHeader = function () {
  const headers = {
    // 标注是 ajax 请求，避免 IOA 网关为认证返回 302
    'X-Requested-With': 'XMLHttpRequest',
    'x-Source': 'web',
  }
  return headers
}

export default network
