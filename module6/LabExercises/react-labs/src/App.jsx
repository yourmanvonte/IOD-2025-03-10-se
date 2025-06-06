import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Greeting from './components/Greeting'
import BigCats from './components/BigCats'
import Emoji from './components/Emoji'
import Calculator from './components/Calculator'

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
      <Greeting name="John">
        <p>This is a child element</p>
        <p>Welcome back to your app</p>
      </Greeting>
      <BigCats />
      <Emoji />
      <Calculator num1={10} num2={5} />
    </>
  )
}

export default App
