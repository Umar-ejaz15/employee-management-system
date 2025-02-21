import React from "react";
import Line from "./Line";
import TaskListNumberCard from "./TaskListNumberCard";

const TaskListNumber = () => {
  const data = [
    {
      number: 12,
      tittle: "New Task",
      color: "bg-red-400",
    },
    {
      number: 5,
      tittle: "Accept Task",
      color: "bg-blue-400",
    },
    {
      number: 1,
      tittle: "Complete Task",
      color: "bg-green-400",
    },
    {
      number: 0,
      tittle: "Failed",
      color: "bg-yellow-400",
    },
  ];
  return (
    <>
      <div className="px-10">
        <Line />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-10 gap-5">
          {data.map((item, index) => {
            return (
              <TaskListNumberCard
                key={index}
                color={item.color}
                number={item.number}
                tittle={item.tittle}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default TaskListNumber;
