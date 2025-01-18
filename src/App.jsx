import React from 'react'
import Form from './components/form'
import BackgroundImg from './components/background'
import Footer from './components/footer'

export default function App() {
  return (
    <div className='relative flex justify-center items-center'>
      <BackgroundImg />
      <Form />
      <Footer/>
    </div>
  )
}
