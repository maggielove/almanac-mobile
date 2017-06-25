let date, dayNumberToday, weekday, monthNumber, month;

date = new Date();
dayNumberToday = date.getDay();
monthNumber = date.getMonth();

const getWeekday = (dayNumber) => {
    switch (dayNumber) {
        case 1:
            weekday = 'Monday';
            break;
        case 2:
            weekday = 'Tuesday';
            break;
        case 3:
            weekday = 'Wednesday';
            break;
        case 4:
            weekday = 'Thursday';
            break;
        case 5:
            weekday = 'Friday';
            break;
        case 6:
            weekday = 'Saturday';
            break;
        case 0:
            weekday = 'Sunday';
            break;
    }
}

const getMonth = () => {
    switch (monthNumber) {
        case 0:
            month = 'January';
            break;
        case 1:
            month = 'February';
            break;
        case 2:
            month = 'March';
            break;
        case 3:
            month = 'April';
            break;
        case 4:
            month = 'May';
            break;
        case 5:
            month = 'June';
            break;
        case 6:
            month = 'July';
            break;
        case 7:
            month = 'August';
            break;
        case 8:
            month = 'September';
            break;
        case 9:
            month = 'October';
            break;
        case 10:
            month = 'November';
            break;
        case 11:
            month = 'December';
            break;
    }
}

export const getDateToday = () => {
    let  day, year, fullDate;

    day = date.getDate();
    year = date.getFullYear();

    getWeekday(dayNumberToday);
    getMonth();

    return fullDate = weekday + ', ' + month + ' ' + day + ', ' + year;
}

export const getNextThreeDays = () => {
    let dayOneNumber;
    if(dayNumberToday === 6) {
        dayOneNumber = 0;
    } else {
        dayOneNumber = dayNumberToday + 1;
    }
    const dayTwoNumber = dayOneNumber + 1;
    const dayThreeNumber = dayOneNumber + 2;
    const nextThreeDays = [];

    getWeekday(dayOneNumber);
    const dayOne = weekday;
    getWeekday(dayTwoNumber);
    const dayTwo = weekday;
    getWeekday(dayThreeNumber);
    const dayThree = weekday;

    nextThreeDays.push(dayOne, dayTwo, dayThree);
    return nextThreeDays;
}
