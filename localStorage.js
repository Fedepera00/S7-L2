// Funzione per aggiornare il valore del nome salvato
function aggiornaNome() {
  const nomeSalvato = localStorage.getItem("usr");
  document.getElementById("nameDisplay").textContent = nomeSalvato ? nomeSalvato : "Nessun Nome inserito";
}

// Salva il nome in localStorage
function salvaNome() {
  const nome = document.getElementById("usr").value;
  if (nome) {
    localStorage.setItem("usr", nome);
    aggiornaNome();
  }
}

// Rimuovi il nome da localStorage
function rimuoviNome() {
  localStorage.removeItem("usr");
  aggiornaNome();
}

// Al caricamento della pagina, aggiorna il nome visualizzato
window.onload = function () {
  aggiornaNome();
};
