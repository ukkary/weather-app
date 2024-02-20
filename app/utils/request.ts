import axios, { AxiosRequestConfig, AxiosResponse } from "axios"

const _request = {
  send<T = unknown>(config: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    config.headers = config.headers || {}
    config.headers["Content-Type"] = config.headers["Content-Type"] || "application/json"
    config.headers["crossDomain"] = true
    return axios.request(config)
  },

  sendWithoutOptions<T = unknown>(config: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    config.headers = config.headers || {}
    return axios.request(config)
  },

  sendMultipart(config: AxiosRequestConfig): Promise<AxiosResponse> {
    config.headers = config.headers || {}
    config.headers["Content-Type"] = "multipart/form-data"
    config.headers["crossDomain"] = true
    return axios.request(config)
  },
}
const request = () => _request

export default request
