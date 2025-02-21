import React from "react";
import TaskListNumber from "../../TaskListNumber";

const EmployeeDashboard = () => {
  return (
    <>
      <div className="bg-white w-full h-screen dark:bg-zinc-900 text-zinc-800 dark:text-white ">
        <div className="flex justify-between items-center px-10 py-5">
          <div>
            <h1 className="text-xs ">Hello!</h1>
            <h1 className="text-2xl font-bold">Umar 👋</h1>
          </div>
          <div>
            <button className="px-8 py-2 text-sm font-bold rounded-md hover:bg-rose-600 bg-rose-500">
              Logout
            </button>
          </div>
        </div>
        <TaskListNumber />
      </div>
    </>
  );
};

export default EmployeeDashboard;
