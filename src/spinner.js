const spinnerDOM = document.querySelector(".spinner");

class Spinner {
  show() {
    spinnerDOM.style.display = null;
    spinnerDOM.classList.remove("hidden");
  }
  hide() {
    spinnerDOM.classList.add("hidden");
    spinnerDOM.addEventListener(
      "transitionend",
      () => {
        spinnerDOM.style.display = "none";
      },
      { once: true }
    );
  }
}

const spinner = new Spinner();

export default spinner;
