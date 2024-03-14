# 0 - Installation

## Requirements

- Node.js
- npm

## Install

```bash
npm create vite@latest
```

- Project name : frontendWebBookingApp
- Select a framework : React
- Variant : JavaScript

## Structure

```bash

- node_modules/
- public/
- src/
  - assets/
  - App.css
  - App.jsx
  - main.js
- eslintrc.cjs
- .gitignore
- index.html
- package-lock.json
- package.json
- README.md
- vite.config.js
```

### Dossiers

- **public** : Fichier statique accessible par le navigateur
- **src** : Dossier contenant le code source
- **assets** : Dossier contenant les images, les polices, les fichiers CSS, etc. Non accessible par 
- le navigateur

### Fichiers

- `index.html` : Page HTML. Ce que le navigateur charge en premier.
- `main.js` : Point d'entrée de l'application.
- `App.jsx` : Composant principal de l'application.
- `App.css` : Feuille de style de l'application spécifique à `App.jsx`.
- `vite.config.js` : Configuration de Vite

## Lancer le serveur

```bash
npm run dev
```

- Ouvrir le navigateur à l'adresse `http://localhost:5173/`
