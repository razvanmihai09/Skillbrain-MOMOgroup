// 1. Tipărirea numerelor pare de la 0 la n

function printEvenNumbers(n) {
    for (let i = 0; i <= n; i += 2) {
        console.log(i);
    }
}

// 2. Calculul sumei numerelor dintr - un șir

function sumArray(numbers) {
    return numbers.reduce((sum, num) => sum + num, 0);
}

// 3. Funcție care inversează un șir de numere

function reverseArray(numbers) {
    return numbers.slice().reverse();
}

// 4. Returnarea numărului de vocale dintr-un șir

function countVowels(str) {
    const vowels = "aeiouAEIOU";
    let count = 0;

    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}