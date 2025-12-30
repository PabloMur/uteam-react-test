import { useState } from "react";
import styles from "./styles.module.css";

export default function ModalAddPost({ onClose, onSave, initialData }) {
  const isEditing = Boolean(initialData);

  const [title, setTitle] = useState(initialData?.title || "");
  const [body, setBody] = useState(initialData?.body || "");
  const [isSaving, setIsSaving] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSaving(true);

    await onSave({ title, body, userId: initialData?.userId || 1 }, initialData?.id);

    setIsSaving(false);
  };

  return (
    <div className={styles.overlay}>
      <div className={`${styles.modal} ${styles.fadeIn}`}>
        <h3>{isEditing ? "Editar Post" : "Nuevo Post"}</h3>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Título"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            disabled={isSaving}
            required
          />

          <textarea
            placeholder="Contenido"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            disabled={isSaving}
            required
          />

          <div className={styles.actions}>
            <button
              type="submit"
              className={styles.saveBtn}
              disabled={isSaving}
            >
              {isSaving
                ? (isEditing ? "Guardando..." : "Creando...")
                : (isEditing ? "Guardar Cambios" : "Crear Post")}
            </button>

            {!isSaving && (
              <button type="button" className={styles.cancelBtn} onClick={onClose}>
                Cancelar
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
