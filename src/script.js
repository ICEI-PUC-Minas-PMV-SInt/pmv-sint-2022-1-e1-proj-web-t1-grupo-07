$(document).ready(function () {
  const form = document.getElementById("form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const formValues = {
      estoque: $("#estoque").val(),
      nome: $("#nome").val(),
      funcionalidade: $("#funcionalidade").val(),
    }

    var localStorageFormValues = localStorage.getItem('formValues');

    const newFormValues = [...(localStorageFormValues ? JSON.parse(localStorageFormValues) : []), formValues];

    localStorage.setItem("formValues", JSON.stringify(newFormValues));

    alert("Registro salvo!");
  });
});
