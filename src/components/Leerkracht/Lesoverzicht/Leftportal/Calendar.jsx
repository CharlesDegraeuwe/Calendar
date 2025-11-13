import { useState } from "react";
import left from "../../../../assets/icons/left.svg";
import right from "../../../../assets/icons/right.svg";
export default function Calendar() {
  const daysOfWeek = ["ma", "di", "wo", "do", "vr", "za", "zo"];
  const monthsOfYear = [
    "januari",
    "februari",
    "maart",
    "april",
    "juni",
    "juli",
    "augustus",
    "september",
    "oktober",
    "november",
    "december",
  ];

  const currentDate = new Date();
  const [currentMonth, setCurrentMonth] = useState(currentDate.getMonth());
  const [currentYear, setCurrentYear] = useState(currentDate.getYear());

  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();

  console.log("dagen in maand", daysInMonth, "eerste dag", firstDayOfMonth);

  return (
    <div className="rounded-3xl w- h-2/5 order-solid border-black border-1 p-5 flex flex-col justify-center items-center">
      <div className="w-full h-fit flex flex-row  justify-between">
        <div className="cursor-pointer w-8 h-8 border-solid border-black border-1 rounded-full flex justify-center items-center">
          <img src={left} alt="left-btn" className="h-5" />
        </div>
        <span className="flex justify-center items-center">
          {monthsOfYear[currentMonth]}
        </span>
        <div className="cursor-pointer w-8 h-8 border-solid border-black border-1 rounded-full flex justify-center items-center">
          <img src={right} alt="right-btn" className="h-5" />
        </div>
      </div>
      <div className="w-full h-15  grid grid-cols-7 gap-4 text-sm text-black justify-around items-center">
        {daysOfWeek.map((day) => {
          return (
            <span className="flex justify-center items-center" key={day}>
              {day}
            </span>
          );
        })}
      </div>
      <div className="w-full h-fit grid grid-cols-7 gap-4 text-sm text-black">
        {Array(daysInMonth)
          .keys()
          .map((i) => {
            return (
              <span className="flex justify-center items-center" key={i}>
                {i + 1}
              </span>
            );
          })}
      </div>
    </div>
  );
}
