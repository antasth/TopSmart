import axios from 'axios'
import { API_URL_ITEM } from '../config'

export class PostService {
  static async getDevice(key) {
    let raw = `{\n    "route": "device-detail",\n    "key": "${key}"\n}`

    let requestOptions = {
      url: API_URL_ITEM,
      method: 'POST',
      data: raw,
    }

    const response = await axios(requestOptions)
    // console.log(response)
    return response
  }
} 
