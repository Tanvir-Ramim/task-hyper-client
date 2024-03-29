import { useContext } from "react";
import useAxios from "./useAxios";
import { AuthContext } from "../Provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import ErrorPage from "../Components/erroPage/ErrorPage";



const useAllTask = () => {
     const myAxios=useAxios()
      const {setAllTask,user}=useContext(AuthContext)
        
      const allTaskFn=async()=>{
           const res =await myAxios.get(`/allTask?email=${user?.email}`)
           return res
      }

       
    
      const {data:info, isLoading, isPending, refetch, isError}=useQuery({
         queryKey : ['allTaskQuery',user],
         queryFn : allTaskFn
      })
      
      if(isLoading || isPending)
    {
         return <h1>Loading..........</h1>
    }
    if(isError){
         return <ErrorPage></ErrorPage>
    }


    setAllTask(info?.data)
   

  
   const allTaskHook=info?.data
    return {allTaskHook,isLoading,isPending,refetch}
};

export default useAllTask;