const tabs = document.querySelectorAll(".auth-tabs button");
const authTabs = document.querySelector(".auth-tabs");
const loginForm = document.getElementById("login-form");

function updateDivider() {
  const activeTab = document.querySelector(".tab-active");
  const tabIndex = Array.from(tabs).indexOf(activeTab);
  authTabs.style.setProperty(
    "--divider-transform",
    `translateX(${tabIndex * 100}%)`,
  );
}

tabs.forEach((tab) => {
  tab.addEventListener("click", function () {
    const href = this.getAttribute("data-href");
    tabs.forEach((t) => t.classList.remove("tab-active"));
    this.classList.add("tab-active");
    updateDivider();

    if (href && href !== "#") {
      window.location.href = href;
    }
  });
});

updateDivider();

const togglePassword = document.querySelector(".toggle-password");
const passwordInput = document.getElementById("password");

togglePassword.addEventListener("click", function () {
  const type =
    passwordInput.getAttribute("type") === "password" ? "text" : "password";
  passwordInput.setAttribute("type", type);
  this.classList.toggle("bi-eye");
  this.classList.toggle("bi-eye-slash");
});

passwordInput.addEventListener("input", function () {
  const reqLength = document.getElementById("req-length");
  const reqLower = document.getElementById("req-lower");
  const reqUpper = document.getElementById("req-upper");
  const reqNumber = document.getElementById("req-number");
  const reqSymbol = document.getElementById("req-symbol");

  if (reqLength && reqLower && reqUpper && reqNumber && reqSymbol) {
    const val = this.value;
    reqLength.style.color = val.length >= 6 ? "green" : "red";
    reqLower.style.color = /[a-z]/.test(val) ? "green" : "red";
    reqUpper.style.color = /[A-Z]/.test(val) ? "green" : "red";
    reqNumber.style.color = /\d/.test(val) ? "green" : "red";
    reqSymbol.style.color = /[@$!%*?&]/.test(val) ? "green" : "red";
  }
});

const form = document.getElementById("signup-form");

if (form) {
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    // Reset error messages
    document.getElementById("name-error").style.display = "none";
    document.getElementById("lastname-error").style.display = "none";
    document.getElementById("email-error").style.display = "none";
    document.getElementById("email-error").style.display = "none";
    document.getElementById("terms-error").style.display = "none";

    const name = document.getElementById("name").value;
    const lastname = document.getElementById("lastname").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const terms = document.getElementById("terms").checked;

    if (name === "") {
      const nameError = document.getElementById("name-error");
      nameError.textContent = "Nome é obrigatório";
      nameError.style.display = "block";
      return;
    }

    if (lastname === "") {
      const lastnameError = document.getElementById("lastname-error");
      lastnameError.textContent = "Sobrenome é obrigatório";
      lastnameError.style.display = "block";
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      const emailError = document.getElementById("email-error");
      emailError.textContent = "Email inválido";
      emailError.style.display = "block";
      return;
    }

    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{6,}$/;

    if (!passwordRegex.test(password)) {
      // Interrompe o envio se não estiver tudo no padrão verde
      return;
    }

    if (!terms) {
      const termsError = document.getElementById("terms-error");
      termsError.textContent = "Você deve aceitar os termos";
      termsError.style.display = "block";
      return;
    }
    alert("Cadastro válido!");
  });
}

if (loginForm) {
  loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    // Reset error messages
    document.getElementById("login-email-error").style.display = "none";
    document.getElementById("login-password-error").style.display = "none";

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (email === "") {
      const emailError = document.getElementById("login-email-error");
      emailError.textContent = "Por favor, preencha o e-mail.";
      emailError.style.display = "block";
      return;
    }

    if (password === "") {
      const passwordError = document.getElementById("login-password-error");
      passwordError.textContent = "Por favor, preencha a senha.";
      passwordError.style.display = "block";
      return;
    }

    alert("Login enviado com sucesso! Você entrou.");
  });
}
