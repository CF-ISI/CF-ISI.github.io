import firebase from "firebase/app";
import "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
    apiKey: "AIzaSyDPTeimjklASDA0yq3xhlSsR7uKILrmOaE",
    authDomain: "cf-isi.firebaseapp.com",
    databaseURL: "https://cf-isi-default-rtdb.firebaseio.com",
    projectId: "cf-isi",
    storageBucket: "cf-isi.appspot.com",
    messagingSenderId: "217700504031",
    appId: "1:217700504031:web:4143186cd2110901e3b46a",
    measurementId: "G-CYJVG0SHCS"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const db = firebase.firestore();

db.collection("users").add({
    first: "Ada",
    last: "Lovelace",
    born: 1815
})
.then((docRef) => {
    console.log("Document written with ID: ", docRef.id);
})
.catch((error) => {
    console.error("Error adding document: ", error);
});




// Initialize Cloud Firestore and get a reference to the service
/*const db = firebase.firestore();


// Iniciar sesión
var formLogin = document.getElementById('form-login');
formLogin.addEventListener('submit', function (event) {
  event.preventDefault();

  // Obtener email y password
  var email = document.getElementById('email-login').value;
  var password = document.getElementById('password-login').value;

  // Iniciar sesión
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then(function () {
      // Cerrar modal y mostrar mensaje
      $('#modal-login').modal('hide');
      showToast('Bienvenido ' + email + '!');
    })
    .catch(function (error) {
      // Mostrar mensaje de error
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode, errorMessage);
      document.getElementById('mensaje-error-login').style.display = 'block';
    });
});

// Registrarse en Curso 1
var formCurso1 = document.getElementById('form-registro')
// Registrarse en Curso 2
var formCurso2 = document.getElementById('form-registro-curso2');
formCurso2.addEventListener('submit', function (event) {
  event.preventDefault();

  // Obtener nombre y email
  var nombre = document.getElementById('nombre-curso2').value;
  var email = document.getElementById('email-curso2').value;

  // Crear usuario
  firebase.auth().createUserWithEmailAndPassword(email, '123456')
    .then(function () {
      // Cerrar modal y mostrar mensaje
      $('#modal-registro-curso2').modal('hide');
      showToast('Te has registrado en el Curso 2, ' + nombre + '!');
    })
    .catch(function (error) {
      // Mostrar mensaje de error
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode, errorMessage);
      document.getElementById('mensaje-error-curso2').style.display = 'block';
    });
});

// Registrarse en Curso 3
var formCurso3 = document.getElementById('form-registro-curso3');
formCurso3.addEventListener('submit', function (event) {
  event.preventDefault();

  // Obtener nombre y email
  var nombre = document.getElementById('nombre-curso3').value;
  var email = document.getElementById('email-curso3').value;

  // Crear usuario
  firebase.auth().createUserWithEmailAndPassword(email, '123456')
    .then(function () {
      // Cerrar modal y mostrar mensaje
      $('#modal-registro-curso3').modal('hide');
      showToast('Te has registrado en el Curso 3, ' + nombre + '!');
    })
    .catch(function (error) {
      // Mostrar mensaje de error
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode, errorMessage);
      document.getElementById('mensaje-error-curso3').style.display = 'block';
    });
});

// Cerrar sesión
var btnLogout = document.getElementById('btn-logout');
btnLogout.addEventListener('click', function () {
  firebase.auth();
});
// Mostrar mensaje toast
function showToast(mensaje) {
  var toast = document.getElementById('toast');
  toast.innerHTML = mensaje;
  toast.classList.add('show');
  setTimeout(function () {
    toast.classList.remove('show');
  }, 3000);
}

// Anuncios emergentes
var btnAnuncios = document.getElementById('btn-anuncios');
btnAnuncios.addEventListener('click', function () {
  document.getElementById('modal-anuncios').style.display = 'block';
});

// Cerrar anuncios emergentes
var btnCloseAnuncios = document.getElementById('btn-close-anuncios');
btnCloseAnuncios.addEventListener('click', function () {
  document.getElementById('modal-anuncios').style.display = 'none';
});

// Cerrar anuncios emergentes al hacer click fuera del modal
window.addEventListener('click', function (event) {
  if (event.target === document.getElementById('modal-anuncios')) {
    document.getElementById('modal-anuncios').style.display = 'none';
  }
});
*/
