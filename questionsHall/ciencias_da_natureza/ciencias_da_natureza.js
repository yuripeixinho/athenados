// Identificar o clique no menu
const menuItems = document.querySelectorAll('.nav-subject a');
console.log(menuItems);


// verificar o item que foi clicado e fazer referência com o alvo
menuItems.forEach(item => {
    item.addEventListener('click', smoothScroll);
})

function smoothScroll(event) {
    event.preventDefault();
    const element = event.target
    const id = element.getAttribute('href');
    const to = document.querySelector(id).offsetTop;

// Animar o scroll até o alvo 
    window.scroll({
        top: to - 160,
        behavior: 'smooth',
    })
}











