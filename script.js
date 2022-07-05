
const modalLoad = document.getElementById("mfs-modal")
const modal = document.getElementById("mfsModal");
const collapse = document.getElementById("collapse");
const body = document.getElementById("body");


modalLoad.addEventListener("click", displayModal);
collapse.addEventListener("click", closeModal)


function displayModal() {
  modal.style.display = "block";
  body.style.overflowy = "hidden";
}

function closeModal() {
  modal.style.display = "none";
  body.style.overflow = "auto";
}


window.onclick = function(event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
}