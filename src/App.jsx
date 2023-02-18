import { CssBaseline, ThemeProvider } from '@mui/material'
import AppRouter from './router/AppRouter'
import theme from './themes'

function App() {

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <AppRouter/>
    </ThemeProvider>
  )
}

export default App
