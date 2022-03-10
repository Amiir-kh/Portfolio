let btnplus = document.getElementsByClassName('btn-plus');

console.log(btnplus)

for (let plus of btnplus){
    plus.addEventListener('click',function(){
        plus.previousElementSibling.innerText ++;
        totalPrice()
    })
}
let btnminus = document.getElementsByClassName('btn-minus');

console.log(btnminus)

for (let minus of btnminus){
    minus.addEventListener('click',function(){
        minus.nextElementSibling.innerText --;

        totalPrice()
    })
}

let likebtn = document.getElementsByClassName('fa fa-heart');

console.log(likebtn)

for (let likes of likebtn){
    likes.addEventListener('click',function(){

        if ( likes.style.color === "gray"){
            likes.style.color = "red"
          } else {
            likes.style.color ="gray"
          }
    })
}

let btnremove = document.getElementsByClassName('btn-delete');
 console.log(btnremove)
for (let i =0;i<btnremove.length;i++){
    btnremove[i].addEventListener('click',function(){
        btnremove[i].parentElement.parentElement.remove();
        totalPrice()
    })
}
function totalPrice(){
    let quantity=document.getElementsByClassName('quantity');
console.log(quantity);
    let prix=document.getElementsByClassName('prix');
    console.log(prix);
    let sum = 0;
    for(let i=0; i<prix.length; i++){
        sum+=prix[i].innerText * quantity[i].innerText ;
      console.log("test",sum)
    }
    document.getElementById("totprice").innerText = sum;
    console.log( document.getElementById("totprice").innerText)
}