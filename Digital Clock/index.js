function showTime() {
    let hr = document.getElementById('hr');
    let min = document.getElementById('min');
    let sec = document.getElementById('sec');
    let ampm = document.getElementById('ampm');
    let time = new Date();
    if (time.getHours() > 12)
        ampm.innerHTML = 'PM';
    else
        ampm.innerHTML = 'AM';
    let hrval = String(time.getHours() % 12);
    let minval = String(time.getMinutes());
    let secval = String(time.getSeconds());
    if (hrval.length == 1) {
        hrval = "0" + hrval;
    }
    if (minval.length == 1) {
        minval = "0" + minval;
    }
    if (secval.length == 1) {
        secval = "0" + secval;
    }
    hr.innerHTML = hrval;
    min.innerHTML = minval;
    sec.innerHTML = secval;

};
setInterval(showTime, 1000)