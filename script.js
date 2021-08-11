// const carousel = document.getElementById("images");

// // const img = document.querySelectorAll("#imgs img");
// var data;
// async function getApi() {
//     const res = await fetch("https://rickandmortyapi.com/api/character");
//     data = await res.json();
//     show();
//     // run();
// }
// var array;
// var card = "";

// function show() {




//     array = data.results;
//     array.forEach(function(elements) {


//         card += `
//         <div class="card">
//             <img class="card-image" src= ${elements["image"]} alt="Card image cap">
//                 <div class="card-body">
//                     <p class="card-title">Name: ${ elements["name"]}</p>
//                     <p class="card-text">
//                     Species: ${ elements["species"] } 
//                     <br>
//                     Status: ${ elements["status"] } 
//                     </p>

//                 </div>
//         </div>`

//     });
//     carousel.innerHTML = card;
//     // document.getElementById("slide-1").classList.add("active")
// }

// let idx = 0;

// function run() {
//     idx++;

//     if (idx > array.length - 1) {
//         idx = 0;
//     }

//     // carousel.style.transform = `translateX(${-idx * 305}px)`;
// }

// setInterval(run, 1000);




// window.addEventListener("resize",show);


// let idx=1;
// function next(){
//     idx++;
//     if (idx>slideCount-1) {
//         idx=1;
//         document.getElementById(`slide-${idx-1}`).classList.remove("active")
//     }
//     document.getElementById(`slide-${idx}`).classList.add("active")
//     if (idx != 1) {
//         document.getElementById(`slide-${idx-1}`).classList.remove("active")
//     }
// }
// function prev(){
//     idx--;
//     if (idx<=0) {
//         idx=slideCount-1;
//         document.getElementById(`slide-1`).classList.remove("active")
//     }
//     document.getElementById(`slide-${idx}`).classList.add("active")
//     if (idx != 1) {
//         document.getElementById(`slide-${idx+1}`).classList.remove("active")
//     }
// }

// document.getElementById("prev").addEventListener("click",prev);
// document.getElementById("next").addEventListener("click",next);
// const imgs = document.getElementById("images");

// const img = document.querySelectorAll("#images div");

// let idx = 0;

// function run() {

//     carousel.scroll(290, 0);

//     // imgs.style.transform = `translateY(${-idx * 305}px)`;
// }

// setInterval(run, 1000);


let carousel = document.getElementById("images");
var data;

async function getApi() {
    const res = await fetch("https://rickandmortyapi.com/api/character");
    data = await res.json();
    show();
}

function show() {

    let card = "";

    let array = data.results;
    array.forEach((elements, index) => {


        card +=
            // `<div class="slide" id="slide-${slideCount}">
            `<div class="card">
        <img class="card-image" src= ${elements["image"]} alt="Card image cap">
            <div class="card-body">
                <p class="card-title">Name: ${ elements["name"]}</p>
                <p class="card-text">
                Species: ${ elements["species"] } 
                <br>
                Status: ${ elements["status"] } 
                </p>

            </div>
    </div>`

        // slideCount++;
    });
    carousel.innerHTML = card;
    // document.getElementById("slide-1").classList.add("active")
}


function next() {
    carousel.scrollBy({
        top: 309,
        left: 0,
        behavior: 'smooth'
    })
}

function prev() {
    carousel.scrollBy({
        top: -309,
        left: 0,
        behavior: 'smooth'

    })
}

// document.getElementById("next").addEventListener('click', () => {
//     carousel.scroll({
//         top: 300,
//         left: 0,
//         behavior: 'smooth'
//     })
// });
// document.getElementById("prev").addEventListener('click', () => {
//     carousel.scrollTo({
//         top: -290,
//         left: 0,
//         behavior: 'smooth'

//     })
// });