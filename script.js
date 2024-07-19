document.getElementById('searchInput').addEventListener('keypress', function(event) {
  if (event.key === 'Enter') {
      performGoogleSearch();
  }
});

document.getElementById('searchButton').addEventListener('click', function() {
  performGoogleSearch();
});

function performGoogleSearch() {
  const query = document.getElementById('searchInput').value.trim();
  if (query) {
      window.location.href = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
  }
}
