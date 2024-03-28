const navbar = document.querySelector('nav');
let lastScrollTop = 0;

window.addEventListener('scroll', function() {
    let scrollTop = window.scrollY;
    console.log(scrollTop)
    if (scrollTop > lastScrollTop) {
        navbar.style.backgroundColor = "#111317"; // Change color when scrolling down
    }
    else if(scrollTop<6){
        navbar.style.backgroundColor = "transparent"
    }
    
    lastScrollTop = scrollTop; // Update last scroll position
});
