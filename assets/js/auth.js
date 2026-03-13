const tabs = document.querySelectorAll(".auth-tabs button");
const authTabs = document.querySelector(".auth-tabs");

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
