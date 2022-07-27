const boop = document.querySelector('.boop-img');
const modal = document.querySelector('.boop-modal');
const closeButton = document.querySelector('.close-btn');

boop.addEventListener('click', ()=> {
    modal.classList.add('is-open')

    closeButton.addEventListener('click', ()=> {
        modal.classList.remove('is-open')
    })
})



