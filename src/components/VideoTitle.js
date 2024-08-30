import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='w-screen aspect-video pt-[25%] px-12 absolute text-white bg-gradient-to-r from-black'>
      <h1 className='text-4xl font-bold'>{title}</h1>
      <p className='py-6text-lg w-1/4'>{overview}</p>
      <div className='pt-2'>
        <button className='px-12  p-4 bg-white text-black rounded-lg text-xl hover:bg-opacity-50'>  ▷  Play</button>
        <button className='mx-2 px-12  p-4 bg-gray-500 text-white rounded-lg text-xl bg-opacity-50 hover:bg-opacity-30'>ⓘ More info</button>
        </div>
    </div>
   
  )
}

export default VideoTitle