# Cours Complet sur ES6 (ECMAScript 2015)
ES6, ou ECMAScript 2015, est une version majeure de JavaScript qui a introduit des fonctionnalités puissantes, améliorant le langage de manière significative. Ce cours te donnera une compréhension complète des principales nouveautés d'ES6, accompagnées d'exemples professionnels pour que tu puisses utiliser ces concepts dans des projets réels.

1. Let et Const : Déclaration de Variables
Avant ES6 : var
Avant ES6, les variables étaient déclarées avec var, ce qui introduisait des problèmes de portée (scope) et de hoisting.

ES6 : let et const
let : Variable modifiable, avec une portée de bloc (limitées aux accolades {}).
const : Variable immuable (sa valeur ne peut pas être réaffectée), également avec une portée de bloc.
Exemple :
js
Copy code
// var : portée globale ou de fonction
if (true) {
  var age = 30;
}
console.log(age); // 30 (accessible même en dehors du bloc)

// let : portée de bloc
if (true) {
  let name = "Alice";
}
console.log(name); // Erreur : name n'est pas défini (hors du bloc)

// const : immuable
const PI = 3.14;
PI = 3.15; // Erreur : impossible de réaffecter une constante
Bonnes pratiques :

Utilise const par défaut pour les valeurs qui ne changent pas.
Utilise let pour les variables qui doivent être modifiées.
2. Les Fonctions Fléchées (Arrow Functions)
Les fonctions fléchées permettent de déclarer des fonctions plus concises, tout en conservant le contexte de this, ce qui les rend idéales pour les callbacks et les méthodes courtes.

Syntaxe :
js
Copy code
const add = (a, b) => a + b;
Exemple avec une fonction anonyme classique :
js
Copy code
const numbers = [1, 2, 3];
const squares = numbers.map(function(n) {
  return n * n;
});
Réécriture avec les fonctions fléchées :
js
Copy code
const squares = numbers.map(n => n * n);
Contexte de this :
Les fonctions fléchées ne créent pas leur propre contexte de this, ce qui les rend particulièrement utiles dans les méthodes d'objets ou les callbacks asynchrones.

js
Copy code
function Person() {
  this.age = 0;

  setInterval(() => {
    this.age++;
    console.log(this.age);
  }, 1000);
}

const p = new Person(); // `this` dans la fonction fléchée fait référence à l'instance `Person`
3. Les Modèles de Littéraux (Template Literals)
Les template literals permettent de créer des chaînes de caractères multi-lignes et d'inclure des expressions dynamiques à l'intérieur de ces chaînes, ce qui simplifie la manipulation des chaînes par rapport à l'opérateur +.

Avant ES6 :
js
Copy code
const name = "John";
const greeting = "Hello, " + name + "!";
Avec les template literals :
js
Copy code
const name = "John";
const greeting = `Hello, ${name}!`;
Tu peux également créer des chaînes multi-lignes très facilement :

js
Copy code
const text = `Ligne 1
Ligne 2
Ligne 3`;
4. Les Paramètres par Défaut
ES6 introduit la possibilité de définir des paramètres par défaut pour les fonctions, afin d'éviter des valeurs undefined quand aucun argument n'est passé.

Avant ES6 :
js
Copy code
function greet(name) {
  const n = name || 'Anonyme';
  console.log(`Hello, ${n}`);
}
Avec ES6 :
js
Copy code
function greet(name = 'Anonyme') {
  console.log(`Hello, ${name}`);
}

greet(); // Hello, Anonyme
greet('Alice'); // Hello, Alice
5. La Déstructuration (Destructuring)
La déstructuration permet d'extraire des valeurs d'objets ou de tableaux et de les assigner à des variables de manière plus concise.

Déstructuration d'objets :
js
Copy code
const user = { id: 1, name: 'Alice', age: 25 };

// Avant ES6
const id = user.id;
const name = user.name;

// Avec ES6
const { id, name } = user;
Déstructuration de tableaux :
js
Copy code
const numbers = [1, 2, 3];

// Avant ES6
const first = numbers[0];

// Avec ES6
const [first, second] = numbers;
Tu peux également renommer des variables ou définir des valeurs par défaut :

js
Copy code
const { id: userId = 0, name } = user;
6. Rest et Spread Operators
Ces deux opérateurs ... sont parmi les plus utilisés en ES6.

Spread Operator (disséminer les éléments d'un tableau ou objet) :
Le spread operator permet d'étendre les éléments d'un tableau ou d'un objet dans un autre.

Pour les tableaux :
js
Copy code
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5]; // [1, 2, 3, 4, 5]
Pour les objets :
js
Copy code
const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1, c: 3 }; // { a: 1, b: 2, c: 3 }
Rest Operator (collecter des arguments dans une fonction) :
Le rest operator permet de regrouper des arguments ou des éléments restants dans un tableau.

Exemple dans une fonction :
js
Copy code
function sum(...numbers) {
  return numbers.reduce((acc, num) => acc + num, 0);
}

console.log(sum(1, 2, 3, 4)); // 10
7. Les Promesses (Promises)
ES6 introduit les promesses pour gérer plus simplement le code asynchrone (remplaçant les "callback hell").

Syntaxe de base :
js
Copy code
const promise = new Promise((resolve, reject) => {
  // Opération asynchrone
  if (/* succès */) {
    resolve('Opération réussie');
  } else {
    reject('Opération échouée');
  }
});

promise
  .then(result => console.log(result))
  .catch(error => console.error(error));
Exemple professionnel avec fetch :
js
Copy code
fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Erreur:', error));
Les promesses peuvent être combinées avec Promise.all() ou Promise.race() pour exécuter plusieurs opérations asynchrones en parallèle.

8. Les Classes
Les classes en ES6 fournissent une syntaxe plus propre pour la programmation orientée objet. Elles ne remplacent pas le modèle basé sur les prototypes, mais rendent la gestion des objets et de l'héritage plus intuitive.

Exemple de base :
js
Copy code
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

const john = new Person('John', 25);
john.greet(); // Hello, my name is John
Héritage avec extends :
js
Copy code
class Employee extends Person {
  constructor(name, age, jobTitle) {
    super(name, age); // Appelle le constructeur de la classe parente
    this.jobTitle = jobTitle;
  }

  work() {
    console.log(`${this.name} is working as a ${this.jobTitle}`);
  }
}

const alice = new Employee('Alice', 30, 'Developer');
alice.greet(); // Hello, my name is Alice
alice.work(); // Alice is working as a Developer
9. Les Modules ES6 (Import / Export)
Avant ES6, il était difficile de modulariser du code en JavaScript. ES6 introduit la syntaxe import/export pour permettre une organisation modulaire du code.

Exporter des variables ou fonctions :
js
Copy code
// math.js
export const PI = 3.14;
export function add(a, b) {
  return a + b;
}
Importer dans un autre fichier :
js
Copy code
// main.js
import { PI, add } from './math';

console.log(add(2, 3)); // 5
console.log(PI); // 3.14
Tu peux aussi exporter un module par défaut :

js
Copy code
export default function subtract(a, b) {
  return a - b;
}

// main.js
import subtract from './math';
console.log(subtract(5, 2)); // 3
Conclusion
ES6 représente une évolution majeure pour JavaScript, apportant de nombreuses fonctionnalités pour améliorer la productivité et la lisibilité du code. Grâce à ces nouvelles fonctionnalités, les développeurs peuvent écrire du code plus concis, maintenable et moderne.

Résumé des Concepts Clés :
let, const pour la gestion des variables
Fonctions fléchées pour un code plus simple et intuitif
Template literals pour manipuler les chaînes de caractères
Déstructuration pour extraire facilement des valeurs
Rest et Spread operators pour des manipulations plus flexibles de tableaux et d'objets
Promises pour une gestion asynchrone plus élégante
Classes pour une structure orientée objet plus claire
Modules ES6 pour une organisation modulaire du code