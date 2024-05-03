import React from 'react'

const Row1 = ( {encours, livre, nonlivre} ) => {
  return (
    <div>
         <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            
                          <h3 className=' text-amber-500-textxl font-semibold'>
                            EN COURS
                          </h3> 
                          <p className='text-xl mt-4'>
                            <span className='mr-2'>
                            {encours}
                            </span>
                          </p>

                           
                        </div>
                    </div>

                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            
                          <h3 className=' text-red-500-textxl font-semibold'>
                            NON LIVRE
                          </h3> 
                          <p className='text-xl mt-4'>
                            <span className='mr-2'>
                            {nonlivre}
                            </span>
                          </p>

                           
                        </div>
                    </div>

                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            
                          <h3 className=' text-green-500-textxl font-semibold'>
                            LIVRE
                          </h3> 
                          <p className='text-xl mt-4'>
                            <span className='mr-2'>
                            {livre}
                            </span>
                          </p>

                           
                        </div>
                    </div>
    </div>
  )
}

export default Row1