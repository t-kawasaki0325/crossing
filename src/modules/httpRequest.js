import axios from 'axios';
import { RESPONSE_STATUS, MESSSGE } from '../config';

class HttpRequest {
  static httpRequest = async (siteId, word, username, password) => {
    try {
      const result = await axios.post(`${process.env.REACT_APP_HOST}/crossing-39d56/asia-northeast1/searchItem`, {
        site: siteId,
        word: word,
        username: username,
        password: password,
      });

      return result.data;
    } catch (e) {
      // TODO: logの仕組みを構築する（cloudfunctionsで作成？）
      return { code: RESPONSE_STATUS.SERVER_ERROR, message: MESSSGE.SERVER_ERROR };
    }
  }
}

export default HttpRequest;