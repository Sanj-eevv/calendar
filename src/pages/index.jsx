import {
    addDays, addMonths,
    endOfWeek,
    format,
    isAfter,
    isEqual,
    isSameMonth,
    startOfDay,
    startOfMonth,
    startOfWeek, subMonths
} from "date-fns";
import {useState} from "react";
import {ChevronLeftIcon, ChevronRightIcon} from "@heroicons/react/20/solid";

function takeWeek(date=new Date()){
    let _date = startOfWeek(date);
    let dateArr = [];
    const g = () => {
        dateArr.push(_date);
        _date = addDays(_date, 1);
    }
    while (true){
        if(isAfter(_date,endOfWeek(date))){
            break;
        }
        g();
    }
    return dateArr;
}

function buildMonth(date = new Date()){
    let _date = startOfWeek(startOfMonth(date));
    const g = () => {
        const week = takeWeek(_date);
        _date = addDays(week.at(-1),1);
        return week;
    }
    return [g(), g(), g(), g(), g()];
}

export default function HomePage() {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const weeks = buildMonth(selectedDate);
    return (
        <div className="mt-16 container mx-auto">
            <div className="w-full md:p-4 lg:w-1/2 mx-auto lg:mt-4">
                <div
                    className="w-full md:rounded-[20px] lg:rounded-[40px] border sm:shadow-lg bg-white text-gray-900 p-[2px] ">
                    <div
                        className="py-3 flex items-center justify-center gap-4 bg-[#18bfe7] text-white font-black w-full  md:rounded-t-[20px] lg:rounded-t-[40px] lg:text-[40px] sm:text-[28px]">
                        <button onClick={()=>{
                            setSelectedDate(subMonths(selectedDate,1))
                        }}>
                            <ChevronLeftIcon className="h-8 w-8"></ChevronLeftIcon>
                        </button>
                            <span className="min-w-[310px] text-center">
                                {
                                    format(selectedDate, 'MMMM yyyy')
                                }
                            </span>
                        <button onClick={()=>setSelectedDate(addMonths(selectedDate,1))}>
                            <ChevronRightIcon className="h-8 w-8"></ChevronRightIcon>
                        </button>
                    </div>
                    <div className="lg:text-[24px] sm:text-[16px] my-8 text-[#444444]">
                        <div className="flex items-center w-full justify-center font-medium">
                            {
                                days.map(day=> {
                                    return   <div key={day}
                                        className="lg:w-[120px] lg:h-[120px] md:w-[90px] md:h-[90px] w-[60px] h-[60px] flex justify-center items-center">
                                        {day}
                                    </div>
                                })
                            }
                        </div>
                        {
                            weeks.map((week, index) => {
                                return <div key={index} className="flex items-center w-full justify-center font-light">
                                    {
                                        week.map((day,index) => {
                                            return  <div key={index} onClick={() => setSelectedDate(day)}
                                                className="lg:w-[120px] lg:h-[120px] md:w-[90px] md:h-[90px] w-[60px] h-[60px] flex justify-center items-center cursor-pointer">
                                                <span className={`${isEqual(startOfDay(selectedDate), day) ? "bg-[#18bfe7] text-white pointer-events-none" : ""}
                                                  rounded-full p-4 hover:bg-slate-600 hover:text-white transition duration-300 ease-in-out ${!isSameMonth(selectedDate, day) ? "text-slate-400": ""}`}>{format(day, 'dd')}</span>
                                            </div>
                                        })
                                    }
                                </div>
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}