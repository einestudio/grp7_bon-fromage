function toggleSidebar() {
  var sidebar = document.querySelector(".sidebar");
  sidebar.style.left = sidebar.style.left === "-250px" ? "0" : "-250px";
}
function toggleSidebar() {
  var sidebar = document.getElementById("sidebar");
  sidebar.classList.toggle("show-sidebar");
}
