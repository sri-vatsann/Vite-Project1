import React from 'react'

const Article = () => {
  return (
    <article className='container mx-auto p-6'>
        <h2 className='font-bold text-2xl '>📰Latest News</h2>
        <div className='flex shadow-lg bg-white p-4'>
            <img src="https://cdn.pixabay.com/photo/2017/06/26/19/03/news-2444778_1280.jpg" alt="" className='h-40 rounded-lg w-60' />
            <div className='ml-4'>
                <h3 className='text-xl font-semibold'>🚀Vite is Revolutionizing Frontend</h3>
                <p className='text-gray-600 mt-2'>Vite is a next gen frontend tool that delivers fast development.</p>
            </div>
        </div>
    </article>
  )
}

export default Article