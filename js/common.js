$(function () {
    $('.lazy').lazy({
        // your configuration goes here
        scrollDirection: 'vertical',
        effect: 'fadeIn',
        visibleOnly: true,
        onError: function (element) {
            console.log('error loading ' + element.data('src'));
        }
    });
    $('body').on('click', '.page-scroll a', function (event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 100
        }, 600);
        event.preventDefault();
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() >= 80) {
            // $(".btn_top").fadeIn();
            $(".logo").css({ width: "70px" });
        }
        else {
            // $(".btn_top").fadeOut();
            $(".logo").css({ width: "100px" });
        }
    });

    if ($(window).width() < 768) {
        $(".navbar-light .nav-link").on('click', function () {
            $(".navbar-toggler").click();
        })
    }

    $(".btn_top").on('click', function () {
        $('html, body').animate({
            scrollTop: $('#trangchu').offset().top - 200
        }, 600);
    });

    $('.slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        dots: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
    // console.log($('input[type=hidden]#daily').val());
})

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const dataSet = [
    {
        name: "Thanh Tuyền Trương",
        imgSrc: './assets/images/kh1.png',
    },
    {
        name: "Ngọc Duyên Cao",
        imgSrc: './assets/images/kh2.png',
    },
    {
        name: "Tường Ngô",
        imgSrc: './assets/images/kh3.png',
    },
    {
        name: "Lặng thầm",
        imgSrc: './assets/images/kh4.png',
    },
    {
        name: "Hứa Thái",
        imgSrc: './assets/images/kh5.png',
    },
];


const b = setInterval(function () {
    let random = getRndInteger(0, 4);
    $(".custom-notification-image-wrapper img").attr('src', dataSet[random].imgSrc);
    $(".custom-notification-content strong").html(dataSet[random].name);
    $(".custom-social-proof").addClass('show');
    const a = setInterval(function () {
        $(".custom-social-proof").removeClass('show');
        if (!($(".custom-social-proof").hasClass('show'))) {
            clearInterval(a);
        }
    }, 7000)
}, 5000);


function checkPhoneNumber() {
    var flag = false;
    var phone = $('#phone').val().trim(); // ID của trường Số điện thoại
    phone = phone.replace('(+84)', '0');
    phone = phone.replace('+84', '0');
    phone = phone.replace('0084', '0');
    phone = phone.replace(/ /g, '');
    if (phone != '') {
        var firstNumber = phone.substring(0, 2);
        if ((firstNumber == '09' || firstNumber == '08' || firstNumber == '03' || firstNumber == '05' || firstNumber == '07') && phone.length == 10) {
            if (phone.match(/^\d{10}/)) {
                flag = true;
            }
        }
    }
    return flag;
}

function checkPhoneNumber_ft() {
    var flag = false;
    var phone = $('#phone_ft').val().trim(); // ID của trường Số điện thoại
    phone = phone.replace('(+84)', '0');
    phone = phone.replace('+84', '0');
    phone = phone.replace('0084', '0');
    phone = phone.replace(/ /g, '');
    if (phone != '') {
        var firstNumber = phone.substring(0, 2);
        if ((firstNumber == '09' || firstNumber == '08' || firstNumber == '03' || firstNumber == '05' || firstNumber == '07') && phone.length == 10) {
            if (phone.match(/^\d{10}/)) {
                flag = true;
            }
        }
    }
    return flag;
}

function checkPhoneNumber_daily() {
    var flag = false;
    var phone = $('#phone_daily').val().trim(); // ID của trường Số điện thoại
    phone = phone.replace('(+84)', '0');
    phone = phone.replace('+84', '0');
    phone = phone.replace('0084', '0');
    phone = phone.replace(/ /g, '');
    if (phone != '') {
        var firstNumber = phone.substring(0, 2);
        if ((firstNumber == '09' || firstNumber == '08' || firstNumber == '03' || firstNumber == '05' || firstNumber == '07') && phone.length == 10) {
            if (phone.match(/^\d{10}/)) {
                flag = true;
            }
        }
    }
    return flag;
}


function kiemtra() {
    if (!checkPhoneNumber()) {
        alert("Số điện thoại bạn điền không hợp lệ !");
        $('#phone').focus();
        return false;
    }

    else {
        const phone = $('#phone').val();
        $(".field_register").attr('disabled', 'disabled');
        $.ajax({
            type: "POST",
            url: "api/register.php",
            data: { phone: phone },
            success: function (data) {
                data = JSON.parse(data);
                if (data.result === "0") {
                    alert("Bạn đã đăng ký rồi");
                }
                else {
                    window.location.href = "thanks.html";
                }
            }
        });
    }
}

function kiemtra_ft() {
    if (!checkPhoneNumber_ft()) {
        alert("Số điện thoại bạn điền không hợp lệ !");
        $('#phone_ft').focus();
        return false;
    }
    else {
        const phone = $('#phone_ft').val();
        $(".field_register").attr('disabled', 'disabled');
        $.ajax({
            type: "POST",
            url: "api/register.php",
            data: { phone: phone },
            success: function (data) {
                data = JSON.parse(data);
                if (data.result === "0") {
                    alert("Bạn đã đăng ký rồi");
                }
                else {
                    window.location.href = "thanks.html";
                }
            }
        });
    }
}

function kiemtra_daily() {
    if ($('#fullname_daily').val() == "") {
        alert("Vui lòng nhập Họ tên!");
        $('#fullname_daily').focus();
        return false;
    }
    else if (!checkPhoneNumber_daily()) {
        alert("Số điện thoại bạn điền không hợp lệ !");
        $('#phone_daily').focus();
        return false;
    }
    else {
        const phone = $('#phone_daily').val();
        const fullname = $('#fullname_daily').val();
        const daily = $('input[type=hidden]#daily').val();
        $(".field_register").attr('disabled', 'disabled');
        $.ajax({
            type: "POST",
            url: "api/register.php",
            data: { fullname: fullname, phone: phone, daily: daily },
            success: function (data) {
                data = JSON.parse(data);
                if (data.result === "0") {
                    alert("Bạn đã đăng ký rồi");
                }
                else {
                    window.location.href = "thanks.html";
                }
            }
        });
    }
}