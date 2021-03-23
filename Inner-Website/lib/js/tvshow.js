"use strict"

// event click Input

const search = document.querySelector('.fa-search');
const playMovieBanner = document.querySelector('.banner-btn-play')
const infoMovieBanner = document.querySelector('.banner-btn-info')
const body = document.querySelector('body');

// scroll vertically

window.addEventListener('scroll', function() {
    const header = document.querySelector("header");
    header.classList.toggle('scrollTop', window.scrollY > 0);
})


// show menu of genres
const subHeader = document.querySelector('.sub-header');
const genres = document.querySelector('.sub-header-genres');
const menuGenres = genres.querySelector('.sub-header-menu');

genres.addEventListener('click', (e) => {
    genres.classList.toggle('changeColor');
    menuGenres.classList.toggle('show');
})

loadTrailer();

function loadTrailer() {
    setTimeout(() => {
        document.querySelector('header').classList.add('z-index');
        document.querySelector('.banner-content-text').classList.add('hide')
        document.querySelector('.banner-content-img img').classList.add('zoom-out')
        document.querySelector('.banner .banner-img img').classList.add('hide')
        document.querySelector('.trailer-film').querySelector('iframe').classList.add('show')
    }, 4000);
}

// loading trailer in Preview (Info)
function loadTrailerInfo() {
    setTimeout(() => {
        document.querySelector('.preview-detail-banner').querySelector('img').classList.add('hide');
        document.querySelector('.preview-detail-banner').querySelector('iframe').classList.add('show')

    }, 4000);
}

// stopping trailer in Preview (Info)
function stopTrailerInfo() {
    document.querySelector('.preview-detail-banner').querySelector('img').classList.remove('hide');
    document.querySelector('.preview-detail-banner').querySelector('iframe').classList.remove('show')
}
// stop iframe youtube trailer banner
function OffTrailer() {
    document.querySelector('header').classList.remove('z-index');
    document.querySelector('.banner-content-text').classList.remove('hide');
    document.querySelector('.banner-content-img img').classList.remove('zoom-out');
    document.querySelector('.trailer-film').querySelector('iframe').classList.remove('show');
    document.querySelector('.banner .banner-img img').classList.remove('hide');
}

// ------------------- animation search
search.addEventListener('click', () => {
    search.classList.toggle('show')
    if (search.classList.contains('show')) {
        document.querySelector('.search-input').classList.add('show');
    } else {
        document.querySelector('.search-input').classList.remove('show');
    }
})

//------------------- play movie start
const playFilm = document.querySelector('.play-film');
playMovieBanner.addEventListener('click', () => {
    OffTrailer();
    // loading fade-out (empty background)
    playFilm.classList.toggle('open');
    document.querySelector('.preloader').classList.add('fade-out');
    if (playFilm.querySelector('iframe').classList.contains('hide')) {
        playFilm.querySelector('iframe').classList.remove('hide')
    }
    body.classList.add('ignore-overflow-y');

    setTimeout(() => {
        document.querySelector('.preloader').style.display = 'none';
    }, 600)
})

//------------------ back to browse
document.querySelector('.close-movie').addEventListener('click', () => {
        playFilm.classList.remove('open');
        const iframe = playFilm.querySelector('iframe')

        // stop iframe Youtube video when it don't auto
        if (iframe !== null) {
            var iframeSrc = iframe.src;
            iframe.src = iframeSrc;
        }
        // remove Scroll-X
        body.classList.remove('ignore-overflow-y');
        loadTrailer();
    })
    //------------------- play movie end-------


// --------------show more info start
const btnMoreInfo = document.querySelector(".banner-btn-info"),
    preview = document.querySelector(".preview"),
    trailerInfo = document.querySelector('.preview-detail-trailer'),
    linkIframe = trailerInfo.querySelector('.preview-detail-banner iframe');
btnMoreInfo.addEventListener('click', () => {
    //  stop trailer

    OffTrailer();
    loadTrailerInfo();

    preview.classList.add('open');
    document.body.classList.add('ignore-overflow-y');
})

// Click more Info in InfoHover
const slideCard = document.querySelector('.popular-slider-card')
const slideCardItems = document.querySelectorAll('.popular-slider-card-item');
const itemInfo = document.querySelector('.item-info')

let itemIndex;

slideCard.addEventListener('mousemove', (e) => {
    if (e.target.closest('.popular-slider-card-item--hover')) {
        const slideCardItem = e.target.closest('.popular-slider-card-item--hover').parentElement;
        itemIndex = Array.from(slideCardItem.parentElement.children).indexOf(slideCardItem);

        if (slideCardItems[itemIndex].querySelector('.item-info')) {
            slideCardItems[itemIndex].querySelector('.item-info').addEventListener('click', (e) => {
                const trailerInfo = document.querySelector('.preview-detail-trailer')
                const linkIframe = trailerInfo.querySelector('.preview-detail-banner iframe');
                OffTrailer();
                loadTrailerInfo();
                preview.classList.add('open');
                document.body.classList.add('ignore-overflow-y');
            })
        }
    }
})



// itemInfo.addEventListener('click', (e) => {
//     const trailerInfo = document.querySelector('.preview-detail-trailer')
//     const linkIframe = trailerInfo.querySelector('.preview-detail-banner iframe');
//     OffTrailer();
//     loadTrailerInfo();

//     preview.classList.add('open');
//     document.body.classList.add('ignore-overflow-y');
// })

// const 

//----- close Preview
preview.addEventListener('click', (e) => {
        if (e.target.classList.contains('preview')) {
            preview.classList.remove('open');
            body.classList.remove('ignore-overflow-y');
            // stop trailer banner
            loadTrailer();
            // stop trailer info
            stopTrailerInfo();
        }
    })
    // -------------------show info End--------

// ---------------------Slider start----------------------

// take all categories into an array and then set up slide 
const slides = document.querySelectorAll('.popular-slider')

// use forEach to set every slide
slides.forEach((slide) => {
        // take width for each slide
        const sliderPopular = slide.querySelector('.popular-slider-card'),
            slideWidth = sliderPopular.offsetWidth,

            // take all card-item to an array
            slideItems = slide.querySelectorAll('.popular-slider-card-item'),

            // use to count item in a slide and take it's width
            slideItem = slide.querySelector('.popular-slider-card-item'),
            // button prev
            prevBtn = slide.querySelector('.popular-slider-nav .prev-btn'), // button next
            nextBtn = slide.querySelector('.popular-slider-nav .next-btn');


        //  Count number of slide for every click.
        let countSlide = Math.ceil((slideItems.length * slideItem.offsetWidth) / (5 * slideItem.offsetWidth));
        // set index = 0;
        let slideIndex = 0;
        // click for next button
        sliderPopular.style.width = slideWidth * countSlide + 'px';

        // if slide has only 5 items. Don't have next button
        if (countSlide <= 1) {
            nextBtn.classList.add("hide");
        }
        // Number of clicking is countSlide
        nextBtn.addEventListener('click', () => {
                // if slideIndex == countSlide then reset slideIndex = 0
                if (slideIndex === countSlide - 1) {
                    slideIndex = 0;
                } else {
                    slideIndex++;
                }
                // if slideIndex = 0 then prev button will hide
                if (slideIndex > 0) {
                    prevBtn.classList.add('active')
                } else {
                    prevBtn.classList.remove('active')
                }
                slider();
            })
            // click for pre button
        prevBtn.addEventListener('click', () => {
                if (slideIndex === 0) {
                    slideIndex = countSlide - 1;
                } else {
                    slideIndex--;
                }
                slider();
            })
            // when it has event "click" Margin left is minus to next slideIndex
        function slider() {
            sliderPopular.style.marginLeft = -(slideWidth * slideIndex) + 'px';
        }
    })
    //----------------slide end--------------------