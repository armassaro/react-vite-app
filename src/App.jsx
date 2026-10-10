import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
      <h1>React + Vite</h1>
      <button onClick={() => setCount((c) => c + 1)}>count is {count}</button>
    </main>
  )
}

export default App
