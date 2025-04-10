import React, { useContext } from 'react'
import { DataContext } from '../context/DataProvider'

const ChildFive = () => {
    const {data} = useContext(DataContext)
  return (
    <div className='bg-sky-300 border-2 p-3'>{data}</div>
  )
}

export default ChildFive