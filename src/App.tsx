import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./global.css";
import { Header } from "./components/Header";
import { CheckCircle, Circle, PlusCircle, Trash } from "@phosphor-icons/react";

interface Task {
  id: string;
  title: string;
  completed: boolean;
}

function App() {
  const [tasks, setTasks] = useState<Task[]>();
  const [newTask, setNewTask] = useState("");
  const addTask = () => {
    const currentTask = {
      id: uuidv4(),
      title: newTask,
      completed: true,
    };

    if (tasks?.length) {
      setTasks([...tasks, currentTask]);
      setNewTask("");
    } else {
      setTasks([currentTask]);
    }
  };

  return (
    <>
      <div className="container-fluid">
        <Header />
        <div className="container">
          <div className="newTask">
            <input
              type="text"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              placeholder="Adicione uma nova tarefa"
            />
            <button onClick={addTask}>
              Criar <PlusCircle size={16} className="plusClircle" />
            </button>
          </div>
          <div className="statusTask">
            <p className="createdTask">
              Tarefas criadas <span>5</span>
            </p>
            <p className="finishTask">
              Concluídas <span>2 de 5</span>
            </p>
          </div>
          <div className="listTask">
            <ul>
              {tasks?.map((task) => (
                <li key={task.id} className="task">
                  {task.completed ? (
                    <CheckCircle className="circleCheck" size={24} />
                  ) : (
                    <Circle className="circle" size={24} />
                  )}
                  <span></span>
                  <p className="nameTask">{task.title}</p>
                  <Trash className="trash" size={24} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
