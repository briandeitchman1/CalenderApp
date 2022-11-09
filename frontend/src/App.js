import React, { useEffect, useState } from 'react'

function App() {
  const [backendData, setBackendData] = useState([{}])

  useEffect(() => {
    fetch("/api").then(
      response => response.json()
    ).then(
      data => {
        setBackendData(data)
      }
    )
  }, [])

  return (
    <div>
      <h1>hello world</h1>
      {(typeof backendData.items === 'undefined') ? (
        <p> Loading...</p>
      ) : (
        backendData.items.map((item, i) => (
          <h3 key={i}>{item}</h3>
        ))
      )}

    </div>
  )
}

export default App