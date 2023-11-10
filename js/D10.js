/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// JS Basics

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/
console.log('ESERCIZIO A');

let sum = 10 + 20;

console.log(sum);

/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/

console.log('ESERCIZIO B');

let random = Math.floor(Math.random() * 21);

console.log(random);


/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/

console.log('ESERCIZIO C');

let me = {
  name: 'Francesco',
  surname: 'Napoli',
  age: 27
}

console.log(me);

/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/

console.log('ESERCIZIO D');

delete me.age;

console.log(me);

/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/

console.log('ESERCIZIO E');

me.skills = ['JavaScript'];  //html e css non sono considerati linguaggi di programmazione :')

console.log(me);

/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/

console.log('ESERCIZIO F');

me.skills.push('CSS'); //css giusto per riempire :')

console.log(me);

/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/

console.log('ESERCIZIO G');

me.skills.pop();

console.log(me);

// Funzioni

/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/

console.log('ESERCIZIO 1');

function dice() {
  return Math.floor(Math.random() * 6) + 1;
}

const dado = dice();
console.log(dado);

/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/

console.log('ESERCIZIO 2');

function whoIsBigger(n1, n2) {
  if (n1 > n2) {
    return n1;
  } else {
    return n2;
  }
}

console.log(whoIsBigger(5, 29));

/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/

console.log('ESERCIZIO 3');

function splitMe(stringa) {
  return stringa.split(' ');
}

console.log(splitMe('Devo recuperare il test teorico di JS'));

/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/

console.log('ESERCIZIO 4');

function deleteOne(string, boolean) {
  if (boolean === true) {
    return string.slice(1);
  } else {
    return string.slice(0, -1);
  }
}

console.log(deleteOne('EPICODE', false));

/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/

console.log ('ESERCIZIO 5');

function onlyLetters (stringNumber) {
  let noNumbers = '';
  for (let i = 0; i < stringNumber.length; i++) {
    const character = stringNumber[i];
    if ((character >= 'a' && character <= 'z') || (character >= 'A' && character <= 'Z') || character === ' ') {
      noNumbers += character;
    }
  }
  return noNumbers;
}

console.log(onlyLetters('Ho preso 56 al test teorico di JS'));

/* inizialmente fatto con espressione regolare -> trovata su StackOverflow mi sembra anche che a lezione qualcuno l'avesse usata non ricordo :(
/d rappresenta i numeri da 0 a 9 e g indica di sostituire tutti i numeri (in questo caso) trovati

function onlyLetters (stringNumber) {
  return stringNumber.replace(/\d/g, '');  
}

console.log(onlyLetters('Ho preso 56 al test teorico di JS'));
*/

/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/

console.log('ESERCIZIO 6');

function isThisAnEmail (email) {
  if (email.includes('@') && email.includes('.')) {
    return true
  } else {
    return false
  }
}

console.log(isThisAnEmail('napo.fra96gmail.com'))  // funziona... restituisce false perchè manca @ 

/* inizialmente avevo usato questo metodo con checkValidity visto a lezione
function isThisAnEmail (email) {
  let input = document.createElement('input');
  input.type = 'email';
  input.value = email;
  return input.checkValidity();  
}

console.log(isThisAnEmail('napo.fra96.com'));
*/

/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/

console.log('ESERCIZIO 7');

let currentDay = new Date();

function whatDayIsIt () {
  return currentDay.getDay();
}

const week = [ "Domenica", "Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato"];
const dayIndex = whatDayIsIt();
const today = week[dayIndex];
console.log("Oggi è " + today);

/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().

  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/

console.log('ESERCIZIO 8');

function rollTheDices(number) {
  let sum = 0;
  let values = [];

  for (let i = 0; i < number; i++) {
    let diceSum = dice();
    sum += diceSum;
    values.push(diceSum);
  }
  return {
    sum: sum,
    values: values
  }
}

console.log(rollTheDices(8));

/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/

console.log('ESERCIZIO 9');

function howManyDays(data) {
    let days = new Date();
    let getDay = days.getDate();
    let getLastDay = new Date ('2023-11-01');


} // ???? non riesco proprio a ragionarci su questo...


/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/

console.log('ESERCIZIO 10')

function isTodayMyBirthday(myBirthday) {
  const date = new Date ();
  const day = date.getDate();
  const month = date.getMonth() + 1; // i mesi vengono contati da 0 senza l'1 restituirebbe ottobre invece che novembre
  const year = date.getFullYear();

  const currentDate = `${day}/${month}/${year}`;
  const birthday = myBirthday.toLocaleDateString();  // trasformo data in stringa

  return currentDate === birthday;
}

const myBirthday = new Date('1996-10-02')
console.log("Oggi è il mio compleanno? " + isTodayMyBirthday(myBirthday))  // ci ho messo un'ora per farlo D:, cercando anche online

// Arrays & Oggetti

// NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file

/* Questo array viene usato per gli esercizi. Non modificarlo. */

// mi sono permesso di spostare l'array qui sopra altrimenti dava movies come indefinito

const movies = [
  {
    Title: 'The Lord of the Rings: The Fellowship of the Ring',
    Year: '2001',
    imdbID: 'tt0120737',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
  },

  {
    Title: 'The Lord of the Rings: The Return of the King',
    Year: '2003',
    imdbID: 'tt0167260',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Two Towers',
    Year: '2002',
    imdbID: 'tt0167261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of War',
    Year: '2005',
    imdbID: 'tt0399295',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'Lords of Dogtown',
    Year: '2005',
    imdbID: 'tt0355702',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings',
    Year: '1978',
    imdbID: 'tt0077869',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1990',
    imdbID: 'tt0100054',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg',
  },
  {
    Title: 'The Lords of Salem',
    Year: '2012',
    imdbID: 'tt1731697',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Greystoke: The Legend of Tarzan, Lord of the Apes',
    Year: '1984',
    imdbID: 'tt0087365',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1963',
    imdbID: 'tt0057261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg',
  },
  {
    Title: 'The Avengers',
    Year: '2012',
    imdbID: 'tt0848228',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Infinity War',
    Year: '2018',
    imdbID: 'tt4154756',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Age of Ultron',
    Year: '2015',
    imdbID: 'tt2395427',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Endgame',
    Year: '2019',
    imdbID: 'tt4154796',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
  },
]


/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/

console.log('ESERCIZIO 11');

const vehicle = {
  brand: 'Volkswagen',
  name : 'Passat',
  color: 'Grey',
  trim: 'Style'
}

function deleteProp(obj, stringa) {
  delete obj[stringa];
  return obj;
}

console.log(deleteProp(vehicle, 'color'));

/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/

console.log('ESERCIZIO 12');

function newestMovie(movies) {
  return movies.reduce(function (film1, film2) {                            // reduce per confrontrare due film alla volta
    return parseInt(film1.Year) > parseInt(film2.Year) ? film1 : film2;
  });
}

console.log(newestMovie(movies));


/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/

console.log('ESERCIZIO 13');

function countMovies(movies) {
  return movies.length;
}

console.log("Il numero totale dei film contenuti nell'array movies è " + countMovies(movies));

/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/

console.log('ESERCIZIO 14');

function onlyTheYears(movies) {
  return movies.map(function(film) {
    return film.Year;
  });
}

console.log(onlyTheYears(movies));

/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/

console.log('ESERCIZIO 15');

function onlyInLastMillenium(movies) {
  return movies.filter(function(film) {
    return parseInt(film.Year) > 1999;
  });
}

console.log(onlyInLastMillenium(movies));

/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/

console.log('ESERCIZIO 16');

function sumAllTheYears(movies) {
  return movies.reduce(function(totale, film) {
    return totale + parseInt(film.Year);
  }, 0);
}

console.log(sumAllTheYears(movies));

/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/

console.log('ESERCIZIO 17');

function searchByTitle(movies, searchString) {
  return movies.filter(movie => movie.Title.toLowerCase().includes(searchString.toLowerCase()));
}

console.log(searchByTitle(movies, 'avengers'));


/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/

console.log('ESERCIZIO 18');

function searchAndDivide (movies, contentString) {
  const match = movies.filter(movie => movie.Title.toLowerCase().includes(contentString.toLowerCase()));
  const unmatch = movies.filter(movie => !movie.Title.toLowerCase().includes(contentString.toLowerCase()));

  return {match, unmatch};
}

console.log(searchAndDivide(movies, 'lord of'));

/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/

console.log('ESERCIZIO 19');

function removeIndex (index) {

const myMovies = [...movies];  // mi ero quasu dimenticato dell'operatore rest...
myMovies.splice(index, 1);     // 1 elemento in base all'indice specificato
return myMovies;

}

console.log(removeIndex(3));

// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/

console.log('ESERCIZIO 20 no console log');

function selectAnID () {
return document.getElementById('container')
};



/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/

console.log('ESERCIZIO 21');

function selectAllTd () {
  return document.querySelectorAll('td');
};

console.log(selectAllTd());

/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/

console.log('ESERCIZIO 22 no console log');

function printAllTdInConsole() {
  const tdElements = selectAllTd();
  tdElements.forEach(td => {
    console.log(td.textContent);
  });
}

/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/

console.log('ESERCIZIO 23 no console log');

function redBg() {
  const allLinks = document.querySelectorAll('a');
  allLinks.forEach(link => {
    link.style.backgroundColor = 'red';
  });
}

/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/

console.log('ESERCIZIO 24 no console log');

function addAnElementOnList () {
  const list = document.getElementById('myList');
  const newElement = document.createElement('li');
  list.appendChild(newElement);
}

/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/

console.log('ESERCIZIO 25 no console log');

function clearList() {
  const list = document.getElementById('myList');
  list.innerHTML = ''; 
}

/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/

console.log('ESERCIZIO 26 no console log');

function addClassToAllTr () {
  const selectTr = document.querySelectorAll('tr')
  selectTr.forEach (tr => {
    tr.classList.add('test');
  });
}

// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***

*/

console.log('ESERCIZIO 27')

// ???

/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****

*/

console.log('ESERCIZIO 28')

// ???????

/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/

console.log('ESERCIZIO 29')

function isItPrime(num) {
  for (let i = 2; i < num; i++) {       // i parte da 2 fino a 28 (in questo caso) perchè cerchiamo (se ci sono) divisori che siano diversi dal numero fornito come parametri
    if (num % i === 0) return false;    // se è divisibile per altri numeri oltre 1 non è primo
  }
  return num > 1;                     // a seguito dei controlli precedenti controllo che il numero sia > 1    
}

console.log(isItPrime(29) + ', questo è un numero primo');
console.log(isItPrime(15) + ', questo non è un numero primo');
