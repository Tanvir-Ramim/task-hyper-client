
import { DatePicker, Space } from 'antd';
import { useContext, useState } from 'react';
import moment from 'moment';
import TopPart from './topPart/TopPart';
import AddTask from './addTask/AddTask';
import { AuthContext } from '../../Provider/AuthProvider';
import useAllTask from '../../hooks/useAllTask';
import TasksManage from './allTaskManage/TasksManage';


const { RangePicker } = DatePicker;

const TaskBoard = () => {
  const [dates, setDates] = useState([])
  const {allTask}=useContext(AuthContext)
   
  const {isLoading,isPending,isError}=useAllTask ()
  if(isLoading || isPending)
  {
       return <h1>Loading..........</h1>
  }
 
  if(isError){
       return <h1>Loading..........</h1>
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
          <div className='flex justify-between' >
              <div>
                <span className='text-lg font-semibold'>Filter : </span>
                <input placeholder='Assignee Name' className="rounded p-1 " type="text" name="name" />
                <select className="py-1  rounded md:ml-5 ml-1 " name="priority" id="">
                  <option selected hidden disabled  >Priority</option>
                  <option value="">P0</option>
                  <option value="">P1</option>
                  <option value="">P2</option>
                </select>
                <Space className='ml-5 mt-1 md:mt-0' direction="vertical" size={12}>
                  <RangePicker
                    showTime={{
                      format: 'HH:MM',
                    }}
                    format="YYYY-MM-DD "
                    onChange={(values) => {
                      setDates(values.map(item => {
                        return moment(item).format('YYYY-DD-MM')
                      }))
                    }}
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
            <div>
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
        <h1 className='text-center bg-green-600 p-1 rounded-t text-white'>Completed</h1>
      <div className='  h-[550px] overflow-auto  ' style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
      <TasksManage filterData={completed}></TasksManage>
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
      
     </div>


        </div>
      </div>
    </div>
  );
};

export default TaskBoard;