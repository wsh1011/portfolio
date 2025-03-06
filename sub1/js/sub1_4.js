const btns = document.querySelectorAll(".task_btn"); //btns[0]~btns[2]

        btns.forEach((btn) => {
            btn.addEventListener("click", () => {   //각각의 버튼을 클릭하면
                const faqItem = btn.parentNode; //클릭한 버튼의 부모태그를 리턴한다 => <li>태그
                //console.log(faqItem);
                const isActive = faqItem.classList.contains("active"); //"active" 클래스를 가지고 있으면 true / 아니면 false 반환  //isActive가 true면 열려있는 상태
                //console.log(isActive);

                removeActiveClasses(); //함수 호출

                if (!isActive) {  //클래스를 가지고 있지 않으면(!isActive가 아니면(닫혀있으면)) "active" 클래스를 추가한다
                   faqItem.classList.add("active");
                }
            });
        });

        function removeActiveClasses() {
            btns.forEach((btn) => { //이전에 열려있던거 닫음
                btn.parentNode.classList.remove("active");  //모든 버튼의 부모 <li>태그의 "active" 클래스를 제거한다
            });
        }