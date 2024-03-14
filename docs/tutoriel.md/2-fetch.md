# 2 - Fetch les données serveurs

Nous voulons afficher les informations du serveur sur notre frontend.

## Fetch

Pour faire une requête depuis le navigateur, nous utilisons l'API `fetch`.

C'est natif en JavaScript.

```javascript
fetch('http://localhost:3000/api/reservations')
  .then(response => response.json())
  .then(data => console.log(data))
```

`fetch` prend en paramètre : 
  
- l'URL du serveur.
- Des options que nous verrons plus tard

Il retourne une `Promise`.

Nous devons donc utiliser `then` pour récupérer la réponse (ou `async/await`).

## `App.jsx`

```js
import './App.css'

function App() {

  fetch('http://localhost:3000/api/reservations')
  .then(response => response.json())
  .then(data => console.log(data))

  return (
    <>
      <p className="paragrah">Front Booking App</p>
    </>
  )
}

export default App

```

Nous avons une erreur `CORS` dans la console.

## Problème `CORS`

CORS signifie Cross-Origin Resource Sharing.
C'est un mécanisme de sécurité qui protège les navigateurs contre les requêtes malveillantes.

Par exemple, si un site malveillant fait une requête à votre serveur, il ne pourra pas lire la réponse, à cause de son hôte d'origine.

CORS ne protège que côté client. Un serveur n'a pas besoin de CORS pour faire une requête à un autre serveur.

### Solution

Côté serveur, il faut ajouter le middleware `cors`.

```bash
npm install cors
```

```js
const cors = require('cors')

app.use(cors())
```

Problème résolu.

## Erreur 401

Il faut désormais récupérer le token de l'utilisateur pour faire une requête.

Pour l'instant nous passons par POSTMAN, plus tard, nous verrons comment faire cela depuis le frontend.

Nous devons ajouter le token dans les headers de la requête.

```js

const token = "votre token..."

fetch('http://localhost:3000/api/reservations', {
  headers: {
    'Authorization': token
  }
})
  .then(response => response.json())
  .then(data => console.log(data))
```

Super ! Ça marche.

Comment faire pour afficher ces données dans notre application ?
