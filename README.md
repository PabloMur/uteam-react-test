Prueba Técnica – UTeam
Desarrollador: Pablo Nicolás Murillo

Aplicación web desarrollada como prueba técnica para el puesto de Desarrollador Full Stack Jr en UTeam.
El objetivo fue crear una SPA con React, consumo de API real, CRUD simulado, diseño responsive y navegación moderna.

🌐 Deploy Online

Proyecto disponible en producción:
https://uteam-react-test.vercel.app/

🛠 Tecnologías utilizadas

React + Vite

React Router DOM

CSS Modules

Fetch API (JSONPlaceholder)

Responsive Design

🚀 Funcionalidades
Home

Presentación del proyecto y acceso directo a la prueba técnica

Gradient moderno y visual limpio

Gestión de Posts (CRUD completo)

Listado obtenido desde API

Crear / Editar / Eliminar posts (simulado localmente por limitaciones de API)

Modal de creación/edición

Toasts de feedback al usuario

Paginación inteligente:

Desktop: 9 posts por página

Mobile: 5 posts por página

Filtro de posts desde la vista de usuarios

Gestión de Usuarios

Cards con información útil (email, ciudad, empresa)

Botón para navegar y ver posts del usuario seleccionado

Diseño responsive con grillas adaptables

📂 Arquitectura del Proyecto

src/
• ApiCalls.js
• App.jsx
• main.jsx
• layouts/ (MainLayout con navbar + footer global)
• components/ (componentes reutilizables y UI)
• pages/ (HomePage, TestPage, UsersPage)

Se aplicó:

Atomic design y modularidad

Layout global persistente con Outlet

Estado local optimista en CRUD

Estilos aislados por componente para evitar colisiones

🔗 API utilizada

JSONPlaceholder
https://jsonplaceholder.typicode.com/

Endpoints aplicados:

/posts

/users

▶️ Ejecutar localmente

Clonar repositorio

Instalar dependencias
npm install

Correr proyecto
npm run dev

Abrir en navegador
http://localhost:5173

📌 Mejoras propuestas

Vista detalle del post + comentarios

Dark Mode

Test unitarios

Animaciones adicionales y transiciones suaves

Manejo de estado global (Zustand / Redux)

Validaciones avanzadas en formularios

👨‍💻 Autor

Pablo Nicolás Murillo
Desarrollador Full Stack – Mar del Plata
Prueba Técnica UTeam – 2025
