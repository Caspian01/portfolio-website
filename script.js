function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

<script>
  document.getElementById("currentYearCopyright").innerText = new Date().getFullYear();
</script>