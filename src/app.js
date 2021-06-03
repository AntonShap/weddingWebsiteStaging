// import page from '../node_modules/page/page.mjs';
// import { render } from '../node_modules/lit-html/lit-html.js';

// import { bgPage } from './views/bulgarian.js';
// import { enPage } from './views/english.js';
// import { romPage } from './views/romanian.js';

// window.addEventListener('onbeforeunload', (e) => onRefresh);


carousel();
showLanguges();
showMenu();

// const main = document.querySelector('main');

// page('/bulgarianPage', decorator, bgPage);
// page('/englishPage', decorator, enPage);
// page('/romanianPage', decorator, romPage);

// page.start();
//window.onbeforeunload = function(event) { location.assign("http://127.0.0.1:5500/index.html"); };
// function decorator(ctx, next) {
//     ctx.render = (content) => render(content, main);
//     next();
// }

// function onRefresh(e) {
//     location.replace('http://127.0.0.1:5500/')
//     console.log('cici');

// page('/bulgarianPage', decorator, bgPage);

//}

function showLanguges() {
    const languageBtn = document.querySelector('.dropBTN');
    languageBtn.addEventListener('click', onClick);

    function onClick() {
        console.log(languageBtn);
        const div = document.querySelector('.dropdown-content');
        const divBG = document.querySelector('.dropdown-content-bg');
        const divRO = document.querySelector('.dropdown-content-ro');

        if (div) {

            let isVisible = div.style.display == 'block';
            div.style.display = isVisible ? 'none' : 'block';

        } else if (divBG) {

            let isVisibleBG = divBG.style.display == 'block';
            divBG.style.display = isVisibleBG ? 'none' : 'block';

        } else if (divRO) {

            let isVisibleRO = divRO.style.display == 'block';
            divRO.style.display = isVisibleRO ? 'none' : 'block';

        }
    }
}

function showMenu() {

    const menuBtn = document.querySelector('.taggle-btn');

    menuBtn.addEventListener('click', onClick);

    function onClick() {

        const menuDiv = document.querySelector('.dpopdownMENU');
        let isVisiblee = menuDiv.style.display == 'flex';
        menuDiv.style.display = isVisiblee ? 'none' : 'flex';
    }
}


function carousel() {

    const track = document.querySelector('.carousel__track');
    const slides = Array.from(track.children);
    const nextButton = document.querySelector('.carousel__button--right');
    const prevButton = document.querySelector('.carousel__button--left');
    // const dotsNav = document.querySelector('.carousel__nav');
    // const dots = Array.from(dotsNav.children);

    const slideWidth = slides[0].getBoundingClientRect().width;

    //arrange the slides next to one another

    slides[0].style.left = slideWidth * 0 + 'px';
    slides[1].style.left = slideWidth * 1 + 'px';
    slides[2].style.left = slideWidth * 2 + 'px';

    const setSlidePosition = (slide, index) => {
        slide.style.left = slideWidth * index + 'px';
    };
    slides.forEach(setSlidePosition);

    const moveToSlide = (track, currentSlide, targetSlide) => {

        track.style.transform = 'translateX(-' + targetSlide.style.left + ')'
        currentSlide.classList.remove('current-slide');
        targetSlide.classList.add('current-slide');
    }

    // const updateDots = (currentDot, targetDot) => {
    //     currentDot.classList.remove('current-slide');
    //     targetDot.classList.add('current-slide');
    // }

    const hideShowArrows = (slides, prevButton, nextButton, targetIndex) => {
        console.log(targetIndex);
        if (targetIndex === 0) {
            prevButton.classList.add('is-hidden');
            nextButton.classList.remove('is-hidden');
        } else if (targetIndex === slides.length - 1) {
            prevButton.classList.remove('is-hidden');
            nextButton.classList.add('is-hidden');
        } else {
            prevButton.classList.remove('is-hidden');
            nextButton.classList.remove('is-hidden');
        }
    }

    //when i click left, move slides to the left
    prevButton.addEventListener('click', e => {
        const currentSlide = track.querySelector('.current-slide');
        const prevSlide = currentSlide.previousElementSibling;
        const prevIndex = slides.findIndex(slide => slide === prevSlide);
        // const currentDot = dotsNav.querySelector('.current-slide')
        // const prevDot = currentDot.previousElementSibling;


        moveToSlide(track, currentSlide, prevSlide);
        hideShowArrows(slides, prevButton, nextButton, prevIndex);
        //updateDots(currentDot, prevDot);

    })

    //when i click right, move slides to the right

    nextButton.addEventListener('click', e => {
        const currentSlide = track.querySelector('.current-slide');
        const nextSlide = currentSlide.nextElementSibling;
        //const currentDot = dotsNav.querySelector('.current-slide')
        //const nextDot = currentDot.nextElementSibling;
        const nextIndex = slides.findIndex(slide => slide === nextSlide);

        moveToSlide(track, currentSlide, nextSlide);
        //updateDots(currentDot, nextDot);
        hideShowArrows(slides, prevButton, nextButton, nextIndex);
    })

    // dotsNav.addEventListener('click', e => {
    //     //what indicator was clicked on ? 
    //     const targetDot = e.target.closest('button');

    //     if (!targetDot) return;

    //     const currentSlide = track.querySelector('.current-slide');
    //     const currentDot = dotsNav.querySelector('.current-slide');
    //     const targetIndex = dots.findIndex(dot => dot === targetDot);
    //     //console.log(targetIndex);
    //     const targetSlide = slides[targetIndex];

    //     moveToSlide(track, currentSlide, targetSlide);
    //     updateDots(currentDot, targetDot);

    //     hideShowArrows(slides, prevButton, nextButton, targetIndex);
    // })

}
