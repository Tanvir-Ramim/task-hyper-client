import axios from 'axios';


const myAxios=axios.create({
 baseURL: 'https://task-hyper-server.vercel.app'
})
  const useAxios=()=>{
      return myAxios
  }
export default useAxios;