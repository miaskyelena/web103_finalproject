import React, { useState, useEffect} from 'react'
import { useRoutes } from 'react-router-dom'
import { supabase } from './Client.jsx'
import Layout from './layout/layout.jsx'
import LoginPage from './pages/auth/LoginPage'
import HomePage from './pages/home/HomePage'
import Navigation from './components/navigation/Navigation'


const App = () => {
  const [session, setSession] = useState(null)
  console.log(session)
  useEffect(() => {
      supabase.auth.getSession().then(({ data: { session } }) => {
          setSession(session)
      })

      const {
          data: { subscription}, 
      } = supabase.auth.onAuthStateChange((_event, session) => {
          setSession(session)
      })

      return () => subscription.unsubscribe()

  }, [])
    

  let element = useRoutes([
    {
      path: '/',
      element: <Layout session={session} />,
      children: [
        { path: '/', element: <LoginPage session={session}/> },
        { path: '/home', element: <HomePage session={session}/> },
      ]
    }
  ])

  return (

    <div className='App'>
        {element}
    </div>
   
  )
}

export default App
