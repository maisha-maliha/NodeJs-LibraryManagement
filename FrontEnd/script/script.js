import {x} from './booklist.js';

const markup = document.getElementsByTagName('table')[0];
markup.innerHTML =  tabledata(false, true, true);

// CHECKBOX CODES
let catagory = document.querySelector('.category');
let price = document.querySelector('.price');
let pricei = document.querySelector('.pricei');
let quantity = document.querySelector('.quantity');

//catagory.addEventListener('onclick', checking());
price.addEventListener("click", checking());
console.log(price);
//quantity.addEventListener('onclick', checking());

function checking(){
    console.log(pricei.checked);
    if(pricei.checked == false){
        markup.innerHTML =  '';
        tabledata(false, ture, ture);}
    if(catagory.checked == false) markup.innerHTML =  tabledata(true, false, ture);
    if(quantity.checked == false) markup.innerHTML =  tabledata(true, true, false);
}

// TABLE DATA FUNCTION
function tabledata(price,catagory,quantity){
    var data= "<tr><th>BOOK NAME</th><th>PRICE</th><th>CATAGORY</th><th>QUANTITY</th></tr>";
    if(!price && !catagory && !quantity) return data;
    x.forEach(element => {
        data += '<tr><td>'+ element.bookname +'</td>'+ (price? '<td>'+element.price+'</td>':'') + (catagory? '<td>'+element.catagory+'</td>':'')+ (quantity? '<td>'+element.quantity+'</td>':'') +'</tr>';
    });
    return data;
}
