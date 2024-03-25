



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
    <div className="bg-gradient-to-r from-pink-200 to-blue-300 min-h-screen ">
      <div className="max-w-[1400px] pt-16 m-auto">
     <TopPart></TopPart>
        <div className="border mt-5 p-2">
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

     <div className='flex 2xl:justify-between  justify-center  flex-wrap  2xl:gap-0 gap-5' >
       <div   className=' w-64 h-[525px]  border border-red-500 '>
        <h1>Pending</h1>
      <div className=' '>
      <TasksManage filterData={pending}></TasksManage>
      </div>

       </div>

       <div className='w-64 h-[525px]  border border-red-500'>
        <h1>In Progress</h1>
       <TasksManage filterData={inProgress}></TasksManage>
       </div>
       <div  className='w-64 h-[525px]  border border-red-500'>
        <h1>Completed</h1>
       <TasksManage filterData={completed}></TasksManage>
       </div>

       <div  className='w-64 h-[525px]  border border-red-500'>
        <h1>Deployed</h1>
       <TasksManage filterData={deployed}></TasksManage>
       </div>

       <div  className='w-64 h-[525px]  border border-red-500'>
        <h1>Deferred</h1>
       <TasksManage filterData={deferred}></TasksManage>
       </div>
     </div>


        </div>
      </div>
    </div>
  );
};

export default TaskBoard;