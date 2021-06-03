import { html } from '../../node_modules/lit-html/lit-html.js';

const bulgarianTemplate = () => html`
        <title>Сватбата на Кристина и Антон</title>
        <header class="header" id="bg">
            <h1 class="h1-title GV-Cyrillic">Сватбата на</h1>
            <h2 class="h2-title OS-light">Кристина и Антон</h1>
                <nav class="nav">
                    <ul>
                        <li>
                            <a class="OS-light" href="#bg">НАЧАЛО</a>
                        </li>
                        <li>
                            <a class="OS-light" href="#story">НАШАТА ИСТОРИЯ</a>
                        </li>
                        <li>
                            <a class="OS-light" href="#event">ДЕТАЙЛИ ЗА СЪБИТИЕТО</a>
                        </li>
                        <li>
                            <a class="OS-light" href="#map">КАРТА</a>
                        </li>
                        <li class="OS-light dropdown">
                            <div class="btn-Menu-div">
                                <a @click=${onClickk} class="dropBTN" href="#">ЕЗИК</a>
                                <div class="dropdown-content">
                                    <a href="/englishPage">English</a>
                                    <a href="/bulgarianPage">Български</a>
                                    <a href="/romanianPage">Română</a>
                                </div>
                            </div>
                        </li>
                        </li>
                    </ul>
                </nav>
        
                <section class="heroIMG-container">
                    <div class="div-container-heriIMG">
                        <div class="container">
                            <button class="btnRSVP OS-light">RSVP</button>
                        </div>
                        <div class="date-heroIMG-container">
                            <h5 class="OS-light h5-1">
                                30ти Октомбри 2021
                            </h5>
                            <h5 class="OS-light h5-2">
                                София България
                            </h5>
                        </div>
                    </div>
                </section>
        </header>
        
        <section class="story-container section-box">
            <div class="h3-box">
                <h3 class="GV-Cyrillic h3" id="story">Нашата История</h3>
            </div>
        
            <p class="OS-light p">
                Нашата любовна история започна в Лондон 2017 г. Антон се опитваше да го направи като ръководител на проекти,
                докато Кристина
                беше
                младши лекар в близката болница. Някакви флиртуващи закачки бяха разменени напред-назад, последвани
                от а
                среща в Hyde Parksâ € ™ Зимна страна на чудесата, греяно вино и късен разговор в палатка до открит огън ...
                а останалото е история! Спомени на стойност четири години и бяхме замръзнали на върха на Айфел
                Tower, валял във Венеция и оцелял от кухнята на Канарските острови. Ние също наричаме 3 места наши
                у дома и сериозно подобри нашата игра за домашно кафе. Миналото лято Антон организира пикник в Хайд Парк и
                ни помоли да се облечем, както трябваше да храним папагалите и никога не знаеш кога ще свършиш
                щракване
                тази перфектна картина. Ние „случайно“ се чудехме на същото място, където отне първата ни среща
                място и там той зададе въпроса ... Кристина каза ДА! Не можем да чакаме това вълнуващо ново
                глава да започне!
            </p>
        
            <div class="carousel">
                <button class="carousel__button carousel__button--left is-hidden">
                    <img src="decorations/angle-left-solid.svg" alt=" ">
                </button>
                <div class="carousel__track-container">
                    <ul class="carousel__track">
                        <li class="carousel__slide current-slide">
                            <img class="carousel__image" src="images/1.jpg" alt=" ">
                        </li>
                        <li class="carousel__slide">
                            <img class="carousel__image" src="images/2.jpg" alt=" ">
                        </li>
                        <li class="carousel__slide">
                            <img class="carousel__image" src="images/3.jpg" alt=" ">
                        </li>
                    </ul>
                </div>
                <button class="carousel__button carousel__button--right">
                    <img class="r" src="decorations/angle-right-solid.svg" alt=" ">
                </button>
                <div class="carousel__nav">
                    <button class="carousel__indicator current-slide"></button>
                    <button class="carousel__indicator"></button>
                    <button class="carousel__indicator"></button>
                </div>
            </div>
        </section>
        
        <section class="event-container section-box">
            <div class="h3-box event-h3-box">
                <img src="decorations/event-details.png" alt="">
                <h3 class="GV-Cyrillic h3-event" id="event">Детайли за Събитието</h3>
            </div>
            <div class="church-details">
                <div>
                    <div class="divImgChurch">
                        <img src="images/church-icon.png" alt="">
                    </div>
                    <div>
                        <h4 class="OS-light">Църквата</h4>
                    </div>
                </div>
                <h5 class="OS-light h5">30ти Октомври, 16:00ч.</h5>
            </div>
            <img class="curchIMG" src="images/soflc-attraction-nedelya-church-0080-hor-clsc.jpg" alt="">
            <p class="OS-light p">
                За специалния ден ви каним да се присъедините към нас в църквата Света Неделя в 16:00, моля, пристигнете за
                няколко минути
                рано, ако искате да бъдете на всички снимки. Произходът на името Света Неделя е доста неясен. То
                може да се преведе или като „Света Неделя“, „Света Неделя“ или дори като „Света Неделя“. Това е
                средновековна църква, която е претърпяла разрушения през вековете и е реконструирана многократно.
                Настоящата сграда на храма е сред забележителностите на София и също празнува своята 700-а
                годишнина в деня на нашата сватба! Какво ще кажете за това ...
            </p>
        </section>
        
        <section class="Pre-drinks-container section-box">
            <div class="h3-box pre-h3-box">
                <h3 class="OS-light h3-pre">Рецепция Предварителни напитки</h3>
                <img src="decorations/reseption-pre-drinks.png" alt="">
            </div>
            <h5 class="OS-light h5">Хотел Балкан Лоби 17:00ч.</h5>
            <div class="div-img-p-predrinks">
                <div class="lobyIMG-box">
                    <img class="pre-img" src="images/soflc-banquet-lobby-0050-hor-clsc.jpg" alt="">
                </div>
                <div class="Pre-drinks-p">
                    <p class="OS-light">
                        След църквата, ще имате няколко минути, за да протегнете краката си, присъединете се към нас за групата
                        снимки,
                        хванете букет цветя;) ... Когато сте готови, можете да се присъедините към нас в хотел Балкан (зад
                        църква) за
                        безплатна напитка. Това ще бъде първата ви възможност да се смесите с други гости и да получите
                        да знам
                        преди започване на приема. Отидете на рецепцията на хотелите и потвърдете, че сте гост на Кристина
                        и
                        Сватбата на Антон. Персоналът на хотела ще ви помогне да намерите пътя до останалите гости и чаша
                        мехурчест.
                    </p>
                </div>
            </div>
        </section>
        
        <section class="reception-container section-box">
            <div class="h3-box">
                <h3 class="OS-light h3-reception">Прием</h3>
            </div>
            <h5 class="OS-light h5">30ти октомври 2021 г., в 17:00ч.</h5>
            <img src="images/soflc-serdica-3571-hor-clsc.jpg" alt="">
            <p class="OS-light p">
                Duo ea autem tation adipiscing. In graeci vulputate vix. Ad vix dolore labores omnesque. Rebum graeco eu
                vim. Agam graeco eu eum. Eam ad porro efficiendi conclusionemque, eam stet mentitum expetendis eu. Vis
                in nullam deleniti. Pri eu praesent elaboraret, ad affert explicari ius, sit vidit perpetua an. No sit
                eirmod nostrud repudiandae, tota scripta blandit ea eam. In qui suas inciderint, vis tollit latine
                definiebas in. Eros nostrum albucius eu pri.
            </p>
        </section>
        
        <section class="map-container section-box">
            <div class="h3-box">
                <h3 class="GV-Cyrillic h3" id="map">Карта</h3>
            </div>
            <h5 class="OS-light h5">Хотел Балкан Сердика 18:00ч</h4>
                <div class="div-img-p-map">
                    <div>
                        <a href="https://www.google.com/maps/place/Sofia+Hotel+Balkan,+a+Luxury+Collection+Hotel,+Sofia/@42.6970377,23.322337,15z/data=!4m8!3m7!1s0x0:0xd9b39e6fedb37125!5m2!4m1!1i2!8m2!3d42.6970377!4d23.322337"
                            target="_blank">
                            <img src="images/map.PNG" alt="">
                        </a>
                    </div>
                    <div class="map-p">
                        <p class="OS-light">
                            Duo ea autem tation adipiscing. In graeci vulputate vix. Ad vix dolore labores omnesque.
                            Rebum
                            graeco eu
                            vim. Agam graeco eu eum. Eam ad porro efficiendi conclusionemque, eam stet mentitum
                            expetendis
                            eu. Vis
                            in nullam deleniti. Pri eu praesent elaboraret, ad affert explicari ius, sit vidit perpetua
                            an.
                            No sit
                            eirmod nostrud repudiandae, tota scripta blandit ea eam. In qui suas inciderint, vis tollit
                            latine
                            definiebas in. Eros nostrum albucius eu pri.
                        </p>
                    </div>
                </div>
        </section>
        
        <section class="accomodation-container section-box">
            <div class="h3-box">
                <h3 class="GV-Cyrillic h3">Настаняване</h3>
            </div>
            <p class="OS-light p">
                Тъй като това е събитие за дестинация за някои от вас, имайте предвид, че ние сме тук, за да ви помогнем. Ако
                решите
                отседнете в същия хотел като рецепцията с удоволствие ще покрием разходите за нощта на сватбата
                и се уверете, че получавате преференциални цени за останалата част от престоя.
            </p>
        </section>
        
        <section class="presents-container section-box">
            <div class="h3-box">
                <h3 class="GV-Cyrillic h3">Подаръци</h3>
            </div>
            <p class="OS-light p">
                Вашето присъствие в нашия специален ден е най-великият подарък от всички!
        
                Ако обаче искате да празнувате с подарък, имайте предвид, че това е сватба по дестинация за нас
                и ще трябва да изпратим всичко от другата страна на Европа.
            </p>
        </section>
        
        <footer class="footer-container section-box">
            <div class="footer">
                <p class="OS-light p1">
                    Уебсайтът е проектиран и разработен благодарение на
                </p>
                <p class="OS-light p2">
                    Калина Матеева и Георги Деспотов
                </p>
            </div>
        </footer>

`

export function bgPage(ctx) {
    ctx.render(bulgarianTemplate());
    carousel();

    // window.addEventListener('beforeunload', onRefresh);
    // function onRefresh() {
    //     console.log('cici');
    // }
}
function onClickk() {

    const div = document.querySelector('.dropdown-content');
    let isVisible = div.style.display == 'block';
    div.style.display = isVisible ? 'none' : 'block';
}
function carousel() {

    const track = document.querySelector('.carousel__track');
    const slides = Array.from(track.children);
    const nextButton = document.querySelector('.carousel__button--right');
    const prevButton = document.querySelector('.carousel__button--left');
    const dotsNav = document.querySelector('.carousel__nav');
    const dots = Array.from(dotsNav.children);
    console.log(track);

    const slideWidth = slides[0].getBoundingClientRect().width;

    //arrange the slides next to one another

    //slides[0].style.left=slideWidth * 0 + 'px';
    //slides[1].style.left=slideWidth * 1 + 'px';
    //slides[2].style.left=slideWidth * 2 + 'px';

    const setSlidePosition = (slide, index) => {
        slide.style.left = slideWidth * index + 'px';
    };
    slides.forEach(setSlidePosition);

    const moveToSlide = (track, currentSlide, targetSlide) => {
        console.log(track);
        console.log(targetSlide.style.left);
        track.style.transform = 'translateX(-' + targetSlide.style.left + ')'
        currentSlide.classList.remove('current-slide');
        targetSlide.classList.add('current-slide');
    }

    const updateDots = (currentDot, targetDot) => {
        currentDot.classList.remove('current-slide');
        targetDot.classList.add('current-slide');
    }

    const hideShowArrows = (slides, prevButton, nextButton, targetIndex) => {
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
        const currentDot = dotsNav.querySelector('.current-slide')
        const prevDot = currentDot.previousElementSibling;
        const prevIndex = slides.findIndex(slide => slide === prevSlide);


        moveToSlide(track, currentSlide, prevSlide);
        updateDots(currentDot, prevDot);
        hideShowArrows(slides, prevButton, nextButton, prevIndex);

    })

    //when i click right, move slides to the right

    nextButton.addEventListener('click', e => {
        const currentSlide = track.querySelector('.current-slide');
        const nextSlide = currentSlide.nextElementSibling;
        const currentDot = dotsNav.querySelector('.current-slide')
        const nextDot = currentDot.nextElementSibling;
        const nextIndex = slides.findIndex(slide => slide === nextSlide);

        moveToSlide(track, currentSlide, nextSlide);
        updateDots(currentDot, nextDot);
        hideShowArrows(slides, prevButton, nextButton, nextIndex);
    })

    dotsNav.addEventListener('click', e => {
        //what indicator was clicked on ? 
        const targetDot = e.target.closest('button');

        if (!targetDot) return;

        const currentSlide = track.querySelector('.current-slide');
        const currentDot = dotsNav.querySelector('.current-slide');
        const targetIndex = dots.findIndex(dot => dot === targetDot);
        //console.log(targetIndex);
        const targetSlide = slides[targetIndex];

        moveToSlide(track, currentSlide, targetSlide);
        updateDots(currentDot, targetDot);

        hideShowArrows(slides, prevButton, nextButton, targetIndex);
    })

}