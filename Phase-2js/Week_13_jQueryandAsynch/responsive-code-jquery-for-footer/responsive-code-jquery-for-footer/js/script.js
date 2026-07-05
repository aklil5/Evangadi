$(".footer-links-wrapper h3").click(function() {
    $(this).toggleClass("expanded");
    $(this).sibling("ul").find("li").slideToggle(2000);
})

