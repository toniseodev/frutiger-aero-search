fetch('https://api.thecatapi.com/v1/images/search')
  .then(response => response.json())
  .then(data => {
    document.getElementById('catImage').src = data[0].url;
  });