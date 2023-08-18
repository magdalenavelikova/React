import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Loading from './components/Loading';
import Table from './components/Table';
import { useEffect, useState } from 'react';

function App() {
  const [task, setTask] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:3030/jsonstore/todos')
      .then((res) => res.json())
      .then((data) => {
        //    const result = Object.keys(data).map((id) => ({ id, ...data[id] }));
        // setTask(Object.values(data));
        setTask(Object.values(data));
        setIsLoading(false);
      });
  }, []);

  const toggleTaskStatus = (_id) => {
    setTask((state) =>
      state.map((task) =>
        task._id === _id ? { ...task, isCompleted: !task.isCompleted } : task
      )
    );
  };

  const onAddTask = () => {
    const lastId = task[task.length - 1]._id;
    const description = 'NEW TASK';
    const newTask = { _id: lastId + 1, text: description, isComplete: false };
    console.log(newTask);
    setTask((task) => [{ newTask }, ...task]);
  };

  return (
    <div className="App">
      <div>
        <Header />
        <main className="main">
          <section className="todo-list-container">
            <h1>Todo List</h1>

            <div className="add-btn-container">
              <button className="btn" onClick={onAddTask}>
                + Add new Todo
              </button>
            </div>

            <div className="table-wrapper">
              {isLoading ? (
                <Loading />
              ) : (
                <Table task={task} toggleTaskStatus={toggleTaskStatus} />
              )}
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
