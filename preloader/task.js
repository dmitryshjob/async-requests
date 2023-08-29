const loader = document.querySelector('.loader');
const items = document.getElementById('items');

const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');
xhr.onload = function () {
    if (xhr.readyState === xhr.DONE) {
        loader.classList.remove('loader_active');
        const valutes = JSON.parse(xhr.responseText).response.Valute;

        for (let key in valutes) {
            items.insertAdjacentHTML('beforeEnd', `
            <div class="item">
                <div class="item__code">
                    ${valutes[key].CharCode}
                </div>
                <div class="item__value">
                    ${valutes[key].Value.toFixed(2)}
                </div>
                <div class="item__currency">
                    руб.
                </div>
            </div>`);            
        }
    };
};

xhr.send();

