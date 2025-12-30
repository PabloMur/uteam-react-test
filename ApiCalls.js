const BASE_URL = "https://jsonplaceholder.typicode.com";

/* ============================
   POSTS: CRUD + Detail + Comments
=============================== */

export async function getPosts() {
  try {
    const res = await fetch(`${BASE_URL}/posts`);
    if (!res.ok) throw new Error("Error al obtener los posts");
    return await res.json();
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
}

export async function createPost(newPost) {
  const res = await fetch(`${BASE_URL}/posts`, {
    method: "POST",
    body: JSON.stringify(newPost),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  if (!res.ok) throw new Error("Error al crear post");
  return await res.json();
}

export async function updatePost(id, updatedPost) {
  const res = await fetch(`${BASE_URL}/posts/${id}`, {
    method: "PATCH",
    body: JSON.stringify(updatedPost),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  if (!res.ok) throw new Error("Error al actualizar post");
  return await res.json();
}

// Obtener un post específico por ID
export async function getPostById(id) {
  const res = await fetch(`${BASE_URL}/posts/${id}`);
  if (!res.ok) throw new Error("Error al obtener detalle del post");
  return await res.json();
}

// Obtener comentarios del post
export async function getPostComments(postId) {
  const res = await fetch(`${BASE_URL}/posts/${postId}/comments`);
  if (!res.ok) throw new Error("Error al obtener comentarios");
  return await res.json();
}

/* ============================
   USERS
=============================== */

export async function getUsers() {
  const res = await fetch(`${BASE_URL}/users`);
  if (!res.ok) throw new Error("Error al obtener los usuarios");
  return await res.json();
}
