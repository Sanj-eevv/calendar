import {addDays, endOfWeek, isAfter, startOfWeek} from "date-fns";
function takeDay(date = new Date()) {
    let _date = date;
    return () => {
        _date = addDays(_date, 1);
        return _date;
    }
}

export function takeWeek(date = new Date()) {
    let _date = startOfWeek(date);
    return () => {
        const week = [];
        const g = takeDay(_date);
        let day = g();
        while (true) {
            if (isAfter(day, endOfWeek(_date))) break;
            week.push(day);
            day = g();
        }
        _date = addDays(week.at(-1), 1);
        return week;
    }
}

