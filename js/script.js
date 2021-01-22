
// const imageGallery = document.querySelector('#image-gallery');
// const showMoreButton = document.querySelector('#show-more-button');


// showMoreButton.addEventListener('click', getImages);

// let imagesCount = 0;
// const limit = 18;

// async function getImages(){
//     if (imagesCount > limit) {
//         return;
//     }
//    const data = await request('get', 'https://jsonplaceholder.typicode.com/photos');

//   const images = data.splice(imagesCount, 6).map(obj => obj.url);
//    imagesCount+=6;

//    let imagesHtml = '';
//    images.forEach(url =>{
//     imagesHtml+= `
//     <div class="col-4 mt-3">
//     <img class='gallery-image' src="${url}" alt="image">
//     </div> 
//     `;

//    });

//    imageGallery.insertAdjacentHTML('beforeend', imagesHtml);
// }


// function request(method, url, data) {
//     return new Promise((resolve, reject) => {
//         const xhr = new XMLHttpRequest();
//         xhr.open(method, url, true);
//         xhr.send(data);

//         xhr.onreadystatechange = function () {

//             if (this.readyState === 4 && this.status === 200) {
//                 const response = JSON.parse(this.response);
//                 resolve(response);
//             }
//             else if (this.status >= 300) {
//                 reject('Something went wrong!');
//             }
//         }
//     });

// }


const img = document.querySelector(".image-container>img");
//   const leftArrow = document.querySelector(".left-arrow");
//   const rightArrow = document.querySelector(".right-arrow");
  const circlesContainer = document.querySelector(".circles");

  const images = ["h1.png","h2.png","h3.png"];

  const circles = createCircles(images.length);

  circles.forEach((el) => {
    circlesContainer.insertAdjacentElement("beforeEnd", el);
  });

  circlesContainer.addEventListener("click", (event) => {
    const dot = event.target;
    if (!dot.classList.contains("circle")) {
      return;
    }

    let index = circles.indexOf(dot);
    img.src = `./img/${images[index]}`;
    for (let i = 0; i < circles.length; i++) {
      circles[i].classList.remove("active");
    }
    circles[index].classList.add("active");
  });

  let currentImageIndex = 0;
  let prevImageIndex = images.lenght - 1;

  function goNext() {
    prevImageIndex = currentImageIndex;
    if (currentImageIndex >= images.length - 1) {
      currentImageIndex = 0;
    } else {
      currentImageIndex++;
    }

    img.src = `./img/${images[currentImageIndex]}`;
    circles[currentImageIndex].classList.add("active");
    circles[prevImageIndex].classList.remove("active");
  }

//   function goPrev() {
//     prevImageIndex = currentImageIndex;
//     if (currentImageIndex <= 0) {
//       currentImageIndex = images.length - 1;
//     } else {
//       currentImageIndex--;
//     }
//     img.src = `./img/${images[currentImageIndex]}`;
//     circles[currentImageIndex].classList.add("active");
//     circles[prevImageIndex].classList.remove("active");
//   }

 
  setInterval(goNext, 3500);

  function createCircles(count) {
    let circles = [];
    let elem = document.createElement("span");
    elem.classList.add("circle");

    for (let i = 0; i < count; i++) {
      let newElem = elem.cloneNode();
      circles.push(newElem);
      if (i === 0) {
        newElem.classList.add("active");
      }
    }
    return circles;
  }


  
const imageGallery = document.querySelector('#image-gallery');
const showMoreButton = document.querySelector('#but');


showMoreButton.addEventListener('click', getImages);

let imagesCount = 0;
const limit = 18;

async function getImages(){
    if (imagesCount > limit) {
        return;
    }
   const data = await request('get', 'https://jsonplaceholder.typicode.com/photos');

  const images = data.splice(imagesCount, 6).map(obj => obj.url);
   imagesCount+=6;

   let imagesHtml = '';
   images.forEach(url =>{
    imagesHtml+= `
    <div class="col-4 mb-4">
    <img class='gallery-image' src="${url}" alt="image">
    </div> 
    `;

   });

   imageGallery.insertAdjacentHTML('beforeend', imagesHtml);
}


function request(method, url, data) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(method, url, true);
        xhr.send(data);

        xhr.onreadystatechange = function () {

            if (this.readyState === 4 && this.status === 200) {
                const response = JSON.parse(this.response);
                resolve(response);
            }
            else if (this.status >= 300) {
                reject('Something went wrong!');
            }
        }
    });

}











const form = document.forms[0];
// console.log(form.elements[1]);


form.elements[1].onchange = (event) => {
  const inputElem = event.target;
  const email = inputElem.value;
  const reg = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  !reg.test(email)
    ? inputElem.classList.add("invalid")
    : inputElem.classList.add("valid");
};



form.onsubmit = function (event) {
  event.preventDefault();

  const elements = this.elements;

  const data = {};

  for (let i = 0; i < elements.length; i++) {
    const element = elements[i];
    if (element.dataset.type === "input") {
      data[element.name] = element.value;
    }
  }
  if (
    
    form.elements[1].classList.contains("valid") 
  )
    request(
      "post",
      "https://jsonplaceholder.typicode.com/posts",
      JSON.stringify(data)
    )
      .then(() => {
        console.log(true);
      })
      .catch((err) => {
        console.log(err);
      });
  //form.submit();
};

function request(method, url, data) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url, true);
    xhr.send(data);

    xhr.onreadystatechange = function () {
      if (this.readyState === 4 && this.status === 200) {
        const response = JSON.parse(this.response);
        resolve(response);
      } else if (this.status >= 300) {
        reject("Something went wrong!");
      }
    };
 
  });
}
