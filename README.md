# Prueba Técnica – UTeam  
**Desarrollador:** Pablo Nicolás Murillo

Aplicación web desarrollada como prueba técnica para Desarrollador Full Stack Jr.  
Objetivo: SPA en React con API REST, CRUD simulado, navegación moderna y diseño responsive.

---

## 🌐 Deploy Online  
Producción en Vercel:  
**https://uteam-react-test.vercel.app/**

---

## 🛠 Tecnologías utilizadas

- React + Vite
- React Router DOM
- CSS Modules
- Fetch API (JSONPlaceholder)
- Responsive Design (Mobile-first)

---

## 🚀 Funcionalidades

### Página Home
- Presentación del proyecto
- UI moderna con gradientes y CTA principal

### Gestión de Posts (CRUD funcional local)
- Listado desde API
- Crear / Editar / Eliminar publicaciones (simulado localmente)
- Modal accesible y validado
- Toast de notificaciones
- Vista detallada de post + comentarios del API

#### Paginación Inteligente
- Desktop: **9 posts / página**
- Mobile: **5 posts / página**
- Indicador visual de página activa

#### Filtro de Posts por Usuario
- Navegación desde UsersPage con query params

---

### Gestión de Usuarios
- Cards con datos relevantes (email, empresa, ciudad)
- Botón para ver posts del usuario seleccionado
- Grilla responsive

---

## 📂 Arquitectura del Proyecto

src/
│ ApiCalls.js
│ main.jsx
│ App.jsx
│
├─ layouts/
│ └─ MainLayout.jsx
│
├─ pages/
│ ├─ HomePage/
│ ├─ TestPage/ (Posts)
│ └─ UsersPage/
│
├─ components/
│ ├─ PostCard/
│ ├─ UserCard/
│ ├─ CreatePostModal/
│ ├─ Toast/
│ └─ ui/
│ ├─ Logo
│ └─ CustomNavLink



- Atomic design y modularización
- Layout global con `<Outlet />`
- Estados locales con UX mejorada
- Estilos aislados con CSS Modules

---

## 🔗 API REST utilizada

**JSONPlaceholder**  
https://jsonplaceholder.typicode.com/

Endpoints utilizados:
- `/posts`
- `/users`
- `/comments`

---

## ▶️ Ejecutar localmente

```sh
git clone <repo-url>
cd uteam-react-test
npm install
npm run dev


Abrir en navegador 
http://localhost:5173

Gist con resolicion de los ejercicios: 
https://gist.github.com/PabloMur/96bf0ff434885784200a4376ed35687e

Despliegue en vercel:
https://uteam-react-test.vercel.app

👨‍💻 Autor
Pablo Nicolás Murillo Desarrollador Full Stack – Mar del Plata Prueba Técnica UTeam – 2025
