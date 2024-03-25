import axios from 'axios';


const myAxios=axios.create({
 baseURL: 'http://localhost:5000'
})
  const useAxios=()=>{
      return myAxios
  }
export default useAxios;