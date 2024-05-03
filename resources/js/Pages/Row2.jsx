import React from 'react'
import Piechart from './Piechart'

const Row2 = ({plusgrand}) => {
  return (
    <div>
        <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            
                          <Piechart plusgrand={plusgrand} />

                        </div>
                    </div>
    </div>
  )
}

export default Row2