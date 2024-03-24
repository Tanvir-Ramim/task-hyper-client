
import TopPart from "./TopPart";


import { DatePicker } from 'antd';
import { useState } from 'react';
import moment from 'moment';
const { RangePicker } = DatePicker;

const TaskBoard = () => {
    const [dates, setDates] = useState([])
    console.log(dates)
    return (
        <div className="bg-gradient-to-r from-pink-200 to-blue-300 min-h-screen">
            <div className="max-w-[1400px] pt-16 m-auto">
                <TopPart></TopPart>
                <div className="border">
                    <div>
                        <div>
                        <div>
                           <span>Filter : </span>
                           <input placeholder ='Assignee Name'className="rounded p-1 " type="text" name="name" />
                           
                           <select className="py-1  rounded ml-5"  name="priority" id="">
                            <option  selected hidden disabled  >Priority</option>
                            <option value="">P0</option>
                            <option value="">P1</option>
                            <option value="">P2</option>
                           </select>
                           <div className="m-5" >
      < RangePicker
        onChange={(values) => {
         
          setDates(values.map(item=>{
            return  moment(item).format('YYYY-DD-MM')
          }))
        }}

      />
    </div>

                        </div>
                        </div>
                        <div>
                            <button className="bg-blue-600 text-white px-5 py-2 rounded">Add New Task </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TaskBoard;