
import { DatePicker, Space } from 'antd';
import { useContext, useRef, useState } from 'react';
import TopPart from './topPart/TopPart';
import AddTask from './addTask/AddTask';
import { AuthContext } from '../../Provider/AuthProvider';
import useAllTask from '../../hooks/useAllTask';
import TasksManage from './allTaskManage/TasksManage';


const { RangePicker } = DatePicker;

const TaskBoard = () => {
  const [dates, setDates] = useState([])

  const {allTask,setAllTask}=useContext(AuthContext)
  
  const {isLoading,isPending,isError,allTaskHook}=useAllTask ()
  const assigneeRef = useRef(null);
  const priorityRef = useRef(null);
  if(isLoading || isPending)
  {
       return <h1>Loading..........</h1>
  }
 
  if(isError){
       return <h1>Loading..........</h1>
  }
  const convertDate = (inputDate) => {
    const date = new Date(inputDate);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Add leading zero if necessary
    const day = String(date.getDate()).padStart(2, '0'); 
    const formattedDate = `${year}-${month}-${day}`;
    return formattedDate;
  };

  const handleDateChange = (values) => {
    // Extract start and end dates from the values array
    const [startDate, endDate] = values;

     const newStartDate= convertDate(startDate);
     const newEndDate= convertDate(endDate);
     console.log(newStartDate,newEndDate)
    // Do something with the start and end dates if needed
    // For example, set them in state
    setDates([newStartDate,newEndDate]);
  };
 
  
  const handleFilter=()=>{
      setAllTask([])
     let assignee=''
     let priority=''
     assignee = assigneeRef.current.value 
     priority=priorityRef.current.value 
     console.log(assignee)
    const startDate=dates[0]
    const endDate=dates[1]
    // console.log(dates)
    // console.log(startDate,endDate)
    
  
    const filteredTasks = allTaskHook.filter(task => {
      return (
        ( ! assignee || task.assignee === assignee) &&
        ( ! priority || task.priority === priority) 
        // &&
        // ( !startDate || task.startDate == startDate) &&
        // ( !endDate|| task.endDate == endDate)
      );
    });
    setAllTask(filteredTasks)
    console.log(filteredTasks)

  }



  const pending = allTask?.filter((item) => item.taskStatus == "Pending");
  const inProgress = allTask?.filter((item) => item.taskStatus == "inProgress");
  const completed = allTask?.filter((item) => item.taskStatus == "Completed");
  const deployed = allTask?.filter((item) => item.taskStatus == "Deployed");
  const deferred = allTask?.filter((item) => item.taskStatus == "Deferred");


  return (
    <div className="bg-gradient-to-r  p-2 from-pink-200 to-blue-300 min-h-screen ">
      <div className="max-w-[1400px] pt-16 m-auto">
     <TopPart></TopPart>
        <div className=" shadow-lg rounded-md   hover:shadow-xl focus:shadow-xl border-[2px] mt-5 p-3">
          <div className='flex lg:justify-between gap-0 md:gap-3 justify-center flex-wrap ' >
              <div className='order-2  flex  flex-wrap justify-center   lg:order-1'>
               <div>
               <span className='text-lg font-semibold'>Filter : </span>
                <input ref={assigneeRef} placeholder='Assignee Name' className="rounded p-1 " type="text" name="name" />
                <select  ref={priorityRef} className="py-1  sm:mt-0 mt-1 ml-14  rounded md:ml-5 customSm:ml-1  " name="priority" id="">
                  <option selected hidden disabled  >Priority</option>
                  <option value="None">None</option>
                  <option value="P0">P0</option>
                  <option value="P1">P1</option>
                  <option value="P2">P2</option>
                </select>
                <Space className='sm:ml-1 w-52 ml-[52px] mt-1 customSm:w-[270px] md:ml-5' direction="vertical" size={12}>
      <RangePicker
        showTime={{
          format: 'HH:MM',
        }}
        format="YYYY-MM-DD"
        onChange={handleDateChange}
        renderExtraFooter={() => (
          <div className="ant-picker-panel-footer">
            <div className="ant-picker-footer-extra">
              <h1 className='flex justify-center text-red-500'>OK button at the bottom right </h1>
            </div>
          </div>
        )}
      />
    </Space>
               </div>
             <div  className='sm:mt-1 mt-3'>   <button onClick={handleFilter} className='bg-blue-700 text-white ml-4   px-2 md:mt-0  rounded py-[2px]'>Press </button></div>
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