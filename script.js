
/*Here I decleared a variable and gave it a
 variable name 'wrapperEl' I wrote document.queryselector and inside a parentese I wrote
 a select for the class which is .wrapper**/
const wrapperEl = document.querySelector('.wrapper');


/*Here I made an array of countries by delearing another variable and I set the 
name to 'countries'**/
const countries = ['Nigeria', 'Ghana', 'South Africa', 'Guinea', 'Morocco', 'Liberia', 
'Cameroun', 'Gambia', 'Egypt', 'Kenya', 'Togo', 'Zambia', 'Zimbabwe', 'Senegal', 'Mali', 'Uganda', 'Rwanda', 'Burundi' ];

let countriesIndex = 0

let characterIndex = 0;

updatecountries();

function updatecountries(){
    characterIndex++;
/**Here in the updatecountries function, I added some variable which helps
 it to target 'countries' In order to see the diffrent countries*/
    wrapperEl.innerHTML = `
<h1>${countries[countriesIndex].slice(0,characterIndex)}</h1>
`;

/** */
if(characterIndex === countries[countriesIndex].length){
    countriesIndex++ 
    characterIndex = 0
}
if(countriesIndex === countries.length){
    countriesIndex = 0
}
setTimeout(updatecountries, 600);

}

