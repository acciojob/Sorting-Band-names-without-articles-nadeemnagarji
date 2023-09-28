//your code here

const bandNames = ['The Rolling Stones', 'The Beatles', 'Aerosmith', 'Led Zeppelin'];

// Function to strip articles ('a', 'an', 'the') from a string and return the cleaned version
function stripArticles(name) {
  return name.replace(/^(a |an |the )/i, '').trim();
}

// Sort the band names while ignoring articles
const sortedBandNames = bandNames.sort((a, b) => {
  const nameA = stripArticles(a);
  const nameB = stripArticles(b);
  return nameA.localeCompare(nameB);
});

// Get the ul element by its id
const ul = document.getElementById('bands');

// Create li elements and add them to the ul
sortedBandNames.forEach((bandName) => {
  const li = document.createElement('li');
  li.textContent = bandName;
  ul.appendChild(li);
});



