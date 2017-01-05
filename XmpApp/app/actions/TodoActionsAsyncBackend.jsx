import * as types from '../constants/ActionTypes';
import fetch from 'isomorphic-fetch';

const apiUrl = __API_URL__;
const todoApiUrl = apiUrl + '/todo';

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  } else {
    var error = new Error(response.statusText);
    error.response = response;
    throw error;
  }
}

function parseJSON(response) {
  return response.json();
}