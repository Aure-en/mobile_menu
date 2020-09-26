let navController = (() => {

  const _open = (nav) => {
    nav.style.transform = "translateX(0)";
  }

  const _close = (nav) => {
    nav.style.transform = "translateX(-100%)";
  }

  const enableOpen = () => {
    document.querySelector(".nav-button--open").addEventListener("click", (event) => _open(document.querySelector(`#${event.target.closest("button").dataset.target}`)));
  }

  const enableClose = () => {
    document.querySelector(".nav-button--close").addEventListener("click", (event) => _close(document.querySelector(`#${event.target.closest("button").dataset.target}`)));
  }

  return { enableOpen, enableClose };

})();

navController.enableOpen();
navController.enableClose();