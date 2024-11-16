/*수능 카운트다운*/
const countDownDate = new Date("2025-11-13T00:00:00+0900").getTime();

const x = setInterval(function() {
    const now = new Date().getTime();
    const distance = countDownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML = (days+1) + "일 " + hours + "시간 "
        + minutes + "분 " + seconds + "초 남음";

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "카운트다운이 종료되었습니다.";
    }
}, 1000);
