import { useContext } from "react";
import useAxios from "./useAxios";
import { AuthContext } from "../Provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";



const useAllTask = () => {
     const myAxios=useAxios()
      const {setAllTask,user}=useContext(AuthContext)
        
      const allTaskFn=async()=>{
           const res =await myAxios.get(`/allTask?email=${user?.email}`)
           setAllTask(res.data)
           return res
      }

      const {data, isLoading, isPending, refetch, isError}=useQuery({
         queryKey : ['allTaskQuery',user],
         queryFn : allTaskFn
      })

      if(isLoading || isPending)
    {
         return <h1>Loading..........</h1>
    }
    if(isError){
         return <h1>Loading..........</h1>
    }

   const allTaskHook=data?.data
    return {allTaskHook,isLoading,isPending,refetch}
};

export default useAllTask;