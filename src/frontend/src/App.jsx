import "./App.css";
import api from "./api/api";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    api.get("/").then((res) => console.log(res.data));
  }, []);

  return <h1>Sistema Gestión</h1>;
}

export default App;
