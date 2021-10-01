import Modal from "./modal.js";
const modal = Modal();
//pegar quando o modal for lido
const checkButtons = document.querySelectorAll(".actions a.check");
checkButtons.forEach((button) => {
  //adicionar a escuta
  button.addEventListener("click", (event) => {
    modal.open();
  });
});

//Pegar quando marcar como lido for clicado

const deleteButton = document.querySelectorAll(".actions a.delete");

deleteButton.forEach((button) => {
  button.addEventListener("click", (event) => {
    modal.close();
  });
});
