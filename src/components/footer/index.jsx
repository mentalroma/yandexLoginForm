import React from 'react'

export default function Footer() {
  return (
      <div className='absolute bottom-0 w-full flex justify-between'>
        
        <div className='text-[white] text-[13px] ml-[15px]'>
            <a>Используйте режим инкогнито на чужом компьютере</a>
        </div>

        <div  className='flex flex-col text-[white] text-[16px] mb-[15px]'>
            <a>Яндекс ID - ключ от всех сервисов</a>
            <a href="https://yandex.ru/id/about" className='hover:underline'>Узнать больше</a>
        </div>

        <div className='flex row-auto gap-[15px] text-[white] text-[13px] mr-[15px]'>
            <a>Ru</a>
            <a href='https://yandex.ru/support/id/ru/' className='hover:underline'>Справка и поддержка</a>
            <a>©2001-2025, Яндекс</a>
        </div>

        </div>
  )
}
