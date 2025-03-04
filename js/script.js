// KV
var swiperkv = new Swiper(".kv", {
    pagination: {
        el: ".swiper-pagination",
    },
    autoplay: {
        delay: 1500,
        disableOnInteraction: false,
    },
});




//  就是中意你
// slides per view
var swipercard = new Swiper("#loveyou", {
    navigation: {
        nextEl: ".mynext", // 修正選擇器
        prevEl: ".myprev", // 修正選擇器
    },
    // 第一張與最後一張無縫連接
    loop: true,
    // 顯示數量
    slidesPerView: 6.5,
    spaceBetween: 30,
    // 斷點
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 3,
            // ↑後半部露出局部
            spaceBetween: 8,
        },
        // when window width is >= 480px
        768: {
            slidesPerView: 3,
            spaceBetween: 14,
        },
        // when window width is >= 640px
        1024: {
            slidesPerView: 6.5, //修正斷點顯示數量
            spaceBetween: 10,
        },
    },
});


// 熱門推薦
function load() {
    var list = document.querySelector('.foodlist');
    var box = document.querySelector('.hotfood');
    let left = 0;
    let timer;

    function move() {
        clearInterval(timer);
        timer = setInterval(() => {
            left = left - 2;
            if (left <= -(8 * 200 + 2 * 24)) {
                left = 0;
            }
            list.style.left = left + 'px';
        }, 20);
    }

    move();
};

document.addEventListener('DOMContentLoaded', load);