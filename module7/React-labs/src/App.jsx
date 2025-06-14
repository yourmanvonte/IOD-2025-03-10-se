import './App.css'
import { EmojiProvider } from './components/EmojiContext'
import { BrowserRouter as Router } from 'react-router-dom'

import AppRoutes from './routes/AppRoutes'
import Navbar from './components/Navbar'
import Emoji from './components/Emoji'

function App() {

  return (
    <EmojiProvider>
      <Router>
        <div className="App">
          <Navbar />
          <Emoji />
          <AppRoutes />
        </div>
      </Router>
    </EmojiProvider>
  );
};

export default App