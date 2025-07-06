import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import { router } from './Router/Route.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <div className='max-w-screen-xl mx-auto font-Open bg-white'>
      <RouterProvider router={router} />
   </div>
  </StrictMode>,
)
