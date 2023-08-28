import { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { ToDoList } from "./components/ToDoList";

import "bootstrap/dist/css/bootstrap.min.css";
import { AddToDoModal } from "./components/AddToDoModal";
const baseUrl = "http://localhost:3030/jsonstore/todos";
function App() {
  const [tasks, setTasks] = useState([]);
  const [showAddToDo, setShowAddToDo] = useState(false);

  useEffect(() => {
    fetch(baseUrl)
      .then((response) => response.json())
      .then((result) => {
        setTasks(Object.values(result));
      });
  }, []);

  const onToDoAddSubmit = async (values) => {
    const response = await fetch(baseUrl, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(values),
    });
    const result = await response.json();
    setTasks([...tasks, result]);
    setShowAddToDo(false);
  };
  const onToDoAddClick = () => {
    setShowAddToDo(true);
  };
  const onToDoAddClose = () => {
    setShowAddToDo(false);
  };
  const onToDoDeleteClick = async (todoId) => {
   
    const result =await fetch(`${baseUrl}/${todoId}`, { method: "DELETE" });
   
    setTasks((state) => state.filter((x) => x._id !== todoId));
  };

  return (
    <div>
      <Header />
      <ToDoList
        tasks={tasks}
        onToDoAddClick={onToDoAddClick}
        onToDoDeleteClick={onToDoDeleteClick}
      />
      <AddToDoModal
        onToDoAddClose={onToDoAddClose}
        onToDoAddSubmit={onToDoAddSubmit}
        showAddToDo={showAddToDo}
      />
    </div>
  );
}

export default App;
