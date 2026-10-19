"use client";
import { useState } from "react";

export default function CopiarPix({ chave }) {
  const [ok, setOk] = useState(false);

  async function copiar() {
    try {
      await navigator.clipboard.writeText(chave.replace(/\D/g, ""));
      setOk(true);
      setTimeout(() => setOk(false), 2500);
    } catch {
      alert("Não deu pra copiar. Copie a chave manualmente.");
    }
  }

  return (
    <button type="button" className="btn btn-main" onClick={copiar}>
      {ok ? "Chave copiada!" : "Copiar chave Pix"}
    </button>
  );
}