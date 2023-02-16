import axios from 'axios'
import { API_URL_COMPARE } from '../config'

export class PostService {
  static async getCompare(str) {
    let formdata = new FormData()
    formdata.append('route', 'compare')
    formdata.append('device_id', str)

    var requestOptions = {
      url: API_URL_COMPARE,
      method: 'POST',
      data: formdata,
    }
    const response = await axios(requestOptions)
    return response
  }
}
