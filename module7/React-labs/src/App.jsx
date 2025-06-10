import './App.css'
import BitcoinRates from './components/BitcoinRates'
import { EmojiProvider } from './components/EmojiContext'
import Emoji from './components/Emoji'

function App() {

  return (
    <EmojiProvider>
      <div className="App">
        <Emoji />
        <BitcoinRates />
      </div>
    </EmojiProvider>
  );
}

export default App