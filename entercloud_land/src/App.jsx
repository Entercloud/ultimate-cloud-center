import { useState } from 'react'
import toolkitLogo from '/entercloud-2023.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <a href="https://entercloud-2023.png" target="_blank">
          <img src={toolkitLogo} className="logo" alt="Entercloud logo" />
        </a>
      </div>
      <h1> Entercloud - Primary Page  </h1>
     <p>Providing next generation user experience for developers and engineers. End to End pipelines assessments, resilient and security focused, agile workflows core </p> 
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Solutions count {count}
        </button>
        
      </div>
      <p className="read-the-docs">
        Click on the Entercloudocs to learn more
      </p>
    </div>
  )
}

export default App
