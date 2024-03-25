import { useEffect, useState } from "react";
import useAxios from "./useAxios";



const useAllTask = () => {
     const myAxios=useAxios()
   const [taskInfo,setTaskInfo]=useState([])
     const [fetchLoading , setFetchLoading]=useState(true)
     
     useEffect(()=>{
        myAxios.get('/allTask')
     .then(res=>{
         setTaskInfo(res.data)
         setFetchLoading(false);
     })
     .catch(error => {
       
        console.error('Error fetching data:', error);
        setFetchLoading(false);
      });
     },[])

    return {taskInfo,fetchLoading}
};

export default useAllTask;