const button = document.querySelectorAll('.btn-modal')

for(let event of button) {
  event.addEventListener('click', () => {
    document.querySelector('div.modal')
      .classList.toggle('hide')

    document.querySelector('div.container')
      .classList.toggle('hide')
  })
}
