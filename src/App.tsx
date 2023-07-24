import "./global.css";
import { Header } from "./components/Header";
import { PlusCircle } from "@phosphor-icons/react";

function App() {
  return (
    <>
      <div className="container-fluid">
        <Header />
        <div className="container">
          <div className="newTask">
            <input type="text" placeholder="Adicione uma nova tarefa" />
            <button>
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
            <li>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</li>
            <li>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</li>
            <li>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</li>
            <li>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
