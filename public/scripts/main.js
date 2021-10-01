import Modal from "./modal.js";
const modal = Modal();
//pegar quando o modal for lido
const modalTitle = document.querySelector(".modal h2");
const modalDescription = document.querySelector(".modal p");
const modalButton = document.querySelector(".modal button");
const checkButtons = document.querySelectorAll(".actions a.check");
checkButtons.forEach((button) => {
  //adicionar a escuta
  button.addEventListener("click", handleClick);
});

//Pegar quando marcar como lido for clicado

const deleteButton = document.querySelectorAll(".actions a.delete");
deleteButton.forEach((button) => {
  button.addEventListener("click", (event) => handleClick(event, false));
});

function handleClick(event, check = true) {
  const text = check ? "marcar como lida" : "Excluir ";
  modalTitle.innerHTML = `${text}   essa pergunta ?`;
  modalDescription.innerHTML = `Tem certeza que deseja ${text} esta pergunta ?`;
  modal.open();
}
