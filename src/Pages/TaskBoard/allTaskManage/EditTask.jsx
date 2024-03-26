import PropTypes from 'prop-types';
import useAllTask from '../../../hooks/useAllTask';
import moment from 'moment'; 
import useAxios from '../../../hooks/useAxios';
import toast from 'react-hot-toast';
const EditTask = ({taskInfo}) => {
    const {_id, team, title, description, priority, assignee, taskStatus } = taskInfo || {}
    const {refetch}=useAllTask()
    const myAxios=useAxios()

    const handleEdit=(e)=>{
         e.preventDefault()
         const newPriority= e.target.priority.value
         const newStatus= e.target.status.value
          let endDate= ''
          const newId=_id
         if(newStatus == "Completed"){
           endDate =    moment().format('YYYY-MM-DD')
         }
         const taskInfo={
            endDate,newPriority,newStatus,newId
         }
       
       myAxios.put('/updateTask',taskInfo)
       .then(res=>{
        console.log(res.data.modifiedCount)
           if(res.data.modifiedCount>0){
              refetch()
              toast.success('Successfully Update')
           }
       })
       .catch((err)=>{
         console.log(err)
      
     })

    }



    return (
        <div>
            
             <button className="block text-sm font-medium" onClick={()=>document.getElementById('my_modal_44').showModal()}>Edit</button>
<dialog id="my_modal_44" className="modal">
<div className="bg-white  rounded-none border">
    <form method="dialog">
     <div className="flex items-center justify-between">
      <h1 className="p-1 font-bold">Update Your Task</h1>
      <button className="btn btn-sm ">✕</button>
     </div>
    </form>
    
      <div className="bg-gradient-to-r from-pink-200 to-blue-300 mt-5 p-5 ">
        <form  onSubmit={handleEdit} action="">
        <div>
        <h1>Title :</h1>
         <input disabled defaultValue={title} name="title"  className="border w-full " type="text" />
        </div>
         
        <div className="mt-2">
       <h1>Description :</h1>
       <textarea className='border' disabled defaultValue={description}   name="description" id="" cols="32" rows="4"></textarea>
        </div>
        <div className="mt-2">
        <h1>Team :</h1>
         <input disabled defaultValue={team} name="team"  className="border w-full " type="text" />
        </div>
        <div className="mt-2">
        <h1>Assignee :</h1>
         <input disabled defaultValue={assignee} name="assignee"  className="border w-full " type="text" />
        </div>
        <div className="mt-3 gap-3 flex justify-between">
          
                <div>
                <span className='font-medium'>Priority:</span>
        <select defaultValue={priority} className="ml-2 rounded " name="priority" id="">
                  <option value="P0">P0</option>
                  <option value="P1">P1</option>
                  <option value="P2">P2</option>
                </select>
                </div>
                <div>
           <span className='font-medium' >Status:</span>
        <select defaultValue={taskStatus} className="ml-2 rounded " name="status" id="">
                 
                  <option value="Pending">Pending</option>
                  <option value="inProgress">inProgress</option>
                  <option value="Completed">Completed</option>
                  <option value="Deployed">Deployed</option>
                  <option value="Deferred">Deferred</option>
                </select>
           </div>

        </div>
        <div className="flex justify-center mt-5"><input className="bg-blue-500 text-white p- px-9 rounded " type="submit" value="Update" /></div>
        </form>
      </div>
  </div>
</dialog>
        </div>
    );
};
EditTask.propTypes = {
    taskInfo: PropTypes.object
}
export default EditTask;