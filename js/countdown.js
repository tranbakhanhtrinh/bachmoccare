(function () {
    let initTime = [13, 0, 0];
    const countDown = function (time = initTime) {
        const isSetTime = (time !== 'undefined' && time !== '') && time != null ? time : initTime;
        let h = isSetTime[0];
        let m = isSetTime[1];
        let s = isSetTime[2];
        if (h < 0) { h = "0" + h }
        if (m < 0) { m = "0" + m }
        if (s < 0) { s = "0" + s }
        const hour = document.querySelector('#hour');
        const minute = document.querySelector('#minute');
        const second = document.querySelector('#second');
        const x = setInterval(function () {
            s -= 1;
            if (s < 0) { s = 59 }
            if (s < 10 && s >= 0) { s = "0" + s }
            if (s == 59) {
                m -= 1;
                if (m < 10 && m >= 0) { m = "0" + m }
                if (m < 0) { m = 59 }
                if (m == 59) {
                    h -= 1;
                    if (h < 10 && h >= 0) { h = "0" + h }
                }
            }
            // console.log(s);
            hour.innerHTML = h.toString();
            minute.innerHTML = m.toString();
            second.innerHTML = s.toString();
            if (h == 0 && m == 0 && s == 0) {
                clearInterval(x);
                hour.innerHTML = '00';
                minute.innerHTML = '00';
                second.innerHTML = '00';
            }
        }, 1000)
    };
    countDown();
})()