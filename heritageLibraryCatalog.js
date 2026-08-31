const rawCatalogCards = [
  'From a Buick 8 | King, Stephen | 2002 | Shelf K7',
  'The Shining | King, Stephen | 1977 | Shelf K1',
  'The Stand | King, Stephen | 1978 | Shelf K2',
  'It | King, Stephen | 1986 | Shelf K3',
  'Misery | King, Stephen | 1987 | Shelf K4',
  'Do Androids Dream of Electric Sheep? | Dick, Philip K. | 1968 | Shelf D5',
  'I, Robot | Asimov, Isaac | 1950 | Shelf A8',
  'Foundation | Asimov, Isaac | 1951 | Shelf A9',
  'Dune | Herbert, Frank | 1965 | Shelf H3',
  'Neuromancer | Gibson, William | 1984 | Shelf G8',
  'Snow Crash | Stephenson, Neal | 1992 | Shelf S6',
  'The Martian | Weir, Andy | 2011 | Shelf W5',
  "Ender's Game | Card, Orson Scott | 1985 | Shelf C2",
  "The Hitchhiker's Guide to the Galaxy | Adams, Douglas | 1979 | Shelf A1",
  'Ready Player One | Cline, Ernest | 2011 | Shelf C7',
  'The Dark Tower: The Gunslinger | King, Stephen | 1982 | Shelf K5',
  'Unknown Title |  | 1975 | Shelf X1',
  'Mysterious Manuscript | Unknown Author |  | Shelf Z9',
  'Ancient Scroll | Anonymous | 850 | ',
];

function parseCard(rawString) {
  const [title, author, year, location] = rawString
    .split('|')
    .map(p => p.trim());

  return {
    title: title || 'Unknown',
    author: author || 'Unknown',
    year: year ? parseInt(year) : 'Unknown',
    location: location || 'Unknown',
  };
}

function parseCatalog(rawCards) {
  return rawCards.map(parseCard);
}

const catalog = parseCatalog(rawCatalogCards);

function findByAuthor(catalog, author) {
  return catalog.filter(book =>
    book.author.toLowerCase().includes(author.toLowerCase()),
  );
}

function groupByDecade(catalog) {
  const grouped = {};

  for (const book of catalog) {
    if (book.year === 'Unknown') {
      grouped['Unknown'] ??= [];
      grouped['Unknown'].push(book);
      continue;
    }

    const decadeKey = `${Math.floor(book.year / 10) * 10}s`;
    grouped[decadeKey] ??= [];
    grouped[decadeKey].push(book);
  }

  return grouped;
}

const byDecade = groupByDecade(catalog);

function renderEntry(entry) {
  return `${'-'.repeat(25)}
Title: ${entry.title}
Author: ${entry.author}
Year: ${entry.year}
Location: ${entry.location}
${'-'.repeat(25)}`;
}

function validateEntry(entry) {
  const fields = ['title', 'author', 'year', 'location'];
  return fields.every(
    field => field in entry && entry[field] && entry[field] !== 'Unknown',
  );
}

function exportToJSON(catalog) {
  return JSON.stringify(catalog, null, 2);
}

function exportToCSV(catalog) {
  const header = 'Title,Author,Year,Location';
  const rows = catalog.map(
    entry =>
      `"${entry.title}","${entry.author}",${entry.year},"${entry.location}"`,
  );
  return [header, ...rows].join('\n');
}

let oldestYear = Infinity;
let newestYear = 0;

for (const book of catalog) {
  if (book.year === 'Unknown') continue;
  if (book.year < oldestYear) oldestYear = book.year;
  if (book.year > newestYear) newestYear = book.year;
}

console.log(renderEntry(catalog[0]));
console.log(exportToCSV(catalog));
console.log(catalog.length);
console.log(Object.keys(byDecade).length);
console.log(oldestYear);
console.log(newestYear);
