import { GET_TODOS_SUCCESS, 
  ADD_TODO_SUCCESS, 
  DELETE_TODO_SUCCESS, 
  EDIT_TODO_SUCCESS, 
  MARK_TODO_SUCCESS, 
  MARK_ALL_SUCCESS, 
  CLEAR_MARKED_SUCCESS } from '../constants/ActionTypes';

const initialState = [
  { id: 1, marked: true, text: 'make components' },
  { id: 2, marked: false, text: 'design actions' },
  { id: 3, marked: false, text: 'implement reducer' },
  { id: 4, marked: false, text: 'connect components' }
];

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

    case DELETE_TODO_SUCCESS:
      return state.filter(todo =>
        todo.id !== action.id
      );

    case EDIT_TODO_SUCCESS:
      return state.map(todo =>
        todo.id === action.id ? 
          { ...todo, text: action.text } : 
          todo
      );

    case MARK_TODO_SUCCESS:
      return state.map(todo => 
        todo.id === action.id ?
          { ...todo, marked: action.marked } :
          todo
      );

    case MARK_ALL_SUCCESS:
      return state.map(todo => ({
        ...todo,
        marked: action.areAllMarked
      }));

    case CLEAR_MARKED_SUCCESS:
      return state.filter(todo => action.idsCleared.indexOf(todo.id) === -1);

    default:
      return state;
  }
}