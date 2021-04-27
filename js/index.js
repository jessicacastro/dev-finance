openModal = () => {
  document
    .querySelector('.modal-overlay')
    .classList
    .add('active');
};

closeModal = () => {
  document
    .querySelector('.modal-overlay')
    .classList
    .remove('active');
};