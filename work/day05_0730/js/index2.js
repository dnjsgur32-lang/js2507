function updateClockAndGreeting() {
    // 현재 시간 정보를 가져옵니다.
    let myDate = new Date();

    // -------------- [테스트용 시계] --------------
    // 아래 2줄의 주석을 해제하면 원하는 시간으로 테스트할 수 있습니다.
    // myDate.setHours(8);      // 시(0~23)
    // myDate.setMinutes(30);   // 분(0~59)
    // --------------------------------------------

    let myhour = myDate.getHours();
    let myMinutes = myDate.getMinutes();

    let greeting = "";
    let timeAM = 9;
    let timePM = 18;

    // 시계: 'HH:MM' 형식으로 표시
    document.getElementById('clock').textContent =
        `${myhour.toString().padStart(2, '0')}:${myMinutes.toString().padStart(2, '0')}`;

    let imgSrc = "";
    if (myhour < timeAM) {
        greeting = "등원 준비~";
        imgSrc = "https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=800&q=80";
    } else if (myhour > timePM) {
        greeting = "집에 가자";
        imgSrc = "https://cdn.pixabay.com/photo/2020/01/31/07/10/subway-4807266_1280.jpg";
    } else {
        greeting = "열공~힘을내요~!!";
        imgSrc = "https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=800&q=80";
    }

    document.getElementById('greeting').textContent = greeting;
    document.getElementById('greeting-img').src = imgSrc;
}

// 1초마다 자동 갱신
setInterval(updateClockAndGreeting, 1000);