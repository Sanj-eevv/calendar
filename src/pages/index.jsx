import {useState} from "react";
import {addDays, endOfMonth, endOfWeek, format, startOfMonth, startOfWeek} from "date-fns";
import {takeWeek} from "../modules/calendar";

function buildMonth(date = new Date()) {
    const startDate = addDays(startOfWeek(startOfMonth(date)), 1);
    const endDate = endOfWeek(endOfMonth(date));
    const g = takeWeek(date);
    return [
        g(),
        g(),
        g(),
        g(),
        g(),
    ];
}


export default function HomePage() {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const month = buildMonth(selectedDate);

    return (
        <div className="mt-16 container mx-auto">
            <div className="w-full md:p-4 lg:w-1/2 mx-auto lg:mt-4">
                <div
                    className="w-full md:rounded-[20px] lg:rounded-[40px] border sm:shadow-lg bg-white text-gray-900 p-[2px] ">
                    <div
                        className="py-3 text-center bg-[#18bfe7] text-white font-black w-full  md:rounded-t-[20px] lg:rounded-t-[40px] lg:text-[40px] sm:text-[28px]">
                        {format(selectedDate, "MMMM")} {format(selectedDate, "yyyy")}
                    </div>
                    <div className="lg:text-[24px] sm:text-[16px] my-8 text-[#444444]">
                        <div className="flex items-center w-full justify-center font-medium">
                            {
                                days.map(day => (
                                    <div key={day}
                                         className="lg:w-[120px] lg:h-[120px] md:w-[90px] md:h-[90px] w-[60px] h-[60px] flex justify-center items-center">
                                        {day}
                                    </div>
                                ))
                            }

                        </div>
                        {
                            month.map((week, index) => <div key={index}
                                                            className="flex items-center w-full justify-center font-light">
                                {
                                    week.map((day, index) => <div key={index}
                                                                  className="lg:w-[120px] lg:h-[120px] md:w-[90px] md:h-[90px] w-[60px] h-[60px] flex justify-center items-center">
                                            {
                                                format(new Date(), "dd")
                                            }
                                        </div>
                                    )
                                }
                            </div>)
                        }

                    </div>
                </div>
            </div>
        </div>
    )
}