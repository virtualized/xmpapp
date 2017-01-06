import * as types from '../constants/ActionTypes';
import fetch from 'isomorphic-fetch';

const apiUrl = __API_URL__;
const todoApiUrl = apiUrl + '/todo';
const uid = () => Math.random().toString(34).slice(2);

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

function handleApiError(error) {
  console.log('request failed', error);
}

function getTodosRequest() {
  return { type: types.GET_TODOS_REQUEST };
}

function getTodosSuccess(todos) {
  return {
    type: types.GET_TODOS_SUCCESS,
    todos: todos
  };
}

export function getTodos() {
  return (dispatch, getState) => {
    //dispatch(getTodosRequest());

    // TODO: Talk to remote API here.

    //dispatch(getTodosSuccess(data));
  };
}

function addTodoRequest(text) {
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
  return (dispatch, getState) => {
    dispatch(addTodoRequest(text));

    // TODO: Talk to remote API here.

    dispatch(addTodoSuccess(uid(), text));
  };
}

function deleteTodoRequest(id) {
  return { 
    type: types.DELETE_TODO_REQUEST,
    id: id
  };
}

function deleteTodoSuccess(id) {
  return {
    type: types.DELETE_TODO_SUCCESS,
    id: id
  };
}

export function deleteTodo(id) {
  return (dispatch, getState) => {
    dispatch(deleteTodoRequest(id));

    // TODO: Talk to remote API here.

    dispatch(deleteTodoSuccess(id));
  };
}

function editTodoRequest(id) {
  return {
    type: types.EDIT_TODO_REQUEST,
    id: id
  };
}

function editTodoSuccess(id, text) {
  return {
    type: types.EDIT_TODO_SUCCESS,
    id, 
    text
  };
}

export function editTodo(id, text) {
  return (dispatch, getState) => {
    dispatch(editTodoRequest(id));

    // TODO: Talk to remote API here.

    dispatch(editTodoSuccess(id, text));
  };
}

function markTodoRequest(id) {
  return {
    type: types.MARK_TODO_REQUEST,
    id: id
  };
}

function markTodoSuccess(id, marked) {
  return {
    type: types.MARK_TODO_SUCCESS,
    id,
    marked
  };
}

export function markTodo(id) {
  return (dispatch, getState) => {
    dispatch(markTodoRequest(id));
    const todo = getState().todos.find(todo => { return todo.id === id });
    const marked = todo && !todo.marked;

    // TODO: Talk to remote API here.

    dispatch(markTodoSuccess(id, marked));
  };
}

function markAllRequests() {
  return {
    type: types.MARK_ALL_REQUEST
  };
}

function markAllSuccess(marked) {
  return {
    type: types.MARK_ALL_SUCCESS,
    areAllMarked: marked
  };
}

export function markAll() {
  return (dispatch, getState) => {
    const todos = getState().todos;
    const shouldMarkAll = todos.some(todo => !todo.marked);
    const markRequests = [];
    dispatch(markAllRequests());

    // TODO: Talk to remote API here.

    dispatch(markAllSuccess(shouldMarkAll));
  };
}

function clearMarkedRequest() {
  return {
    type: types.CLEAR_MARKED_REQUEST
  }
}

function clearMarkedSuccess(idsCleared) {
  return {
    type: types.CLEAR_MARKED_SUCCESS,
    idsCleared
  }
}

export function clearMarked() {
  return (dispatch, getState) => {
    const markedTodos = getState().todos.filter(todo => todo.marked);
    let clearRequests = [];
    let idsCleared = [];
    dispatch(clearMarkedRequest());

    // TODO: Talk to remote API here.
    markedTodos.forEach(todo => {
      idsCleared.push(todo.id);
    });

    dispatch(clearMarkedSuccess(idsCleared));
  };
}