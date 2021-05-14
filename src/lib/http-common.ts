import axios from 'axios';

var instance = axios.create({
  baseURL: "http://localhost/crud-agile-server",
  timeout: 3000
});

class http {
  static async get(url: any, params: any) {
    return await instance.get(url, { params });
  }

  static async post(url: any, params: any) {
    return await instance.post(url, JSON.stringify(params));
  }
}

export default http;