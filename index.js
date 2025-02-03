// 1.Creiamo la prima applicazione con NodeJs e inizializziamola con npm init
// 2. Scriviamo un file index.js che dovrà stampare nel terminale “Hello World”.
// Proviamo ad eseguirlo dal terminale stesso usando i comandi di node base.
// 3. Impostiamo ora uno script “start” in package.json e facciamo in modo di 
// lanciare il nostro script con npm run start
// 4. Impostiamo un nuovo script “watch” in package.json che possa essere lanciato
// con npm run watch e che aggiorni in tempo reale le modifiche ai nostri file. 
// Lanciamolo e proviamo a cambiare il nostro codice in modo che stampi nel terminale 
// “Hello Boolean”. Dovremmo vedere il terminale senza fermare e rilanciare il server.
// Bonus
// Proviamo a installare un pacchetto, (tipo chalk) proviamo ad utilizzarlo e 
// aggiungere la cartella dei moduli scaricati in .gitignore :wink:



// inizzializziamo npm e sriamo il messaggio da mostrare nel terminale
console.log('hello world!');
// aggiungiuamo lo script start

// aggiungiamo lo script watch e scrivamo il nuovo console.log
console.log('hello boolean');

// scarichiamo chalk
import chalk from "chalk";

// usiamo chalk
console.log(chalk.red("Scritta rossa"));
console.log(chalk.green("Scritta  verde"));
console.log(chalk.blue("Scritta blu"));
console.log(chalk.yellow("Scritta gialla"));
console.log(chalk.black("Scritta nera"))
