
const p = new Promise(runPromise)
p.then(goodJ)
    .then(goodJ)//each then function returns a promise
    .catch(badZ);//chaining the promises
import update from './functions.mjs'

function runPromise(resolve, reject) {
    const url = './degrees.json'; //this data is a promise  

    fetch(url)
        .then(res => res.json()) //if its not JSon data it will fail
        .then(data => resolve(data)) //callback fn ...render to the DOM
        .catch(err => reject(err))
} //these are functions


function goodJ(data) {
    const div = document.getElementById('result');//target the div tag
    update(div, data);
    
}

function badZ(err) {
    console.log('badZ: ', err);
}

//console.log(p)