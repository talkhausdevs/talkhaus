
function signIn() {
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;
  firebaseTools.signInWithEmailAndPassword(firebaseTools.auth, email, password)
    .then(() => window.location.href = 'home.html')
    .catch(err => alert("Login failed: " + err.message));
}

function signUp() {
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;
  firebaseTools.createUserWithEmailAndPassword(firebaseTools.auth, email, password)
    .then(() => window.location.href = 'home.html')
    .catch(err => alert("Signup failed: " + err.message));
}
