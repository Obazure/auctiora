function scrollToTop() {
  window.scroll({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
}

let scrollToTopButtons = undefined;
const listenScroll = () => {
  if (scrollToTopButtons !== undefined && (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30)) {
    for (let i = 0; i < scrollToTopButtons.length; i++) {
      scrollToTopButtons[i].style.display = "block";
    }
  } else {
    for (let i = 0; i < scrollToTopButtons.length; i++) {
      scrollToTopButtons[i].style.display = "none";
    }
  }
};

scrollToTopButtons = document.getElementsByClassName("btn-to-top");
document.addEventListener("scroll", listenScroll);
