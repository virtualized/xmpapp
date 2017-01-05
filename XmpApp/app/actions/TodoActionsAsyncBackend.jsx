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

function addTodoRequest(text) {
  console.log('addTodoRequest');
  return {
    type: types.ADD_TODO_REQUEST,
    text: text
  };
}

function addTodoSuccess(id, text) {
  return {
    type: types.ADD_TODO_SUCCESS,
    id: id,
    text: text
  };
}

export function addTodo(text) {
  console.log('addTodo');
  return (dispatch, getState) => {
    dispatch(addTodoRequest(text))
    dispatch(addTodoSuccess(1, text));
  };
}

export function deleteTodo(id) {
  return (dispatch, getState) => {

  };
}

export function editTodo(id, text) {
  return (dispatch, getState) => {

  };
}

export function markTodo(id) {
  return (dispatch, getState) => {

  };
}

export function markAll() {
  return (dispatch, getState) => {

  };
}

export function clearMarked() {
  return (dispatch, getState) => {

  };
}