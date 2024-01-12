import React from 'react'

function Header() {
  return (
    <header className='bg-slate-200 shadow-md'>

        <div className='flex justify-between items-center px-4 py-2'>


      </div>
      <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
        <span className='text-slate-500'>Sahand</span>
        <span className='text-slate-700'>
          Estate
        </span>
      </h1>
      <form>
        <input
          type='text'
          placeholder='Search...'
          className='bg-slate-100 text-slate-700 rounded-full px-4 py-2 w-full sm:w-1/2'
        />
      </form>
    </header>
  )
}

export default Header
