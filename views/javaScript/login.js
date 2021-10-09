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


const  myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const email = document.querySelector('#email');
const msg = document.querySelector('#msg');
const user = document.querySelector('#users')

function access(){

    location.replace("blog.html");
}





myForm.addEventListener('submit' , onSubmit)

function onSubmit(e){
    e.preventDefault();

    if( nameInput.value === '' || email.value===''){

        msg.innerHTML='Please fill All the fields Sajeel';

        setTimeout(() => msg.remove() , 2000);

    
    }
         
    else if(nameInput.value==='sajeel' && email.value === 'sajeel') {
        access();
            
    }   


    else{

        msg.innerHTML= "Invalid User!"

        setInterval(() => msg.remove() , 2000)
        

// const li =document.createElement('li');

//         li.appendChild(document.createTextNode(`Name= ${nameInput.value}: email= ${email.value}`));

//         user.appendChild(li);



        nameInput.value = '';
        email.value= '';

//         access();
//         setTimeout(() => user.remove() , 1000);
        // clearInterval(msg.remove());

    }

    


}