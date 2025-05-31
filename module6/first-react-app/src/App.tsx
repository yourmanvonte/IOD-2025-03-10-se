import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FullName from './components/FullName'


function Welcome() {
  return (
    <div className="Welcome componentBox">
      <h3>Welcome!</h3>
    </div>
  )
}

function App() {
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <Welcome />
      <FullName first="John" last="Doe" />
      </>
  )
}

export default App