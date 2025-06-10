function toggleMenu() {
  const navLinks = document.getElementById('navLinks');
  navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
}

function toggleSearch() {
  const searchBox = document.getElementById('mobileSearchBox');
  if (searchBox.style.display === 'flex') {
    searchBox.style.display = 'none';
  } else {
    searchBox.style.display = 'flex';
    document.getElementById('searchInput').focus();
  }
}

function filterBlogs() {
  const input = document.getElementById("searchInput");
  const filter = input.value.toLowerCase();
  const clearBtn = document.getElementById("clearSearch");
  clearBtn.style.display = filter.length > 0 ? 'inline' : 'none';

  const blogs = document.querySelectorAll(".blog-card");

  blogs.forEach(blog => {
    const title = blog.querySelector("h3").textContent.toLowerCase();
    const desc = blog.querySelector("p").textContent.toLowerCase();

    blog.style.display = title.includes(filter) || desc.includes(filter) ? "block" : "none";
  });
}

function clearSearch() {
  const input = document.getElementById("searchInput");
  input.value = "";
  filterBlogs();
  input.focus();
}
