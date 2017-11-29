const bands = [
    'The Plot in You', 
    'The Devil Wears Prada', 
    'Pierce the Veil', 
    'Norma Jean', 
    'The Bled', 
    'Say Anything', 
    'The Midway State', 
    'We Came as Romans', 
    'Counterparts', 
    'Oh, Sleeper', 
    'A Skylit Drive', 
    'Anywhere But Here', 
    'An Old Dog'
];

function exactSorted(bandName) {
  return bandName.replace(/^(a |an |the)/i, '').trim();
}

// let sortedBands = bands.sort(function(a,b) {
//   if (exactSorted(a)> exactSorted(b)) {
//     return 1;
//   } else {
//     return -1;
//   }
// })

//ES6 standard:

let sortedBands = bands.sort((a,b) => exactSorted(a) > exactSorted(b) ? 1 : -1 );

document.querySelector('#bands').innerHTML = 
  sortedBands.map(band => `<li>${ band }</li>`).join('');

