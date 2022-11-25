// ==UserScript==
// @name     minesweeperblack
// @version  1
// @grant    none
// @match    https://minesweeper.online/*
// ==/UserScript==
var elt = document.createElement('style');
elt.innerHTML = `
.brand-link {
  filter: invert();
}

.main-content,
.btn-default,
.dropdown-toggle,
.result-block,
.chat-gift,
.modal-header,
.modal-body,
.modal-footer,
.popover-title,
.popover-content,
.popover-content table tbody td,
.dropdown-menu,
input, th, td,
.ads-remove {
  background: rgb(45, 45, 45) !important;
}

.content-wrap,
.navbar-desktop,
.pagination a {
  background: rgb(30, 30, 30) !important;
}

body, span, h1, h2, h3, h4, h5, h6, a, .btn-default, .popover-content {
  color: white !important;
}
`;
document.head.appendChild(elt);