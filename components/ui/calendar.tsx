"use client"
import * as React from "react";
import {Link} from "@/i18n/navigation";
import { CalendarBody } from "./calendar-body";

export function Calendar() {
    const today = new Date();
    const [currentMonth, setCurrentMonth] = React.useState(today.getMonth());
    const [currentYear, setCurrentYear] = React.useState(today.getFullYear());
    const [children, setChildren] = React.useState();
    const [adults, setAdults] = React.useState();
   
    function next(){
        if(currentMonth == 11)
        {
            setCurrentMonth(0);
            setCurrentYear(currentYear + 1);
        }  
        else
        {
            setCurrentMonth(currentMonth + 1);
        }         
    }
  function previous(){
    if(currentMonth == 0)
        {
            setCurrentMonth(11);
            setCurrentYear(currentYear -1);
        }  
        else
        {
            
            setCurrentMonth(currentMonth-1);
        } 
  }
  function currentmonth(): string {
        const months = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "okt", "nov", "dec"]
        const d = new Date();
        //return new Date().toDateString();
        //alert(months[currentMonth] + " " + currentYear.toString())
        return  months[currentMonth] + " " + currentYear.toString();
    }
  return (<div className="flex-grow flex flex-col max-h-screen">
    <div className="flex justify-start mb-4">
      <Link prefetch={false} className="button button--active w-[520px]" onClick={previous} href={"#"}><span>&lt; Previous</span></Link>
    <Link prefetch={false} className="button button--active w-[520px]" onClick={next} href={"#"}><span>
        Next &gt;
      </span></Link>
    </div>
    {/* Add this div: */}
    <h2 className="text-lg font-semibold">
      {currentmonth()}
    </h2>
    <table style={{border:"1px solid black"}}>
        <thead>
            <tr>
                <th colSpan={4}>                    
                    <input placeholder="Adults" value={adults} style={{width:"110px"}} />
                </th>
                <th colSpan={3}>      
                    <input placeholder="Children" value={children} style={{width:"110px"}} />
                </th>
            </tr>
            <tr>
                <th colSpan={4}>                    
                    {currentmonth()}
                </th>
                <th>                  
                    &lt;
                </th>
                <th>                  
                    &gt;    
                </th>
                <th>                    
                    +
                </th>
            </tr>
            <tr>
                <th>M</th>
                <th>D</th>
                <th>W</th>
                <th>D</th>
                <th>V</th>
                <th>Z</th>
                <th>Z</th>
            </tr>
        </thead>
        <CalendarBody month={currentMonth} year={currentYear} adults={adults} children={children} />
    </table>
  </div>
  );
}