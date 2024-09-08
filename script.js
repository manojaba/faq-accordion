const questions = document.querySelectorAll('.question');

questions.forEach(div => {
    const plusIcon = div.querySelector('.plus-icon');
    const answer = div.querySelector('.answer');
    plusIcon.addEventListener('click', (event) => {
        const clickImg = event.target;
        const para = clickImg.closest('div').nextElementSibling;

        if (para.style.display === 'none' || para.style.display === "") {
            para.style.display = 'block';
            clickImg.src = "./assets/images/icon-minus.svg";
        }
        else {
            para.style.display = 'none';
            clickImg.src = "./assets/images/icon-plus.svg";


        }

    })
})

