



import { DatePicker, Space } from 'antd';
import { useState } from 'react';
import moment from 'moment';
import TopPart from './topPart/TopPart';
import AddTask from './addTask/AddTask';


const { RangePicker } = DatePicker;
const TaskBoard = () => {
  const [dates, setDates] = useState([])
  console.log(dates)
 
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
        </div>
      </div>
    </div>
  );
};

export default TaskBoard;