import { Link } from "react-router-dom"
import "./App.css"

function App() {
  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <Link to="/login">Click Here</Link>
    </>
  )
}
export default App
