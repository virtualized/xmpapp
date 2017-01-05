const ADD_TODO_SUCCESS = 'ADD_TODO_SUCCESS';
const GET_TODOS_SUCCESS = 'GET_TODOS_SUCCESS';
const initialState = [];

export default function todos(state = initialState, action) {
  switch (action.type) {
    case GET_TODOS_SUCCESS:
      return action.todos.map(todo => {
        return { id: todo.id, marked: todo.completed, text: todo.title }
      });
    case ADD_TODO_SUCCESS:
      return [{
        id: action.id,
        marked: false,
        text: action.text
      }, ...state];
    default:
      return state;
  }
}