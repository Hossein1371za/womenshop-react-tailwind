import React from 'react'

const Hero = () => {
  return (
    <div className='hero container mx-auto mt-[60px] z-10'>
        <div className='flex flex-col lg:flex-row items-center justify-between'>
        <div className='p-5 relative flex items-center justify-center'>
            <img src='/assets/image/hero/hero1.jpg' alt='.'/>
            <div className='absolute text-white bg-transparent p-5 border-white/100 border-4 flex flex-col items-center justify-center'>
              <h2 className='h1 lg:h3 number'>50 %</h2>
              <p className='h1 lg:h3 font-bold'>تخفیف</p>
              <button className='mt-3 border-2 rounded-[20px] p-3 hover:bg-slate-300'>خرید کنید</button>
            </div>
        </div>
        <div className='p-5 relative flex items-center justify-center'>
            <img className='h-[400px] object-cover' src='/assets/image/hero/hero2.jpg' alt='.'/>
            <div className='absolute text-white bg-transparent p-5 border-white/100 border-4 flex flex-col items-center justify-center '>
              <h2 className='h1 lg:h3'>کوتون</h2>
              <p className='text-base font-bold'>پاتو,شومیز,کت,سارافون</p>
              <button className='mt-4 border-2 rounded-[20px] p-3 hover:bg-slate-300'>خرید کنید</button>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Hero