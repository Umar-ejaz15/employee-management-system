import React from "react";

const TaskListNumberCard = ({ color, key, number, tittle }) => {
  return (
    <div key={key} className="">
      <div className={`${color} py-10 px-5  rounded-2xl task-list-number`}>
        <h1 className="text-sm font-semibold">{number}</h1>
        <h1 className="font-bold text-2xl">{tittle}</h1>
      </div>
    </div>
  );
};

export default TaskListNumberCard;
