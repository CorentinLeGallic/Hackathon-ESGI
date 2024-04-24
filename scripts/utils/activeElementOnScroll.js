function activeElementOnScroll(element, visibleOffset) {
    let windowHeight = window.innerHeight;
    let elementTop = element.getBoundingClientRect().top;

    if (elementTop < windowHeight - visibleOffset) {
        element.classList.add("active");
    }
}