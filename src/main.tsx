import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'
import { Suspense } from 'react'
import { routes } from './routes.tsx'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route index element={<App />} />
        {routes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={route.element}
          />
        ))}
      </Routes>
    </Suspense>
    </BrowserRouter>
  </StrictMode>,
)
