import React from 'react';

const Todo = ({ todo, toggleComplete, deleteTodo, darkMode }) => {
  return (
    <div className={`flex items-center justify-between p-4 mb-2 rounded-lg shadow ${
      darkMode ? 'bg-gray-700' : 'bg-white'
    }`}>
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleComplete(todo.id)}
          className="h-5 w-5 accent-emerald-500"
        />
        <span
          className={`${
            todo.completed 
              ? 'line-through ' + (darkMode ? 'text-gray-500' : 'text-gray-500')
              : darkMode ? 'text-white' : 'text-gray-800'
          }`}
        >
          {todo.text}
        </span>
      </div>
      <button
        onClick={() => deleteTodo(todo.id)}
        className="text-red-500 hover:text-red-700"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </div>
  );
};

export default Todo; 