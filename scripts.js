const indexes = document.querySelectorAll(".indexes li");
const tabs = document.querySelectorAll(".tab");
const contents = document.querySelectorAll(".tab-content");
const modal = document.getElementById("modal");
const modalText = document.getElementById("modal-text");
const span = document.getElementsByClassName("close")[0];

function reset() {
  for (let i = 0; i < tabs.length; i++) {
    indexes[i].style.borderColor = "transparent";
    tabs[i].style.zIndex = 0;
    tabs[i].classList.remove("active");
    contents[i].classList.remove("active");
  }
}

function showTab(i) {
  indexes[i].style.borderColor = "rgba(211,38,38,0.6)";
  tabs[i].style.opacity = 1;
  tabs[i].style.zIndex = 5;
  tabs[i].classList.add("active");
  contents[i].classList.add("active");
}

function activate(e) {
  if (!e.target.matches(".indexes li")) return;
  reset();
  showTab(e.target.dataset.index);
}

const init = () => showTab(0);

window.addEventListener("load", init, false);
window.addEventListener("click", activate, false);

// Modal functionality
const readMoreButtons = document.querySelectorAll(".read-more");

readMoreButtons.forEach((button) => {
  button.addEventListener("click", function () {
    const fullText = this.getAttribute("data-fulltext");
    modalText.textContent = fullText;
    modal.style.display = "block";
  });
});

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
