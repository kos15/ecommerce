import React from 'react'

function HomeSectionCard() {
  return (
    <div className='flex flex-col items-center justify-center cursor-pointer shadow-lg rounded-lg overflow-hidden w-[15rem] mx-3'>
        
        <div className='w-[10rem] flex h-[13rem]'>
        <img className='object-center object-top w-full h-full' src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRzrnUVUjQZ27d_sqvUI9J--wBXzJyOMVAiHdk9tQxPWWKsjBNmRJjPVngA0OQHtf7qHGOq6YaRek3-cnQP0Zz-PgLKdmHtI0LszIk6Covlyw6rdS7E_AR8Kg" alt=''/>
        </div>

        <div className='p-4'>
            <h3 className='text-1g font-medium text-gray-900'>Nofilter</h3>
            <p className='mt-2 text-sm text-gray-500'> Men Solid Pure Cotton Straight Kurta</p>
        </div>
    </div>
  )
}

export default HomeSectionCard