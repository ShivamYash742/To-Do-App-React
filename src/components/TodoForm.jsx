import React, { useState } from 'react';

const TodoForm = ({ addTodo, darkMode }) => {
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.trim()) {
      addTodo(value);
      setValue('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <div className="flex gap-2">
        <input
          type="text"
          className={`flex-grow px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 ${
            darkMode 
              ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
              : 'bg-white border-gray-300 text-gray-800 placeholder-gray-500'
          }`}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Add a new task..."
        />
        <button
          type="submit"
          className="px-4 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-500"
        >
          Add
        </button>
      </div>
    </form>
  );
};

export default TodoForm; 