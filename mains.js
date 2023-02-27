// ukol 1
let parseDate = (date) => {
    return {
        day: Number(date.slice(0, 2)),
        month: Number(date.slice(3, 5)),
        year: Number(date.slice(6)),
    }
};

console.log(parseDate);

// ukol 2 

let formatDate = ({ day, month, year }) => {

    let datee = {
        dayy: String(day).padStart(2, '0'),
        monthh: String(month).padStart(2, '0'),
        yearr: String(year),
    }

    let { dayy, monthh, yearr } = datee;

    return dayy + "." + monthh + "." + yearr;
}


// { day: 12, month: 3, year: 2015 } 
// formatDate({ day: 8, month: 5, year: 1997 })

// ukol 3
let round = (numero) => {
    let whole = Math.trunc(numero)
    let noWhole = numero - whole
    if (Math.abs(noWhole) === 0.5) {
        if (whole % 2 === 0) {
            return whole
        } else {
            return whole + 2 * noWhole
        }
    }
    return Math.round(numero)
};
