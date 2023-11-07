import { useState, useEffect } from 'react'
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import { supabase } from '../../Client.jsx'
import HomePage from '../home/HomePage'
import AuthPhoto from '../../assets/images/auth-photo-1.jpg'
import './LoginPage.css'


const LoginPage = ({ session }) => {
    
    async function signUpNewUser() {
        const { data, error } = await supabase.auth.signUp({
          email: 'example@email.com',
          password: 'example-password',
          options: {
            redirectTo: 'https//example.com/welcome'
          }
        })
      }

      async function signInWithEmail() {
        const { data, error } = await supabase.auth.signInWithPassword({
          email: 'example@email.com',
          password: 'example-password',
          options: {
            redirectTo: 'https//example.com/welcome'
          }
        })
      }

      async function signInWithGoogle() {
        const { data, error } = await supabase.auth.signInWithOAuth({
          provider: 'google',
          options: {
            queryParams: {
              access_type: 'offline',
              prompt: 'consent',
            },
          },
        })
      }
      
    if (!session) {
        return (
            <>
            <div className='row no-gutters'>
                <div className='col left-side no-gutters'>
                    <div className='auth-container'>
                        <h1 className='text-center'>Buy, sell, and shop for anything.</h1><br/>
                        <Auth 
                        supabaseClient={supabase} 
                        appearance={{ theme: ThemeSupa}}
                        providers={['google']}
                        socialColors={true}
                        />
                    </div>  
                </div>
                <div className='col right-side no-gutters'>
                    <img src={AuthPhoto} alt='auth'/>
                </div>
            </div>
            </>
        )
    } else {
        return (
            <HomePage />
        )
    }
}

export default LoginPage
