
function openComposer() {
  document.getElementById("composerModal").style.display = "flex";
}

function closeComposer() {
  document.getElementById("composerModal").style.display = "none";
}

document.getElementById("openPost").addEventListener("click", openComposer);
