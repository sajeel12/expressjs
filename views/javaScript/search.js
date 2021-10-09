var navbmm = document.getElementById('navbM');
var mylinkss = document.getElementById('mylinks')


navbmm.addEventListener('click', menuM);

function menuM(e) {
    e.preventDefault();

    if (mylinkss.style.display == "none") {

        mylinkss.style.display = "block";
    }
     else {

        mylinkss.style.display = "none";
    }
    console.log("ho gya")
    // mylinkss.innerHTML == 'good'
    

}



var form = document.getElementById('adform');
var items = document.getElementById('items');

form.addEventListener('submit', addname);

items.addEventListener('click' , removename);

function addname(e){

    e.preventDefault();

    var newitem = document.getElementById('item').value;

    var li = document.createElement('li');
    li.appendChild(document.createTextNode(newitem));

    items.appendChild(li);

    var btn  = document.createElement('button');
    btn.appendChild(document.createTextNode('X'));
    
    btn.id = 'delete';

    li.appendChild(btn)

    item.value = '';


}

function removename(e){

    if(e.target.id = 'delete'){
        if(confirm('Paki Bat he Na?')){

            var li = e.target.parentElement;
            items.removeChild(li);
        }
    }

}
