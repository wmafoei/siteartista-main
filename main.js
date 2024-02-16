const item = document.querySelectorAll("[data-anime]");

const animeScroll = () => {
    const windowTop = window.pageYOffset + window.innerHeight* 0.85;

    item.forEach(Element => {
        if (windowTop > Element.offsetTop){
            Element.classList.add("animate");
        } else{
            Element.classList.remove("animate");
        }
    });
};

animeScroll();

window.addEventListener("scroll", () => {
    animeScroll();
})