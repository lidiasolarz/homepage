const name = "Lidisky!";

console.log (
`Witaj, mam na imię ${name}`
);

const heading = document.querySelector('.main__heading--js');
heading.innerHTML = `Strona domowa ${name}`;

console.log(heading);