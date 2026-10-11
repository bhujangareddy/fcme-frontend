import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Signin from './pages/public/Signin.jsx'
import Signup from './pages/public/Signup.jsx'
import ForgotPassword from './pages/public/ForgotPassword.jsx'
import Home from './pages/private/Home.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    // element: <Layout />, // Shared wrapper/navbar layout
    children: [
      {
        // index: true, // Default view for "/"
        path: "sign-in",
        element: <Signin />,
      },
      {
        path: "sign-up", // Matches "/about"
        element: <Signup />,
      },
      {
        path: "forgot-password", // Matches dynamic URLs like "/profile/42"
        element: <ForgotPassword />,
      },
      {
        path: "home",
        element: <Home />
      }
    ],
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </StrictMode>,
)
