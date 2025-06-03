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

  return (
    <>
      <div>
        <h1>SwimMaster</h1>
        <button onClick={landingPageRequest}>Landing Page</button>
      </div>
    </>
  )
}

export default App
