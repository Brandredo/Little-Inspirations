console.log("script is working...");

// const faders = document.querySelectorAll(".fade-in");

// const appearOptions = {
//     root: document.body,
//     rootMargin: '0px',
//     threshold: 1
// };

// faders.forEach( fader => {
//     appearOnScroll.observe(fader);
// });

// const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
//     entries.forEach( entry => {
//         if(!entry.isIntersecting) {
//             return;
//         }
//         console.log(entry);
//         entry.target.classList.add("appear");
//         appearOnScroll.unobserve(entry.target);
//     })
// }, appearOptions);


// console.log("HELLO WORLD IN ANIMAATION!")
// const target = document.querySelector(".fade-in");
// console.log(target);

// let options = {
//     threshold: 1
// }

// function callback(entries, observer) {
//     entries.forEach(entry => {
//         if(!entry.isIntersecting) {
//             return;
//         }
//         entry.target.classList.add("appear");
//         observer.unobserve(entry.target);
//     })
// }

// const observer = new IntersectionObserver(callback, options);

// const fadeShape = document.querySelector(".fade-in");

// const options = {
//     root: document.body,
//     rootMargin: '0px',
//     threshold: 0
//   }
  
//   function callback (entries, observer) {
//     console.log(observer);
    
//     entries.forEach(entry => {
//       console.log(entry);
//     });
//   }
  
//   let observer = new IntersectionObserver(callback, options);
//   observer.observe(fadeShape);