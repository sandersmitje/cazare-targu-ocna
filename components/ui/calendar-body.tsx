"use client"
import * as React from "react";
import {Link} from "@/i18n/navigation";

interface CalendarProps {
  year: number,
  month: number,
  adults: number | undefined,
  children: number | undefined
}

export function CalendarBody(props: CalendarProps) {

    let firstday = new Date(props.year, props.month,1);
    let firstVisibleDay = getMonday(firstday);
    firstVisibleDay.setDate(firstVisibleDay.getDate() -1);
    let currentDay = new Date(firstVisibleDay.getFullYear(),firstVisibleDay.getMonth(),firstVisibleDay.getDay()-1);
    currentDay.setDate(firstVisibleDay.getDate());
    //alert(currentDay);

    function getCurrentDay(){        
        firstVisibleDay.setDate(firstVisibleDay.getDate() +1);
        //alert(firstVisibleDay);
        return firstVisibleDay.getDate();
    }

    function getMonday(d: Date) {
        var day = d.getDay(),
        diff = d.getDate() - day + (day == 0 ? -6 : 1); // adjust when day is sunday
        return new Date(d.setDate(diff));
    }   

    
    function test(){
        let rows = [1,2,3,4,5];
        let cols = [1,2,3,4,5,6,7];
        
        return (         
            <>
                {rows.map(
                    (name, index) => (<tr key={index}>
                        {cols.map(
                            (name, index) => (
                                <td key={index}>
                                    {getCurrentDay()}
                                </td>
                            )
                        )}
                    </tr>)
                )}
            </>
        );
    }    
    return (
        <tbody>
            {test()}
        </tbody>
    );
}