// 1. Funcția care returnează pătratul unui număr

function findSquare(num) {
    return num * num;
}

console.log(findSquare(6));
console.log(findSquare(0));
console.log(findSquare(-12));

// 2. Funcția pentru generarea unui număr aleatoriu într-un interval

function getRandom(start, end) {
    return Math.floor(Math.random() * (end - start)) + start;
}

console.log(getRandom(3, 5));
console.log(getRandom(10, 20));

// 3. Funcția pentru a găsi numărul de apariții al unei litere într-un șir

function letterCount(sir, litera) {
    const lowerCaseString = sir.toLowerCase();
    const lowerCaseLetter = litera.toLowerCase();
    return lowerCaseString.split(lowerCaseLetter).length - 1;
}

console.log(letterCount("Îmi place programarea", "a"));
console.log(letterCount("Vreau să lucrez în IT", "r"));

// 4. Funcția pentru adăugarea unui număr nelimitat de argumente

function addNumber(...args) {
    return args.reduce((sum, num) => sum + num, 0);
}

console.log(addNumber(1, 2, 3));
console.log(addNumber(1, 2, 3, 4, 5));