import './App.css'
import { useRoutes } from 'react-router-dom'
import { Suspense } from 'react'
import { routes } from './routes'

function App() {
  const element = useRoutes(routes)
  
  return (
    <Suspense fallback={<div className="h-screen w-full flex items-center justify-center">Loading...</div>}>
      {element}
    </Suspense>
  )
}

export default App
