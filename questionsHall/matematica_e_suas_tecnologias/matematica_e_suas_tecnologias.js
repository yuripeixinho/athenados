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




// ======================= NAV BAR MOBILE =======================
class MobileNavbar {
    constructor(mobileMenu, navList, navLinks) {
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass = "active";

        this.handleClick = this.handleClick.bind(this);
    }

    animateLinks() {
        this.navLinks.forEach((link, index) => {
            link.style.animation
            ? (link.style.animation = "")
            : (link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`);
        });
    }

    handleClick() {
        this.navList.classList.toggle(this.activeClass);
        this.mobileMenu.classList.toggle(this.activeClass);
        this.animateLinks()
    }

    addClickEvent() {
        this.mobileMenu.addEventListener("click", this.handleClick);
    }

    init() {
        if(this.mobileMenu) {
            this.addClickEvent();
        }
        return this;
    }
}

const mobileNavbar = new MobileNavbar (
    ".mobile-menu",
    ".nav-list",
    ".nav-list li",
);
mobileNavbar.init()











