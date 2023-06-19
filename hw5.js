fetch("./degrees.json"); {method = "POST"
    .then(res => res.json()) //if its not JSon data it will fail
    .then(data => update(div, JSON.stringify(data)))
     //callback fn ...render to the DOM
    .catch(err => update(div,err)) //if any errors in functions it will render error
}
import update from './functions.mjs'
//convert data from promise
const div = document.getElementById('result');//target the div tag
