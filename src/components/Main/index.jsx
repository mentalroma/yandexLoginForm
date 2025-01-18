import React from 'react'
import LabelForm from '../LabelForm'
import Oauth from '../OAuth'

export default function Main() {
  return (
    <div className='flex flex-col gap-[20px] w-[312px] h-[445.6px] m-auto'>
      <LabelForm />
      <Oauth />
    </div>
      
  )
}
