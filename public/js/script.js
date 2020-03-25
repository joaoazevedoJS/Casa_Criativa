const button =  document.querySelectorAll('.btn-modal')

for(let event of button) {
  event.addEventListener('click', () => {
    document.querySelector('div.modal')
      .classList.toggle('hide')

    document.querySelector('section.intro')
      .classList.toggle('hide')

    document.querySelector('section.last-ideias')
      .classList.toggle('hide')
  })
}
