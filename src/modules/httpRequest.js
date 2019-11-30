import axios from 'axios';
import { RESPONSE_STATUS, MESSSGE, CODE } from '../config';

class HttpRequest {
  static httpRequest = async (siteId, word, username, password) => {
    if (!siteId || !word || !username || !password) return {};
    try {
      const instance = axios.create({ timeout: 15000 });
      const result = await instance.post(`${process.env.REACT_APP_HOST}/crossing-39d56/asia-northeast1/searchItem`, {
        site: siteId,
        word: word,
        username: username,
        password: password,
      });

      return result.data;
    } catch (e) {
      // TODO: logの仕組みを構築する（cloudfunctionsで作成？）
      if (e.code === CODE.TIMEOUT) {
        return { code: RESPONSE_STATUS.SERVER_ERROR, message: MESSSGE.TIMEOUT };
      }
      return { code: RESPONSE_STATUS.SERVER_ERROR, message: MESSSGE.SERVER_ERROR };
    }
  }
}

export default HttpRequest;