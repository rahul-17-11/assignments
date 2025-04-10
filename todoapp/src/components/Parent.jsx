import React, { useContext } from 'react'
import ChildOne from './ChildOne'
import { DataContext } from '../context/DataProvider'

const Parent = () => {
    const data = useContext(DataContext)
    console.log(data)
  return (
    <div className='bg-sky-300 border-2 p-3 '>
        <ChildOne />
    </div>
  )
}

export default Parent