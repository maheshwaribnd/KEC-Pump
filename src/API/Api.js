import axios from 'axios';

export const BASE_URL = 'https://epage.reviewdevelopment.net/api/';

const constructApiRequest = (path, method, body) => ({
  url: path,
  method: method,
  data: body,
});

const Axios = axios.create({
  baseURL: BASE_URL,
  timeout: 20000,
});

const requests = {
  get: path => Axios(constructApiRequest(path, 'get')),
  post: (path, params) => Axios(constructApiRequest(path, 'post', params)),
  put: (path, params) => Axios(constructApiRequest(path, 'put', params)),
  delete: path => Axios(constructApiRequest(path, 'delete')),
};

// add request path here
const requestPath = {
  //Get request
  getQuestions: 'auth/questions',

  //post request
  postQuestionsId: 'auth/useranswer',
  postContactInfo: 'auth/contact',
};

const ApiManager = {
  // Get API
  getQuestionsAnswer: () => {
    return requests.get(`${requestPath.getQuestions}`);
  },

  // Post API
  postContactForm: params => {
    return requests.post(`${requestPath.postContactInfo}`, params);
  },
};

export default ApiManager;
