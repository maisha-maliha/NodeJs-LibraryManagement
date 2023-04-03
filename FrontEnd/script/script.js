import {x} from './booklist.js';

const markup = document.getElementsByTagName('table')[0];
markup.innerHTML = x;
let checked = document.querySelector('.category').addEventListener('onclick', onlycatagory);
function onlycatagory(){
    console.log("hi");
}
