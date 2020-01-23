import React, { useState, useEffect } from "react";
import api from "./services/api";

import DevForm from "./components/DevForm";
import DevItem from "./components/DevItem";

import "./global.css";
import "./App.css";
import "./Sidebar.css";
import "./Main.css";

function App() {
  const [devs, setDevs] = useState([]);

  useEffect(() => {
    async function loadDevs() {
      const { data } = await api.get("/devs");
      setDevs(data);
    }

    loadDevs();
  }, []);

  async function handleAddDev(data) {
    const res = await api.post("/devs", data);

    setDevs([...devs, res.data]);
  }
  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <DevForm onSubmit={handleAddDev} />
      </aside>
      <main>
        <ul>
          {devs.map(dev => (
            <DevItem key={dev._id} dev={dev} />
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
