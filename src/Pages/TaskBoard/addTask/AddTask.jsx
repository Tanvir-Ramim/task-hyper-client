

const AddTask = () => {
    return (
        <div>
            <button onClick={()=>document.getElementById('my_modal_3').showModal()} className="bg-blue-600 text-white px-5 py-2 rounded">Add New Task </button>
            <dialog id="my_modal_3" className="modal">
  <div className="bg-white  rounded-none border">
    <form method="dialog">
     <div className="flex items-center justify-between">
      <h1 className="p-1 font-bold">Create A Task</h1>
      <button className="btn btn-sm ">✕</button>
     </div>
    </form>
    
      <div className="bg-gradient-to-r from-pink-200 to-blue-300 mt-5 p-5 ">
        <form action="">
        <div>
        <h1>Title :</h1>
         <input  className="border w-full " type="text" />
        </div>
         
        <div className="mt-2">
       <h1>Description :</h1>
       <textarea  name="" id="" cols="32" rows="4"></textarea>
        </div>
        <div className="mt-2">
        <h1>Team :</h1>
         <input  className="border w-full " type="text" />
        </div>
        <div className="mt-2">
        <h1>Assignee :</h1>
         <input  className="border w-full " type="text" />
        </div>
        <div className="mt-3">
            <span >Priority :</span>
        <select className=" ml-2  rounded  " name="priority" id="">
                 
                  <option value="">P0</option>
                  <option value="">P1</option>
                  <option value="">P2</option>
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