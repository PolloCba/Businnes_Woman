const btn = document.getElementById("button");

document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();

  btn.value = "Enviar Formulario";

  const serviceID = "default_service";
  const templateID = "template_7otck5a";

  emailjs.sendForm(serviceID, templateID, this).then(
    () => {
      btn.value = "Enviar Formulario";
      alert("Mensaje enviado correctamente");
    },
    (err) => {
      btn.value = "Enviar Formulario";
      alert(JSON.stringify(err));
    }
  );
});
