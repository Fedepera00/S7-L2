// Funzione per gestire il contatore in sessionStorage
let tempoSessione = sessionStorage.getItem("contatore") ? parseInt(sessionStorage.getItem("contatore")) : 0;

function aggiornaContatore() {
  tempoSessione++;
  document.getElementById("timer").textContent = tempoSessione;
  sessionStorage.setItem("contatore", tempoSessione);
}

setInterval(aggiornaContatore, 1000);
