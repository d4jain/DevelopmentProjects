// JavaScript to handle modal sidebar toggle
document.querySelectorAll('.quick-view').forEach(button => {
    button.addEventListener('click', () => {
        document.getElementById('cartModal').style.display = 'block';
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const carousels = document.querySelectorAll('.product-carousel');

    carousels.forEach((carousel) => {
        const images = carousel.querySelector('.carousel-images');
        const imageCount = images.children.length;
        let currentIndex = 0;
        let timer;

        // Function to start the carousel
        const startCarousel = () => {
            timer = setInterval(() => {
                currentIndex = (currentIndex + 1) % imageCount;
                images.style.transform = `translateX(-${currentIndex * 100}%)`;
            }, 3000); // Change image every 3 seconds
        };

        // Function to pause the carousel
        const pauseCarousel = () => {
            clearInterval(timer);
        };

        // Start the carousel
        startCarousel();

        // Pause the carousel on hover
        carousel.addEventListener('mouseenter', pauseCarousel);
        carousel.addEventListener('mouseleave', startCarousel);
    });
});


document.querySelector('.close-btn').addEventListener('click', () => {
    document.getElementById('cartModal').style.display = 'none';
});

document.addEventListener("DOMContentLoaded", () => {
    const carousels = document.querySelectorAll('.product-carousel');

    carousels.forEach((carousel) => {
        const images = carousel.querySelector('.carousel-images');
        const imageCount = images.children.length;
        let currentIndex = 0;
        let timer;

        // Function to start the carousel
        const startCarousel = () => {
            timer = setInterval(() => {
                currentIndex = (currentIndex + 1) % imageCount;
                images.style.transform = `translateX(-${currentIndex * 100}%)`;
            }, 3000); // Change image every 3 seconds
        };

        // Function to pause the carousel
        const pauseCarousel = () => {
            clearInterval(timer);
        };

        // Start the carousel
        startCarousel();

        // Pause the carousel on hover
        carousel.addEventListener('mouseenter', pauseCarousel);
        carousel.addEventListener('mouseleave', startCarousel);
    });
});




// document.addEventListener("DOMContentLoaded", () => {
//     const carousels = document.querySelectorAll('.product-carousel');

//     carousels.forEach((carousel) => {
//         const images = carousel.querySelector('.carousel-images');
//         const imageCount = images.children.length;
//         let currentIndex = 0;

//         // Function to start the carousel
//         const startCarousel = () => {
//             carousel.timer = setInterval(() => {
//                 currentIndex = (currentIndex + 1) % imageCount;
//                 images.style.transform = `translateX(-${currentIndex * 100}%)`;
//             }, 3000); // Change image every 3 seconds
//         };

//         // Function to pause the carousel
//         const pauseCarousel = () => {
//             clearInterval(carousel.timer);
//         };

//         // Start the carousel
//         startCarousel();

//         // Pause the carousel on hover
//         carousel.addEventListener('mouseenter', pauseCarousel);
//         carousel.addEventListener('mouseleave', startCarousel);
//     });
// });


// document.addEventListener("DOMContentLoaded", () => {
//     const hero = document.querySelector('.hero');
    
//     // Create circles
//     const numCircles = 10;
//     for (let i = 0; i < numCircles; i++) {
//         const circle = document.createElement('div');
//         circle.classList.add('circle');
//         circle.style.left = `${Math.random() * 100}%`;
//         circle.style.top = `${Math.random() * 100}%`;
//         circle.style.animationDuration = `${2 + Math.random() * 3}s`;
//         circle.style.animationDelay = `${Math.random() * 2}s`;
//         hero.appendChild(circle);
//     }
// });

// You can add additional JavaScript here to manage cart functionalities
