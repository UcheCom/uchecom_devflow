import React from 'react'
import Image from 'next/image'
import SocialAuthForm from '@/components/forms/SocialAuthForm';

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className='flex min-h-screen items-center justify-center bg-auth-light dark:bg-auth-dark bg-cover bg-center bg-no-repeat px-4 py-10'>
      <section className='sm:min-w-[500px] flex-col items-center justify-center gap-6 rounded-lg bg-light-900/80 p-6 shadow-light-100 backdrop-blur-sm dark:bg-dark-500/80 dark:shadow-dark-100 sm:p-10' >
       <div className='flex items-center justify-center gap-2' >
        <div className='space-y-2.5'>
          <h1 className='text-2xl font-semibold text-dark-100 dark:text-light-900' >Join DevFlow</h1>
          <p className='paragraph-regular dark:text-light-700' >To get your questions answered, please sign up for a free account.</p>    
        </div>
        <Image 
            src='images/site-logo.svg' 
            alt='DevFlow Logo' 
            width={50} 
            height={50} 
            className='object-contain' 
        />  

       </div>
        {children}

        <SocialAuthForm />  
      </section>
        
    </main>
  )
}

export default AuthLayout;