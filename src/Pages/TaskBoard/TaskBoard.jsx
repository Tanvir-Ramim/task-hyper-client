import { useContext, useEffect, useRef, useState } from 'react';
import TopPart from './topPart/TopPart';
import AddTask from './addTask/AddTask';
import { AuthContext } from '../../Provider/AuthProvider';
import useAllTask from '../../hooks/useAllTask';
import TasksManage from './allTaskManage/TasksManage';
import './TaslBoard.css'



const TaskBoard = () => {
  const {allTask}=useContext(AuthContext)
  const [display,setDisplay]=useState([])
  const {isLoading,isPending,isError}=useAllTask ()
  const assigneeRef = useRef(null);
  const priorityRef = useRef(null);
  const startDateRef = useRef(null);
  const endDateRef = useRef(null);

  useEffect(()=>{
     setDisplay(allTask)
  },[allTask])
  
  if(isLoading || isPending)
  {
       return <h1>Loading..........</h1>
  }
 
  if(isError){
       return <h1>Loading..........</h1>
  }
  
    const handleReset=()=>{
      setDisplay(allTask)
    }

  
   
  const handleFilter=()=>{
     let assignee=''
     let priority=''
     assignee = assigneeRef.current.value 
     priority=priorityRef.current.value 
     const startDate=startDateRef.current.value 
     const endDate=endDateRef.current.value 
    
    console.log(startDate)
    console.log(endDate)
  
    
  
    if(priority =='None' || priority=='Priority'){
        priority=''
    }
    if(assignee=='' && priority==''  &&  startDate =='' ||     endDate==''){
       return setDisplay(allTask)
    }
  
    const filteredTasks = allTask.filter(task => {
      return (
  
        ( ! assignee || task.assignee === assignee) &&
        ( ! priority || task.priority === priority) &&
        ( ! startDate  || task.startDate == startDate) && 
        ( !endDate || task.endDate == endDate)
      );
    });
      console.log(filteredTasks)
    setDisplay(filteredTasks)
   
  }


  const pending = display?.filter((item) => item.taskStatus == "Pending");
  const inProgress = display?.filter((item) => item.taskStatus == "inProgress");
  const completed = display?.filter((item) => item.taskStatus == "Completed");
  const deployed = display?.filter((item) => item.taskStatus == "Deployed");
  const deferred = display?.filter((item) => item.taskStatus == "Deferred");

 
  return (
    <div className="bg-gradient-to-r  p-2 from-pink-200 to-blue-300 min-h-screen ">
      <div className="max-w-[1400px] pt-16 m-auto">
     <TopPart></TopPart>
        <div className=" shadow-lg rounded-md   hover:shadow-xl focus:shadow-xl border-[2px] mt-5 p-3">
          <div className='flex lg:justify-between gap-0 md:gap-3 justify-center flex-wrap ' >
              <div className='order-2  flex  flex-wrap justify-center   lg:order-1'>

               <div className='flex flex-wrap justify-center gap-4'>
               <div className=''>
               <span className='text-lg font-semibold'>Filter : </span>
                <input ref={assigneeRef} placeholder='Assignee Name' className="rounded p-1 " type="text" name="name" />
                <select  ref={priorityRef} className="py-1  sm:mt-0 mt-1 ml-14  rounded md:ml-5 customSm:ml-1  " name="priority" id="">
                  <option selected hidden disabled  >Priority</option>
                  <option value="None">None</option>
                  <option value="P0">P0</option>
                  <option value="P1">P1</option>
                  <option value="P2">P2</option>
                </select>
               </div>

                <div className="flex  sm:ml-0 customSm:ml-12  items-center space-x-2">
      <div className="mb-6 ">
        <input
        ref={startDateRef}
          type="date"
          className="appearance-none block w-32 px-3 py-[5px] border border-gray-300 text-sm rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          placeholder="Start Date"
        
        />
          <span className="text-sm text-pink-400  text-center ml-8">Start Date</span>
        
      </div>
      <div className="mb-6 ">
        <input
      
        ref={endDateRef}
          type="date"
          className="appearance-none block w-32 px-3 py-[5px] border border-gray-300 text-sm rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          placeholder="End Date"
         
        />
         <span className="text-sm ml-8 text-pink-400 ">End Date</span>
      </div>
    </div>


            </div>

             <div  className='md:mt-1'>   <button onClick={handleFilter} className='bg-blue-600  text-white ml-4   px-2 md:mt-0  rounded py-[2px]'>Filter </button></div>
             <div  className='md:mt-1'>   <button onClick={handleReset} className='bg-pink-400 text-white ml-2   px-2 md:mt-0  rounded py-[2px]'>Reset </button></div>
              </div>
            <div className='mb-3 order-1'>
             <AddTask></AddTask>
            </div>
          </div>

     <div className='flex mt-4 2xl:justify-between p-1 rounded   justify-center  flex-wrap  2xl:gap-0  gap-5 ' >

       <div   className=' w-64 h-[588px] bg-white  rounded  '>
        <h1 className='text-center bg-gray-400 p-1 rounded-t text-white'>Pending</h1>
      <div className='  h-[550px] overflow-auto  ' style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
      <TasksManage filterData={pending}></TasksManage>
      </div>
       </div>
       <div   className=' w-64 h-[588px] bg-white  rounded  '>
        <h1 className='text-center bg-yellow-600 p-1 rounded-t text-white'>In Progress</h1>
      <div className='  h-[550px] overflow-auto  ' style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
      <TasksManage filterData={inProgress}></TasksManage>
      </div>
       </div>
       
       <div   className=' w-64 h-[588px] bg-white  rounded  '>
        <h1 className='text-center bg-purple-900 p-1 rounded-t text-white'>Deployed</h1>
      <div className='  h-[550px] overflow-auto  ' style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
      <TasksManage filterData={deployed}></TasksManage>
      </div>
       </div>
       <div   className=' w-64 h-[588px] bg-white  rounded  '>
        <h1 className='text-center bg-rose-400 p-1 rounded-t text-white'>Deferred</h1>
      <div className='  h-[550px] overflow-auto  ' style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
      <TasksManage filterData={deferred}></TasksManage>
      </div>
       </div>
       <div   className=' w-64 h-[588px] bg-white  rounded  '>
        <h1 className='text-center bg-green-600 p-1 rounded-t text-white'>Completed</h1>
      <div className='  h-[550px] overflow-auto  ' style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
      <TasksManage filterData={completed}></TasksManage>
      </div>
       </div>
     </div>
        </div>
      </div>
    </div>
  );
};

export default TaskBoard;