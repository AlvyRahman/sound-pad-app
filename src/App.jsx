import pads from "./pads"
import React from "react"
import Pad from "./components/Pad";

function App() {
  const [pad, setPad] = React.useState(pads);

  function toggleOn(id) {
    setPad(prevPads => prevPads.map(item => {
      return item.id === id ? {...item, on: !item.on} : item
    }))
  }

  const allPads = pad.map(p => 
    <Pad id={p.id} color={p.color} on={p.on} toggleOn={toggleOn}/>
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
