const progress = document.getElementById('progress');
const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');

    xhr.upload.onprogress = function (event) {
        console.log(`Отправлено ${event.loaded} из ${event.total}`);
        if (event.lengthComputable) {
            const fileUpload = event.loaded / event.total;
            // console.log(fileUpload)
            progress.value = fileUpload;
        }
    };

    xhr.onload = function () {
        if (xhr.status === 200) {
            console.log("Успех");
        } else {
            console.log("Код состояния HTTP" + this.status);
        }
    };

    xhr.send(new FormData(form));
})


