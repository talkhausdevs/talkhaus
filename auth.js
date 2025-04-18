
function openAuthModal() {
  document.getElementById("authModal").style.display = "flex";
}

async function signIn() {
  const email = document.getElementById("authEmail").value;
  const password = document.getElementById("authPassword").value;
  try {
    await firebaseTools.signInWithEmailAndPassword(firebaseTools.auth, email, password);
    alert("Signed in!");
    closeAuthModal();
  } catch (e) {
    alert("Login failed: " + e.message);
  }
}

async function signUp() {
  const email = document.getElementById("authEmail").value;
  const password = document.getElementById("authPassword").value;
  try {
    await firebaseTools.createUserWithEmailAndPassword(firebaseTools.auth, email, password);
    alert("Signed up!");
    closeAuthModal();
  } catch (e) {
    alert("Signup failed: " + e.message);
  }
}
