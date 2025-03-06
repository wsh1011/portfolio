const tabBtns = document.querySelectorAll('.tab-wrap > li');
const tabConts = document.querySelectorAll('.content_inner section');

    tabBtns.forEach((btn, index) => {
        btn.addEventListener('click', (e) => {  //각각의 버튼을 클릭하면.. index=0~2
            e.preventDefault();
            tabBtns.forEach(otherBtn => {
                otherBtn.classList.remove('active');
            });
            tabConts.forEach(othercont => {
                othercont.classList.remove('active');
            });
            tabBtns[index].classList.add('active');    //forEach문은 btn과 index를 기억하고 있음
            tabConts[index].classList.add('active');
        });
    });