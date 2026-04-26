import React from 'react'

const RightCard = () => {
  return (
    <div className='h-full w-80 overflow-hidden relative rounded-4xl'>
      <img className='h-full w-full object-cover' src="https://images.unsplash.com/photo-1766066014773-0074bf4911de?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGl0JTIwcHJvZmVzc2lvbmFsc3xlbnwwfHwwfHx8MA%3D%3D" alt="" />
      <div className='absolute top-0 left-0 h-full w-full bg-amber-300'>
        <h2>1</h2>

        <div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, aliquam. Harum commodi amet porro!</p>
        </div>

        <div>
            <button>Satisfied</button>
            <button><i className="ri-arrow-right-line"></i></button>
        </div>
      </div>
    </div>
  )
}

export default RightCard
