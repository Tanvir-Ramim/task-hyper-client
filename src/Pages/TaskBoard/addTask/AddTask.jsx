import toast from "react-hot-toast";
import useAxios from "../../../hooks/useAxios";
import { useContext, useRef } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import moment from 'moment'; 
import useAllTask from "../../../hooks/useAllTask";

const AddTask = () => {
    const {refetch}=useAllTask()
    const {user}=useContext(AuthContext)
    const myAxios=useAxios()
    const modalRef = useRef(null);
    const handleSubmit=e=>{
          e.preventDefault()
          const title=e.target.title.value
          const team=e.target.team.value
          const description=e.target.description.value
          const priority=e.target.priority.value
          const assignee=e.target.assignee.value
           const userEmail=user?.email
           const startDate = moment().format('YYYY-MM-DD');
            const taskStatus= 'Pending'

          const submitFormInfo={
            title,team,description,priority,assignee,
            userEmail,startDate,taskStatus
          }
          console.log(submitFormInfo)
            
          myAxios.post('/addTask',submitFormInfo)
          .then(res=>{
           if(res.data.insertedId){
              e.target.reset()
            if (modalRef.current) {
              modalRef.current.close(); 
          }
            toast.success('Successfully Add Your Task')
            refetch ()
           }
            
          })
          .catch((err)=>{
            console.log(err)
         })

    }
    return (
        <div>
            <button onClick={()=>document.getElementById('my_modal_3').showModal()} className="bg-blue-600 text-white px-5 py-2 rounded">Add New Task </button>
            <dialog ref={modalRef}  id="my_modal_3" className="modal">
  <div className="bg-white  rounded-none border">
    <form method="dialog">
     <div className="flex items-center justify-between">
      <h1 className="p-1 font-bold">Create A Task</h1>
      <button className="btn btn-sm ">✕</button>
     </div>
    </form>
    
      <div className="bg-gradient-to-r from-pink-200 to-blue-300 mt-5 p-5 ">
        <form onSubmit={handleSubmit} action="">
        <div>
        <h1>Title :</h1>
         <input name="title"  className="border w-full " type="text" />
        </div>
         
        <div className="mt-2">
       <h1>Description :</h1>
       <textarea   name="description" id="" cols="32" rows="4"></textarea>
        </div>
        <div className="mt-2">
        <h1>Team :</h1>
         <input name="team"  className="border w-full " type="text" />
        </div>
        <div className="mt-2">
        <h1>Assignee :</h1>
         <input name="assignee"  className="border w-full " type="text" />
        </div>
        <div className="mt-3">
            <span >Priority :</span>
        <select className="ml-2 rounded " name="priority" id="">
                 
                  <option value="P0">P0</option>
                  <option value="P1">P1</option>
                  <option value="P2">P2</option>
                </select>
        </div>
        <div className="flex justify-center mt-5"><input className="bg-blue-500 text-white p- px-9 rounded " type="submit" value="Submit" /></div>
        </form>
      </div>
  </div>
</dialog>
        </div>
    );
};

export default AddTask;