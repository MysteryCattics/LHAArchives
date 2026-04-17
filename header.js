document.addEventListener("DOMContentLoaded", () => {
  fetch("/header.html")
    .then(res => res.text())
    .then(html => {
      document.getElementById("header").innerHTML = html;
    })
    .catch(err => console.error("Помилка завантаження хедера:", err));
});
