// main.js
import { PI, additionFunction } from './math.js';

console.log(PI); // 3.14
console.log(additionFunction(2, 3)); // 5



// apprendre le ES6 

// ES6  ou ECMACScript 2015 , est une version majeure de JavaScript qui a introduit des fonctionnalité puissantes , ameliorant le langage  de manière significative . Dans ce cours , nous verons ensemble toutes les fonctionnalités de ES6 



// avant ES6 on utilisait var 
// ES6 , on utilise maintenant let et const 

// let : c'est une variable modifiable , avec une portée de bloc 

// const : variable immuable , sa valeur ne peut pas etre reaffectée 


// var 
if(true){

    var age = 30; 
}

console.log(age)


if(true){

let yourAge = 45 ; 
}

// console.log(yourAge)  : result will be undefined  ; 

// II- Les fonctions flechées 

// Les fonctions flechées  permettent de dééclarer des fonctions plus concises , tout en conservant le context de this , ce qui les rend ideales pour les callbacks et les methodes 





// III- les fonction anonymes 


const numbers = [1,2,3,4,5] ; 

const squaresWithAnonymFunction = numbers.map(function(n){
    return n * n ; 
})

console.log(`Voici le carré de la liste avec la fonction anonyme : ${squaresWithAnonymFunction}`) ; 

const squares = numbers.map((n)=>n*n) ; 
console.log(`Voici le carré de la liste numbers : ${squares}`)



//  IV- les modèles Literaux (Template literals ):

//  Les templates literales permmettent de creer des chaines de caractere multilignes et d'inclure des expressions dynamiques  a l'interieur de ces chaines , ce qui simplifie la manipulation des chaines par rapport a l'operateur + .crrer une chaine multilignes tres facilement 


const name = "Jon" ; 

const greeting = "Hello , " + name + "!" ; 




const text_disposé_multilignes = `Ligne : BARRY SANOUSSA PART AU MARCHE 
Ligne 2 : BARRY EST TRES CONTENT AUJOURD'HUI 
Ligne 3 : Nous remercions tous Dieu d'etre toujours vivants 

`
console.log(text_disposé_multilignes) ; 

// V-Les parametres par defaut   

// ES6 introduit la possibilité de definir des parametres par defaut pour les fonctions afin d'eviter des valeurs undefined quand aucun argunment n'est passé . 


function greet(name) {
    const n = name || 'Anonyme';
    console.log(`Hello, ${n}`);
  }
  
  greet()


  function greet1(name="BARRY"){

    console.log(`hello ${name}`)
  }

  greet1()

// VI- La Destructuration (Destructuring)

// La destructuration permet d'extraire des valeurs d'objets ou de tableaux et de les assigner à des variables de manière plus concise . 


// Destructuration d'objets : 

const user = { id: 1 , name : 'Alice' , age:25} ; 
// avant ES6 
const id = user.id ; 
const nam = user.name ; 
// avec ES6   

const {id1 , name1} = user ; 
console.log(id1 , name1)

// Destructuration des tableaux : 

const numbersNumb = [1,2,5,6,9,8,3,8] ; 
// avant ES6  
const first = numbersNumb[0] ; 

// avec ES6  : 
[a , b , h , k ,o] = numbersNumb
console.log(`a : ${a} , b:${b} , k : ${k} , o :${o}`) ; 


// VII- Rest and SPREAD Operators 

// Ces deux operateurs ... sont parmi les plus utilisés en ES6 . Spread Operator permet d'etendre les elements d'un tableau ou d'un objet dans un autre . 

// Spread Operator (disséminer les éléments d'un tableau ou objet ) : Le spread operator permet permet d'etendre les elements d'un tableau ou d'un objet dans un autre  . 

// Le rest operator permet de regrouper des arguments ou des elements restant dans un tableau 

// Exemple dans une fonction 




// Pour les tableaux 
const arr1 = [1,2,3,6,5,8,9,6] ; 
const arr2 = [ ...arr1 , 4,5] ; 
console.log(arr2)

// Pour les objets 

const obj1 = {val1 : 1 , val2 : 2 , val3:3} ; 
const obj2 = {...obj1 , c : 856}

console.log(obj2)


// Rest Operator (collecter des arguments dans une fonction) :
// Le rest operator permet de regrouper des arguments ou des éléments restants dans un tableau.

// Exemple dans une fonction :
// js
// Copy code


function sum(...numbers) {
  return numbers.reduce((acc, num) => acc + num, 0);
}

console.log(sum(1, 2, 3, 4)); // 10


// VIII Les Promesses (Promises ) : 

// ES6  introduit les promesses pour gerer plus simplement le code asynchrone (remplaçant les "callback-hell")


const promise = new Promise((resolve , reject)=>{

    // Opération asychrone 

    if(true){
        resolve('Operation Reussie')
    }else {
        reject('Opération échouée ')
    }
})

promise .then(result => console.log(result))
.catch(error=>console.log(error)) ; 


// IX- Les Classes  : 

// Les classes en ES6 fournissent une syntaxe plus propre pour la programmations orientée objet. Elles ne remplacent pas le modèle basé sur les prototypes mais rendent la gestion des objets et l'heritage plus intuitive . 


class Person{

    constructor(name , age){
        this.name = name ; 
        this.age = age ; 
    }
    greet(){
        console.log(`Hello , my name is ${this.name}`)
    }
}

const john = new Person('Jon'  ,  25)

john.greet() ;

// Heritage avec extends 

class Employee extends Person {

constructor(name , age , jobTitle){

    super(name , age) ; // appelle  le constructeur de la classe parente 

    this.jobTitle = jobTitle  ; 
}

 work() {
    console.log(`${this.name} is working as a ${this.jobTitle}`) ; 
}

}
const alice = new Employee('Alice' ,30 , 'Developer') ; 
alice.greet() ; 
alice.work() ; // 


// XX- Les modules ES6 (import / export)
// avant ES6 , il etait difficile de modulariser du code en javaScript . ES6 introduit import/export pour permettre une organisation modulaire du code . 

// Exporter des variables ou fonctions 

console.log(`la valeur de PI est : ${PI}`)