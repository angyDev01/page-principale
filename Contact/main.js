
function validateForm()
{
  var name = document.forms["myForm"]['name']
  var email = document.forms["myForm"]['email']
  var message = document.forms["myForm"]['message']

  if (name.value ==""){
    document.getElementById("errorname").innerHTML = "Veuillez entrer votre nom valide";
    name.focus();
    return false;
  }else{
    document.getElementById("errorname").innerHTML = "";
  }

  if (email.value ==""){
    document.getElementById("erroremail").innerHTML = "Veuillez entrer votre adresse mail valide";
    email.focus();
    return false;
  }else{
    document.getElementById("erroremail").innerHTML = "";
  }

  if (email.value.indexOf("@", 0) < 0){
    document.getElementById("erroremail").innerHTML = "Veuillez entrer votre adresse mail valide";
    email.focus();
    return false;
  }

  if (email.value.indexOf(".", 0) < 0){
    document.getElementById("erroremail").innerHTML = "Veuillez entrer votre adresse mail valide";
    email.focus();
    return false;
  }
  if (message.value ==""){
    document.getElementById("errormessage").innerHTML = "Veuillez entrer un messae";
    message.focus();
    return false;
  }else{
    document.getElementById("errormessage").innerHTML = "";
  }
  envoiMail();
  return false;
}


// Initialisation EmailJS

function envoiMail(){
  emailjs.init("NCKY9EBl9wCvpo25Y"); // ← remplace par ta clé publique EmailJS

  const form = document.getElementById("contactForm");

  form.addEventListener("submit", function(e) {
      e.preventDefault(); // empêche le navigateur de recharger ou naviguer

      emailjs.sendForm("service_e33sezc", "template_ialoj5n", form)
          .then(() => {
            alert(" Message envoyé avec succès !");
            form.reset(); // vide le formulaire
          })
          .catch(() => {
            alert("Une erreur s'est produite, veuillez réessayer.");
          });

    })
  };

  
