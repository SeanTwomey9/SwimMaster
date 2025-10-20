import './App.css'

import axios from "axios";

function App() {

  const landingPageRequest = () => {

    // Retrieve the landing page from the server
    axios.get("http://localhost:3000").then((data) => {
      console.log("Landing page returned");
      console.log(data);
  })
}

  const APIPageRequest = () => {

    // Retrieve the API page from the server
    axios.get("http://localhost:3000/api").then((data) => {
      console.log("API page returned");
      console.log(data);
    })
  }

  return (
    <>
      <div>
        <h1>SwimMaster</h1>
        <button onClick={landingPageRequest}>Landing Page</button>
      </div>
      <div>
        <button onClick={APIPageRequest}>API Page</button>
      </div>
    </>
  )
}

export default App
