import  { useEffect, useState } from 'react'
import { Datacontext } from './Datacontext';
import data from '../data/data.json'

const Dataprovider = ({children}) => {
        const [alldata, setdata] = useState([])

        useEffect (()=>{
            setdata(data.articles)
        },[])
    return (
   <Datacontext.Provider value ={{alldata}}>
    {children}
   </Datacontext.Provider>
  )
}

export default Dataprovider
