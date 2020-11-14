// Set the date we're counting down to
const countDownDate = new Date("Nov 16, 2020 00:00:00").getTime();
const wishes = document.querySelector(".wishes");
const wishEl = document.querySelector(".wish");
const header = document.querySelector(".header");
const countDown = document.querySelector(".countdown");
const nextWishBtn = document.querySelector(".wish__next-btn");
const wishText = document.querySelector(".wish__text");
const wishesImg = document.querySelector(".wishes__img");
const author = document.querySelector(".wish__author-link");
let index = 1;

let wishAndImg = [
    {
        wish: "Жастан жасқа тола бер, иман байлығын берсін, денсаулық, иман жүзді адамдармен кездес, иманды, білімді адамдардың қатарында бол, диплом алып, жақсы қызметке орналасуды нәсіп етсін, дүниеде де, ахиретте де бақытты бол, амандықпен кездесуді Алла нәсіп етсін.",
        image: "./images/IMG_20190907_162420.jpg",
        author: "@Мама",
        authorLink: "#"
    },
    {
        wish: "Туылған күнің құтты болсын, брат! Өмірің әр қашан да жарқын, жаздай жылы болсын! Қалаған армандарын орындалып, мақсаттарына жете бер! Бар жақсылық тілеймін брат!",
        image: "./images/74372690_153964039035348_36435807825039542_n.jpg",
        author: "@temirlan.khamidullin",
        authorLink: "https://instagram.com/temirlan.khamidullin"
    },
    {
        wish: "Брат, туған күніңізбен! Алла иманыңызды арттырып, оны берік қылсын. Әлемнің бар жақсылығын тілеймін. Ойлаған арманыңыз орындалып, алға қойған мақсаттарыңызға жетіңіз. Алла бар күнәңізді кешіріп, Фирдауси жәннәтіне отбасыңызбен кіріп, Мұхаммед пайғамбардың (с.а.с) жанында астынан өзен ағып жатқан үйге ие болуыңызды тілеймін. Айналаңызда адал, иманды, шынайы достарыңыз көп болсын! Болашақта ақшаға мұқтаж болмас дәрежеге жетіп, Алла жолында өз ісіңізбен айналысуыңызға тілектеспін. Денсаулығыңыз берік болсын. Жастан жасқа тола беріңіз!",
        image: "./images/IMG_20181016_191859.jpg",
        author: "@de_fida_",
        authorLink: "https://instagram.com/de_fida_"
    },
    {
        wish: "Ақа, туған күніңмен! Тақуалардың және инженерлердің алдыңғы қатарында болуды нәсіп етсін. Фирдаусиде бірге болуымызды Алла нәсіп етсін. Мамандықтан қателеспеген шығарсың, енді жар таңдаудан қателеспеуді Алла бұйырсын. Мұхаммед с.а.с. айтқан ең қайырлылардың қатырында бол. Ойлаған арман-мақсаттарыңа жете бер! Қияметтік ағайындылардан болуды нәсіп етсін. Тақуалар мен өзің сияқтылардың арасында бол. Бірінші байлық денсаулықты тілеймін. Уақытың босқа өтпесін. Екі өмірде де бақытты бол! Давай, 5.6к бар ма? дисн",
        image: "./images/IMG_20190907_162456.jpg",
        author: "@beko",
        authorLink: "https://t.me/nameuser3"
    }
];

let now = new Date().getTime();
let distance = countDownDate - now;

let opacity = 0;
let intervalID = 0;

function typing(text) {
    nextWishBtn.disabled = true;
    $('.typewriter__text').text("");
    let textIndex = 1;
    let tmp = setInterval(function () {
        if (textIndex < text.length + 1) {
            $('.typewriter__text').text(text.substr(0, textIndex));
            textIndex++;
        }
        else {
            clearInterval(tmp);
            nextWishBtn.disabled = false;
        }
    }, 50);
}

function fadeIn() {
    opacity = 0;
    intervalID = setInterval(show, 50);
}
function show() {
    opacity = Number(window.getComputedStyle(wishesImg).getPropertyValue("opacity"));
    if (opacity < 1) {
        opacity = opacity + 0.025;
        wishesImg.style.opacity = opacity;
    }
    else {
        clearInterval(intervalID);
    }
}

if (distance < 0) {
    countDown.style.display = 'none';
    wishes.style.display = 'grid';
    header.style.display = 'block';
}

// Update the count down every 1 second
let x = setInterval(function () {
    now = new Date().getTime();
    distance = countDownDate - now;
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
        + minutes + "m " + seconds + "s ";

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "EXPIRED";
        fadeIn();
        typing(wishAndImg[0].wish);
        countDown.style.display = 'none';
        wishes.style.display = 'grid';
        header.style.display = 'block';
    }
}, 1000);

nextWishBtn.addEventListener('click', function () {
    wishesImg.style.display = 'none';
    wishesImg.style.opacity = 0;
    if (index + 1 > wishAndImg.length) {
        index = 0
    }
    if (wishAndImg[index].wish.length > 382) {
        wishEl.style.padding = "0";
    }
    else {
        wishEl.style.padding = "16px 0 16px";
    }
    wishesImg.src = wishAndImg[index].image;
    wishesImg.style.display = 'block';
    fadeIn();
    author.textContent = wishAndImg[index].author;
    author.href = wishAndImg[index].authorLink;
    typing(wishAndImg[index].wish);
    index++;
})

window.onload = function () {
    fadeIn();
}
