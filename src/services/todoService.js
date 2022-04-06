import axios from 'axios';

export const getPosts = () => axios.get(process.env.REACT_APP_TODOS_URL);

export const switchTodoCompleted = (id) => axios.put(`${process.env.REACT_APP_TODOS_URL}/${id}`);

export const createTodo = (todo) => axios({
  method: 'POST',
  withCredentials: false,
  mode: 'no-cors',
  url: process.env.REACT_APP_TODOS_URL,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
  },
  data: {
  userId: 1,
  title: todo
}});

export const deleteTodo = (id) => axios.delete(`${process.env.REACT_APP_TODOS_URL}/${id}`);
