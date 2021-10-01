export default function Modal() {
  const cancelButton = document.querySelector(".button.cancel");
  const modalWrapper = document.querySelector(".modal-wrapper");

  cancelButton.addEventListener("click", close);
  function open() {
    //funcionalidade de atribuir a classe active para a classe modal
    modalWrapper.classList.add("active");
  }
  function close() {
    //funcionalidade de remover a classe active na classe modal
    modalWrapper.classList.remove("active");
  }

  return {
    open,
    close,
  };
}
