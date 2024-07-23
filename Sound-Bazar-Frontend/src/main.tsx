import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, } from "react-router-dom";
import { AuthContextProvider } from "./contexts/AuthContext.tsx";
import { router } from "./routes/router.tsx";
import './index.css'
import { ThemeProvider } from './contexts/ThemeContext.tsx';



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthContextProvider>

      <ThemeProvider>

        <RouterProvider router={router} />

      </ThemeProvider>

    </AuthContextProvider>
  </React.StrictMode>,
)
