import { CssBaseline, ThemeProvider } from '@mui/material'
import theme from './themes'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {routes} from "./routes";

function App() {


    const router = createBrowserRouter(routes);

  return (

      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <RouterProvider router={router}/>
      </ThemeProvider>
  )
}

export default App
