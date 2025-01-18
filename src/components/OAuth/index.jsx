import React, {useState} from 'react'


export default function Oauth() {
  const[password, setPassword] = useState('') //Состояние для храненения текста в input

  const handlePasswordChange = (event) => {
    setPassword(event.target.value); // Обновляем состояние при каждом изменении
  };

  // Выводим текущее значение состояния (для проверки)
  const handleSubmit = () => {
    console.log(password); // Логируем введенный пароль
  };


  return (
    <div className='flex flex-col gap-[8px]'>
        <div className='flex row-auto w-[312px] h-[56px] bg-[#eceef2] rounded-2xl'>
            <img src='/images/profile.png' className='w-[36px] h-[36px] ml-[7px] mt-[7px]'/> 
            <div className='flex flex-col gap-[0] ml-[5px] '>
                <p>roma-mv7</p>
                <p>roma-mv7@yandex.ru</p>
            </div>
        </div>  
        <input 
          type='password' 
          placeholder='Введите пароль' 
          className='rounded-2xl border-2 border-[#eceef2] w-[312px] h-[56px] text-[24px] p-4'
          value={password}
          onChange={handlePasswordChange}
        /> 
        
        <a className='text-[#85889e] hover:text-black font-medium'>Не помню пароль</a>   
        
      
        <button onClick={handleSubmit} className='bg-slate-950 hover:bg-black w-full h-[56px] rounded-3xl text-[14px] text-[#f4f4f4] font-medium mt-[20px]'>
            Продолжить
        </button>

        <button className='border-2 border-[#eceef2] bg-[#ffffff] w-[100%] h-[56px] rounded-3xl items-center text-[14px] text-[#000000] font-medium'>
        Войти по картинке
        </button>

        <button className='border-2 border-[#eceef2] bg-[#ffffff] w-[100%] h-[56px] rounded-3xl items-center text-[14px] text-[#000000] font-medium'>
            Войти по QR-коду
        </button>
    </div>
  )   
}