# 1 - Fichier App

## JSX

JSX est comme le JS.
Permet d'avoir des balises HTML dans le JS.

## `app.jsx`

Remplacer le contenu de `App.jsx` par le code suivant :

```jsx
import './App.css'

function App() {

  return (
    <>
      <p className="paragrah">Front Booking App</p>
    </>
  )
}

export default App
```

Ce qu'il y a dans le `return` est du JSX.
On ne peut pas faire ça en JS classique.

```jsx
<>
  <p className="paragrah">Front Booking App</p>
</>
```

## `app.css`

```css
.paragrah {
  background: red;
  padding: 10px;
}
```

Le css du fichier app.css est lié à `App.jsx`.

Nous créons une classe, par exemple `.paragrah`, et nous l'appliquons à un élément JSX, ici un paragraphe `p`.
> Notez que nous utilisons `className` au lieu de `class` pour appliquer une classe à un élément JSX.
