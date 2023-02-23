import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [directors, setDirectors] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:5000/director/all`).then((res) => {
      const dicretors = res.data;
      setDirectors(dicretors);
    });
  }, []);
  return (
    <div>
      {directors.map((d) => (
        <div>{d.name}</div>
      ))}
    </div>
  );
}

export default App;
