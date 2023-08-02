import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./global.css";
import { Header } from "./components/Header";
import {
  CheckCircle,
  Circle,
  ClipboardText,
  PlusCircle,
  Trash,
} from "@phosphor-icons/react";

interface Task {
  id: string;
  title: string;
  completed: boolean;
}

function App() {
  const [tasks, setTasks] = useState<Task[]>();
  const [tasksFinished, setTasksFinished] = useState<Number>();
  const [newTask, setNewTask] = useState("");
  const addTask = () => {
    const currentTask = {
      id: uuidv4(),
      title: newTask,
      completed: false,
    };

    if (tasks?.length) {
      setTasks([...tasks, currentTask]);
    } else {
      setTasks([currentTask]);
    }
    setNewTask("");
  };

  const deleteTask = (id: string) => {
    const tasksWithOutDeleted = tasks?.filter((task) => task.id !== id);
    if (tasksWithOutDeleted) {
      const count = tasksWithOutDeleted.reduce(
        (acc, item) => (item.completed ? acc + 1 : acc),
        0
      );
      setTasksFinished(count);
    }
    setTasks(tasksWithOutDeleted);
  };

  const completedTask = (id: string) => {
    const tasksCompleted = tasks?.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    if (tasksCompleted) {
      const count = tasksCompleted.reduce(
        (acc, item) => (item.completed ? acc + 1 : acc),
        0
      );
      setTasksFinished(count);
    }
    setTasks(tasksCompleted);
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
              Tarefas criadas <span>{tasks?.length ? tasks.length : 0}</span>
            </p>
            <p className="finishTask">
              Concluídas{" "}
              <span>
                {tasksFinished ? `${tasksFinished}` : `${0}`} de{" "}
                {tasks?.length ? tasks.length : 0}
              </span>
            </p>
          </div>
          {!tasks?.length ? (
            <div className="listEmpty">
              <ClipboardText size={56} color="#333333" />
              <span>Você ainda não tem tarefas cadastradas</span>
              <p>Crie tarefas e organize seus itens a fazer</p>
            </div>
          ) : (
            ""
          )}

          <div className="listTask">
            <ul>
              {tasks?.map((task) => (
                <li key={task.id} className="task">
                  {task.completed ? (
                    <CheckCircle
                      className="circleCheck"
                      size={24}
                      onClick={() => completedTask(task.id)}
                    />
                  ) : (
                    <Circle
                      className="circle"
                      size={24}
                      onClick={() => completedTask(task.id)}
                    />
                  )}
                  <span></span>
                  <p className={`nameTask ${task.completed ? "checked" : ""}`}>
                    {task.title}
                  </p>
                  <Trash
                    className="trash"
                    size={24}
                    onClick={() => deleteTask(task.id)}
                  />
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
