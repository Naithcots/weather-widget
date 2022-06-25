const spinner = document.querySelector(".spinner");

class Spinner {
  show() {
    spinner.style.display = null;
    spinner.classList.remove("hidden");
  }
  hide() {
    spinner.classList.add("hidden");
    spinner.addEventListener(
      "transitionend",
      () => {
        spinner.style.display = "none";
      },
      { once: true }
    );
  }
}

export default Spinner;
