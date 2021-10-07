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
  event.preventDefault();
  const text = check ? "marcar como lida" : "Excluir ";
  const slug = check ? "check" : "delete";
  const roomId = document.querySelector("#room-id").dataset.id;
  const quiestionId = event.target.dataset.id;
  const form = document.querySelector(".modal form");
  form.setAttribute("action", `/question/${roomId}/${quiestionId}/${slug}`);

  /*forma que o modal vai se apresentar*/
  modalTitle.innerHTML = `${text}   essa pergunta ?`;
  modalDescription.innerHTML = `Tem certeza que deseja ${text.toLowerCase()} esta pergunta ?`;
  modalButton.innerHTML = `Sim,${text.toLocaleLowerCase()} `;
  check
    ? modalButton.classList.remove("red")
    : modalButton.classList.add("red");
  modal.open();
}
