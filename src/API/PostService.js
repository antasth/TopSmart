import axios from 'axios'
import { API_URL_COMPARE } from '../config'

export class PostService {
  static async getCompare() {
    let formdata = new FormData()
    formdata.append('route', 'compare')
    formdata.append('device_id', '11089,10237,11253')

    var requestOptions = {
      url: API_URL_COMPARE,
      method: 'POST',
      data: formdata,
    }
    const response = await axios(requestOptions)
    return response
  }
}
