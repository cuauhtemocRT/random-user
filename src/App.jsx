import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import CardUser from "./components/CardUser";

function App() {

  const [user, setUser] = useState()

  useEffect(() => {
    const URL = 'https://randomuser.me/api/'
    axios.get(URL)
      .then(res => setUser(res.data.results[0]))
      .catch(err => console.log(err))
  }, [])
  
  console.log(user)

  return (
    <div className="app">
            <h1>RANDOM USER GENERATOR</h1>
      <p className="description">
        A free,
        <a href="https://glistening-toffee-68ca24.netlify.app/">open-source </a>
        API for generating random user data
      </p>
      <div className="card__user">
      <CardUser user={user}/>
      </div>
    </div>
  );
}

export default App;
