document.addEventListener('DOMContentLoaded', function() {
    const loadingBar = document.querySelector('.loading-progress');
    const loadingText = document.querySelector('.loading-percent');

    let percent = 0;
    const interval = setInterval(function() {
        percent += 1;
        if (percent > 100) {
            clearInterval(interval);
            document.getElementById('loading').style.display = 'none';
            document.getElementById('content').style.display = 'block';
        } else {
            loadingText.innerText = percent + '%';
            loadingBar.style.width = percent + '%';
        }
    }, 10);
});


function mainClick(){
    const intro=
    document.getElementById('main');
        intro.style.display ='block';
        const one=
    document.getElementById('page2');
        one.style.display ='none';
        const two=
    document.getElementById('page3');
        two.style.display ='none';

    const footerView = document.getElementById('footerView')
    footerView.style.display = 'none'

}
function page2Click(){
    const intro=
    document.getElementById('main');
        intro.style.display ='none';
        const one=
    document.getElementById('page2');
        one.style.display ='block';
        const two=
    document.getElementById('page3');
        two.style.display ='none';

    const footerView = document.getElementById('footerView')
    footerView.style.display = 'block'
}
function page3Click(){
    const intro=
    document.getElementById('main');
        intro.style.display ='none';
        const one=
    document.getElementById('page2');
        one.style.display ='none';
        const two=
    document.getElementById('page3');
        two.style.display ='block';

    const footerView = document.getElementById('footerView')
    footerView.style.display = 'block'
}

/* 실행시 메인 실행 */
window.onload = mainClick;


/*card 스크립트*/
const cardsContainer = document.querySelector(".container2");

cardsContainer.addEventListener("click", (e) => {
  const target = e.target.closest(".card");

  if (!target) return;

  cardsContainer.querySelectorAll(".card").forEach((card) => {
    card.classList.remove("active");
  });

  target.classList.add("active");
});


