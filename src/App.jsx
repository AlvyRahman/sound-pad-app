import pads from "./pads"
import React from "react"
import Pad from "./components/Pad";

function App() {
  const [pad, setPad] = React.useState(pads);

  const allPads = pad.map(p => 
    <Pad id={p.id} color={p.color}/>
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
