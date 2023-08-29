const poollAnswers = document.getElementById('poll__answers');

const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');
xhr.addEventListener('load', function () {
    if (xhr.readyState === xhr.DONE) {
        const response = JSON.parse(xhr.responseText);
        const dataAnswers = response.data.answers;
        const dataTitle = response.data.title;
        const poolTitle = document.getElementById('poll__title');

        poolTitle.textContent = dataTitle;
        dataAnswers.forEach(answer => {
            createButton(answer);
        });

        const btnAnswers = document.querySelectorAll('.poll__answer');
        btnAnswers.forEach(btn => {
            btn.addEventListener('click', () => {
                alert('Спасибо, Ваш голос засчитан!');

            })
        })

    }
})
xhr.send();

function createButton(answer) {
    const btnAnswer = document.createElement('button');
    btnAnswer.classList.add('poll__answer');
    btnAnswer.textContent = answer;
    poollAnswers.appendChild(btnAnswer);
    return btnAnswer;
}





