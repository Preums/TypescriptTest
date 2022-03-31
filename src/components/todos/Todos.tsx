import { FC, FormEvent, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Post } from '../../models/modelsTypes';
import { RootState } from '../../redux/reducers/rootReducer';
import { PostsState } from '../../redux/reduxTypes/reduxTypes';
import { createTodosRequest, deleteTodosRequest, fetchTodosRequest, switchTodosRequest } from '../../redux/actions/postActions';

import './todos.css';

const Todos:FC = () => {
  const dispatch = useDispatch();
  const [todo, setTodo] = useState('');

  const { pending, posts, error }: PostsState = useSelector((state: RootState) => state.posts)

  useEffect(() => {
    dispatch(fetchTodosRequest())
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    dispatch(createTodosRequest(todo))
  };

  const handleDelete = (event: FormEvent, id: number) => {
    event.preventDefault();
    event.stopPropagation();
    dispatch(deleteTodosRequest(id))
    
  };

  return (
    <div className='todos-block'>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={({ target: { value }}) => setTodo(value)} placeholder='Write your todo' />
        <button type="submit">Envoyer</button>
      </form>
      {pending ? (
        <p>...loading</p>
      ) : error ? (
        <p>Error: {JSON.stringify(error)}</p>
      ) : (
        posts && posts.length > 0 ? (
          <div className='todos'>
            {posts.map((todo: Post, index: number) => (
              <div className='todo' onClick={() => dispatch(switchTodosRequest(todo.id))}>
                <p key={todo.id}>{++index}. {todo.title}</p>
                <p className={todo.completed ? 'completed' : 'pending'}>{todo.completed ? 'completed' : 'pending'}</p>
                {todo.completed &&
                  <button onClick={(e) => handleDelete(e, todo.id)}>Supprimer</button>
                }
              </div>
            ))}
          </div>
        ) : <p>Pas de données</p>
      )}
    </div>
  )
};

export default Todos;