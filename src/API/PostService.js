import axios from 'axios'
import axiosRetry from 'axios-retry'
import { API_URL_ITEM } from '../config'

export class PostService {
  static async getDevice(key) {
    let raw = `{\n    "route": "device-detail",\n    "key": "${key}"\n}`

    let requestOptions = {
      url: API_URL_ITEM,
      method: 'POST',
      data: raw,
    }
    axiosRetry(axios, { retries: 3 })
    const response = await axios(requestOptions)
    return response
  }
}
