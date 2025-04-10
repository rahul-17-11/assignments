import React, { createContext, useState } from 'react'

export const DataContext = createContext()

const DataProvider = ({children}) => {
    const [data,setData] = useState("This is some data")
  return (
    <DataContext.Provider value={{data,setData}}>
        {children}
    </DataContext.Provider>
  )
}

export default DataProvider