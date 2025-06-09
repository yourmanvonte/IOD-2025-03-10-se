import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Clock from './assets/components/Clock'
import { ClockDisplay } from './assets/components/Clock'
import ActivityFinder from './assets/components/ActivityFinder'

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
      <Clock />
      <ClockDisplay />
      <ActivityFinder />
    </>
  )
}

export default App
