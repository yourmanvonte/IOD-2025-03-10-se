import './App.css'
import { EmojiProvider } from './components/EmojiContext'
import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import theme from './theme'
import PostList from './components/PostList'

import AppRoutes from './routes/AppRoutes'
import Navbar from './components/Navbar'
import Emoji from './components/Emoji'

function App() {

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <EmojiProvider>
        <Router>
          <div className="App">
          <Navbar />
          <Emoji />
          <AppRoutes />
          </div>
        </Router>
      </EmojiProvider>
      <PostList />
    </ThemeProvider>
  );
};

export default App