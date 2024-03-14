# Affichage coté client

Nous récupérons bien les données serveurs mais rien n'est affiché.

## Le State

Pour afficher les données, nous devons d'abord les stocker dans un state.

Le state est un objet qui contient les données de notre composant.

```jsx
import React, { useState } from 'react'

const [reservations, setReservations] = useState([])
```

- `useState` est un hook qui permet de créer un state dans un composant fonctionnel.

Pour le créer, nous devons lui donner une valeur initiale ici un tableau vide`([])`.

Puis nous associons deux paramètres à `useState` :

- `reservations` : la valeur du state
- `setReservations` : la fonction qui permet de modifier la valeur du state

Pour des raisons de performance, nous ne devons pas modifier directement le state.

voici le code.

Attention !!! Ne copiez pas le code ci-dessous, vous aurez une boucle infinie !

```jsx
import './App.css'
import { useState } from 'react';

function App() {

  const [reservations, setReservations] = useState([]);

  const token = "...";

  fetch('http://localhost:3000/api/reservations', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': token
  }})
  .then(response => response.json())
  .then(data => {
    console.log(data)
    setReservations(data);
  })

  return (
    <>
      <p className="paragrah">Front Booking App</p>
    </>
  )
}

export default App
```

## `useEffect`

Si vous copiez le code ci-dessus, vous aurez une boucle infinie.

Pour pallier à ce problème, nous utilisons `useEffect`.

`useEffect` est un hook qui permet d'effectuer des actions à chaque rendu du composant.

### Pourquoi il y a une boucle infinie ?

- Au départ il y a un rendu du composant.
- Le `fetch` est exécuté.
- Le `fetch` met à jour le state.
- Le state est mis à jour.
- Le composant est rendu.
- Le composant se rend compte que le state a changé.
- Le composant est en rendu à nouveau.
- Ce qui provoque une boucle infinie.

`useEffect` permet de dire au composant de ne pas se rendre à nouveau si le state n'a pas changé.

```jsx
import { useState, useEffect } from 'react';

  useEffect(() => {
    fetch('http://localhost:3000/api/reservations'
    // ...
  }, []);
```

Le deuxième paramètre de `useEffect` est un tableau vide `[]`.
Il signifie qu'aucun composant ne déclenchera le rendu à nouveau.
Cela permet d'éviter la boucle infinie.

```jsx
import './App.css'
import { useState, useEffect } from 'react';

function App() {

  const [reservations, setReservations] = useState([]);

  const token = "...";

  useEffect(() => {

  fetch('http://localhost:3000/api/reservations', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': token
  }})
  .then(response => response.json())
  .then(data => {
    console.log(data)
    setReservations(data);
  })
}, []);

  return (
    <>
      <p className="paragrah">Front Booking App</p>
    </>
  )
}

export default App

```

## Afficher l'objet `reservations`

Nous allons maintenant afficher le resultat dans le JSX, à l'intérieur de la balise `return`.

Comme nous avons un tableau d'objets, nous allons utiliser la méthode `map` pour parcourir le tableau.

Nous mettrons les informations dans une balise `ul` (unordered list) et chaque élément dans une balise `li` (list item).

```js
<ul className="reservationController">
  {reservations.map((reservation, index) => (
    <li className="reservation" key={index}>
      <p>Nombre de Clients : {reservation.number_of_customers}</p>
      <p>Nom : {reservation.reservation_name}</p>
      <p>Note : {reservation.reservation_note}</p>
    </li>
  ))}
</ul>
```

## App.css

```css
.reservationContainer {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 10px;
}

.reservation {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  color: #222;
  padding: 25px;
  margin: 10px;
  border: 1px solid #000;
  border-radius: 5px;
  background-color: lightgray;
}
```
