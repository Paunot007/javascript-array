const library = [
    IBAN,
    title,
    author,
    pages,
]
const books = [
{
    IBAN: "9780802126597",
    title: "See What I Have Done",
    author: "Sarah Schmidt",
    pages: "324 pages",
},
{
    IBAN: "9781403974754",
    title: "Japanamerica",
    author: "Roland Kelts",
    pages: "256 pages",
},
{
    IBAN: "9781403974754",
    title: "Harry Potter and the Cursed Child",
    author: "J. K. Rowling, John Tiffany and Jack Thorne",
    pages: "343 pages",
},
{
    IBAN: "9781403974754",
    title: "Dexter's Laboratory: Dee's Day",
    author: "Fridolfs, Derek",
    pages: "104 pages",
},
{
    IBAN: "9780345287793",
    title: "Garfield At Large: His First Book",
    author: "Jim Davis",
    pages: "96 pages",
},
];
console.log("books" , books);
//list books from arrays
function listbooks() {
    library.forEach(book => {
        console.log(`IBAN: ${books.IBAN}, Title: ${books.title}, Author: ${books.author}, Pages: ${books.pages}`);
    });
}

// Example usage:
listbooks();