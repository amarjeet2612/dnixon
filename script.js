const drawer = document.getElementById('drawer');
const overlay = document.getElementById('overlay');
const searchOverlay = document.getElementById('searchOverlay');

document.getElementById('menuBtn').onclick = () => {
  drawer.style.left = '0';
  overlay.style.display = 'block';
};

overlay.onclick = () => {
  drawer.style.left = '-250px';
  overlay.style.display = 'none';
  searchOverlay.style.display = 'none';
};

document.getElementById('searchBtn').onclick = () => {
  toggleSearch();
};

function toggleSearch() {
  if (searchOverlay.style.display === 'flex') {
    searchOverlay.style.display = 'none';
  } else {
    searchOverlay.style.display = 'flex';
  }
}

function clearInput() {
  document.getElementById('searchInput').value = '';
  document.getElementById('suggestions').innerHTML = '';
}
