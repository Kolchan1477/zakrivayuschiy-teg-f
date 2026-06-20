// Открытие и закрытие диалогового окна
const dialog = document.getElementById('memory-dialog');
const saveButton = document.querySelector('.card__save-button');
const closeButton = document.getElementById('dialog-close');

if (saveButton && dialog) {
  saveButton.addEventListener('click', () => {
    dialog.showModal();
  });
}

if (closeButton && dialog) {
  closeButton.addEventListener('click', () => {
    dialog.close();
  });
}

// Закрытие по клику вне диалога
if (dialog) {
  dialog.addEventListener('click', (e) => {
    if (e.target === dialog) {
      dialog.close();
    }
  });
}