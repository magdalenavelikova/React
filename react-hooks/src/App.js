import { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { ToDoList } from "./components/ToDoList";
import { ToDoContext } from "./contexts/ToDoContext";
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
   
    await fetch(`${baseUrl}/${todoId}`, { method: "DELETE" });
   
    setTasks((state) => state.filter((x) => x._id !== todoId));
  };

  const contextValue= {onToDoDeleteClick};
  return (
    <ToDoContext.Provider value={contextValue}>

    <div>
      <Header />
      <ToDoList
        tasks={tasks}
        onToDoAddClick={onToDoAddClick}
   
      />
      <AddToDoModal
        onToDoAddClose={onToDoAddClose}
        onToDoAddSubmit={onToDoAddSubmit}
        showAddToDo={showAddToDo}
      />
    </div>
          
    </ToDoContext.Provider>
  );
}

export default App;
