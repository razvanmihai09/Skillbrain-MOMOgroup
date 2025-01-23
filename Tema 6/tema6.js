// 1. Funcția care creează un obiect pentru rețeta preferată

function createRecipe(titlu, portii, ingrediente) {
    const reteta = {
        titlu: titlu,
        portii: portii,
        ingrediente: ingrediente,
    };

    console.log(`Titlu: ${reteta.titlu}`);
    console.log(`Porții: ${reteta.portii}`);
    console.log(`Ingrediente: ${reteta.ingrediente.join(", ")}`);

    return reteta;

    createRecipe("Pizza", 3, ["șuncă", "caș", "ketchup"]);
}

// 2. Funcția care returnează un obiect nou fără o proprietate specificată

function removeProperty(obj, propToRemove) {
    const newObj = { ...obj };
    delete newObj[propToRemove];
    return newObj;
}

const obj = { a: 1, b: 2 };
console.log(removeProperty(obj, "b"));

// 3. Șir de obiecte pentru cărți și funcția pentru afișare

function manageBooks(books) {
    books.forEach((book) => {
        console.log(`${book.titlu} de ${book.autor}`);

        if (book.esteCitita) {
            console.log(`Ai citit deja “${book.titlu}” de ${book.autor}`);
        } else {
            console.log(`Trebuie să citești “${book.titlu}” de ${book.autor}`);
        }
    });
}

const books = [
    { titlu: "Hobbitul", autor: "J.R.R. Tolkien", esteCitita: true },
    { titlu: "1984", autor: "George Orwell", esteCitita: false },
];

manageBooks(books);