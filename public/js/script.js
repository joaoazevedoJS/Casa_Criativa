document.querySelector('button.fat')
  .addEventListener('click', () => {
    document.getElementsByTagName('footer')[0]
      .classList.toggle('hide')
  })
