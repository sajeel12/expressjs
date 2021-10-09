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
    // console.log("ho gya")
    // mylinkss.innerHTML == 'good'
    

}

// navbm.click(function(){
//     if(navbm.style.display == 'block'){
//         navbm.style.display == 'none';
//     }else{
//         navbm.style.display == 'block';
//     }
//     console.log("ho gya")
// })





// navbmm.click(function(){
//     mylinkss
// })