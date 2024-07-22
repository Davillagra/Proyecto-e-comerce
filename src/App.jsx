import { ThemeProvider } from "@emotion/react"
import { createTheme, CssBaseline } from "@mui/material"
import { useState } from "react"
import "./App.css"
import { Navbar } from "./components/layout/navbar/Navbar"
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom"
import { UnknownPage } from "./components/pages/unknownPage/UnknownPage"
import { menuRoutes } from "./components/routes/menuRoutes"
import CartContextProvider from "./context/CartContext"
import AuthContextProvider from "./context/AuthContext"

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#34c53e",
    },
    warning: {
      main: "#ff0000",
    },
  },
})

export const ligthTheme = createTheme({
  palette: {
    primary: {
      main: "#1b5e20",
    },
    warning: {
      main: "#ff0000",
    },
  },
})

function App() {
  const [theme, setTheme] = useState(darkTheme)
  const handleThemeChange = (newThemeHandler) => {
    newThemeHandler ? setTheme(darkTheme) : setTheme(ligthTheme)
  }
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <CartContextProvider>
          <Routes>
            <Route
              element={
                <ThemeProvider theme={theme}>
                  <CssBaseline />
                  <Navbar onThemeChange={handleThemeChange} />
                  <Outlet />
                </ThemeProvider>
              }
            >
              {menuRoutes.map(({ id, path, Element }) => (
                <Route key={id} path={path} element={<Element />} />
              ))}
              <Route />
            </Route>
            <Route path="*" element={<UnknownPage />} />
          </Routes>
        </CartContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
  )
}

export default App
