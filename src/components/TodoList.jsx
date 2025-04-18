import React from 'react';
import Todo from './Todo';

const TodoList = ({ todos, toggleComplete, deleteTodo, darkMode }) => {
  return (
    <div>
      {todos.length > 0 ? (
        todos.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
            darkMode={darkMode}
          />
        ))
      ) : (
        <div className={`text-center p-4 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
          No tasks yet. Add one above!
        </div>
      )}
    </div>
  );
};

export default TodoList; 