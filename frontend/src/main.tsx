import { createRoot } from 'react-dom/client'
import './styles/print.css';
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import PublicLayout from './layouts/PublicLayout.tsx'
import Home from './pages/Home.tsx'
import AuthLayout from './layouts/AuthLayout.tsx'
import Auth from './pages/Auth.tsx'
import ProtectedLayout from './layouts/ProtectedLayout.tsx'
import Dashboard from './pages/Dashboard.tsx'
import DesignDetails from './pages/DesignDetails.tsx'
import GenerateDesign from './pages/GenerateDesign.tsx'
import NotFound from './pages/NotFound.tsx'
import { Provider } from 'react-redux'
import { store } from './redux/store.ts'
import { Toaster } from 'react-hot-toast'

const router = createBrowserRouter([
  {
    element:<PublicLayout></PublicLayout>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/generate-design',
        element:<GenerateDesign></GenerateDesign>
      },
    ]
  },
  {
    element:<AuthLayout></AuthLayout>,
    children:[
      {
        path:'/auth',
        element:<Auth></Auth>
      }
    ]
  },
  {
    element:<ProtectedLayout></ProtectedLayout>,
    children:[
      {
        path:'/dashboard',
        element:<Dashboard></Dashboard>
      },
      {
        path:'/design-details/:designId',
        element:<DesignDetails></DesignDetails>
      },
      {
        path:'/not-found',
        element:<NotFound></NotFound>
      },
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <>
  
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
    <Toaster
      gutter={12}
      toastOptions={{
        duration: 3000,

        style: {
          background: "#18181B",
          color: "#FAFAFA",
          border: "1px solid #27272A",
          borderRadius: "12px",
          padding: "12px 16px",
          fontSize: "14px",
        },

        success: {
          iconTheme: {
            primary: "#FAFAFA",
            secondary: "#18181B",
          },
        },

        error: {
          iconTheme: {
            primary: "#FAFAFA",
            secondary: "#18181B",
          },
        },
      }}
    />
  </>
)
