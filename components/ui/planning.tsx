
import * as React from "react";
//import { fetchReservations } from "@/lib/data";

export function Planning() {
    let arr = Array.from({length: 31}, (e, i)=> i);    
    let rooms = Array.from({length: 8}, (e, i)=> i);
    console.log(arr);  
    const today = new Date();
    const [currentMonth, setCurrentMonth] = React.useState(today.getMonth());
    const [currentYear, setCurrentYear] = React.useState(today.getFullYear());    
    //const reservations = await fetchReservations(currentMonth,currentYear,'pensiuneaamelia')
   

    let firstday = new Date(today.getFullYear(), today.getMonth(),1);   
    let daynames = ["ZA","ZO","MA","DI","WO", "DO", "VR"]
    
  return (<div className="flex-grow flex flex-col max-h-screen">
    <table>
      <thead>
        <tr>
          <th>
            {currentMonth}
          </th>
      {arr.map(
            (name, index) => (
                <th key={index}>
                    {name+1}
                </th>
            )
        )}</tr>
        <tr>
          <th>&nbsp;</th>
          {arr.map(
            (name, index) => (
                <th key={index}>
                    {daynames[new Date(today.getFullYear(), today.getMonth(), (today.getDate() + index)).getDay()]}
                </th>
            )
        )}
        </tr>
        </thead>
        <tbody>
          {rooms.map(
            (name, index) => (
              <tr>
                <td key={index}>
                    room {name +1}
                </td>
                {arr.map(
                (name, index) => (
                    <td key={index}>
                        {name+1}
                    </td>
                ))}
              </tr>
            ))}
        </tbody>
    </table>    
  </div>
  );
}