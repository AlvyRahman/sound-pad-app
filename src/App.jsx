import pads from "./pads"
import React from "react"

function App() {
  const [pad, setPad] = React.useState(pads);

  const allPads = pad.map(p => 
    <button key={p.id}>p.id</button>
  )

  return (
    <main>
      <div className="pad-container">
        {allPads}
      </div>
    </main>
  )
}

export default App
