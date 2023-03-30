window.onscroll = () => {
    let scrolled = window.scrollY
    document.getElementById("l5").style.transform =
        "translateY(" + scrolled * 0 + "px)"
    document.getElementById("l4").style.transform =
        "translateY(" + scrolled * 0.15 + "px)"
    document.getElementById("l3").style.transform =
        "translateY(" + scrolled * 0.3 + "px)"
    document.getElementById("l2").style.transform =
        "translateY(" + scrolled * 0.45 + "px)"
    document.getElementById("l1").style.transform =
        "translateY(" + scrolled * 0.6 + "px)"
}