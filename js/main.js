document.addEventListener("DOMContentLoaded", function() {
  const resgateButton = document.getElementById("button");
  const resgateForm = document.getElementById("resgateForm");
  const mensagem = document.getElementById("mensagem");
  const formTitle = document.querySelector(".form-title");
  const formLabels = document.querySelector(".labels");

  resgateButton.addEventListener("click", function(event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const telefone = document.getElementById("telefone").value;

    if (nome.trim() !== "" && email.trim() !== "" && telefone.trim() !== "") {
      formTitle.style.display = "none"; // Oculta o título do formulário
      formLabels.style.display = "none"; // Oculta os campos de entrada
      mensagem.style.display = "block"; // Exibe a mensagem
      resgateForm.appendChild(mensagem); // Move a mensagem para dentro da div.form
    } else {
      alert("Por favor, preencha todos os campos obrigatórios.");
    }
  });
});
