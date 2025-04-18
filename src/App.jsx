import { useState, useEffect } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import ThemeToggle from './components/ThemeToggle';
import reactLogo from './assets/react.svg';

function App() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos) {
      return JSON.parse(savedTodos);
    } else {
      return [];
    }
  });
  const [filter, setFilter] = useState('all');
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('darkMode');
    return savedMode ? JSON.parse(savedMode) : false;
  });

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false
    };
    setTodos([...todos, newTodo]);
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const clearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === 'all') return true;
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

  const today = new Date();
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = today.toLocaleDateString('en-US', options);

  return (
    <div className={`min-h-screen py-8 ${darkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
      <div className={`relative max-w-md mx-auto p-8 rounded-lg shadow-md ${
        darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'
      }`}>
        <ThemeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        
        <div className="flex flex-col items-center mb-6">
          <img src={reactLogo} className="h-16 w-16 mb-2 animate-spin-slow" alt="React logo" style={{ animationDuration: '10s' }} />
          <h1 className={`text-3xl font-bold text-center mb-2 ${
            darkMode ? 'text-white' : 'text-gray-800'
          }`}>
            React Todo
          </h1>
          <p className={`text-center ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            {formattedDate}
          </p>
        </div>
        
        <TodoForm addTodo={addTodo} darkMode={darkMode} />
        
        {todos.length > 0 && (
          <div className="flex justify-center mb-4 gap-2">
            <button
              onClick={() => setFilter('all')}
              className={`px-3 py-1 rounded ${
                filter === 'all'
                  ? 'bg-emerald-500 text-white'
                  : darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-800'
              }`}
            >
              All
            </button>
            <button
              onClick={() => setFilter('active')}
              className={`px-3 py-1 rounded ${
                filter === 'active'
                  ? 'bg-emerald-500 text-white'
                  : darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-800'
              }`}
            >
              Active
            </button>
            <button
              onClick={() => setFilter('completed')}
              className={`px-3 py-1 rounded ${
                filter === 'completed'
                  ? 'bg-emerald-500 text-white'
                  : darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-800'
              }`}
            >
              Completed
            </button>
          </div>
        )}
        
        <TodoList
          todos={filteredTodos}
          toggleComplete={toggleComplete}
          deleteTodo={deleteTodo}
          darkMode={darkMode}
        />
        
        {todos.length > 0 && (
          <div className={`flex justify-between items-center mt-6 pt-4 border-t ${
            darkMode ? 'border-gray-700' : 'border-gray-200'
          }`}>
            <span className={darkMode ? 'text-sm text-gray-400' : 'text-sm text-gray-600'}>
              {todos.filter((todo) => !todo.completed).length} items left
            </span>
            <button
              onClick={clearCompleted}
              className="text-sm text-red-500 hover:text-red-700"
            >
              Clear completed
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
