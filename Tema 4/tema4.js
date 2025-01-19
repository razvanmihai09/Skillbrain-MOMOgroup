// 1.Funcția care verifică dacă un număr este divizibil cu 10

function isDivisibleBy10(number) {
    return number % 10 === 0;
}

// 2.Funcția tellFortune

function tellFortune(numarCopii, numePartener, locatieGeografica, locMunca) {
    const mesaj = `Vei fi un ${locMunca} în ${locatieGeografica}, căsătorit cu ${numePartener} și vei avea ${numarCopii} copii.`;
    console.log(mesaj);
}

// 3.Funcția pentru determinarea zilei săptămânii

function getDayOfWeek(dayNumber) {
    switch (dayNumber) {
        case 1:
            return "Luni";
        case 2:
            return "Marți";
        case 3:
            return "Miercuri";
        case 4:
            return "Joi";
        case 5:
            return "Vineri";
        case 6:
            return "Sâmbătă";
        case 7:
            return "Duminică";
        default:
            return "Număr invalid. Introdu un număr între 1 și 7.";
    }
}