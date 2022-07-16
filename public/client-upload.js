function submit(e) {
    e?.preventDefault();

    const fileEl = document.querySelector("input[name='file']")
    const nameEl = document.querySelector("input[name='name']")

    const formData = new FormData();
    formData.append('file', fileEl.files[0]);
    formData.append('name', nameEl.value);

    fetch('/upload', 
        { method: 'POST', body: formData }
    ).then(res => {
        return res.json()
    })
    .then(res => {
        console.log(res);
    })
    .catch(err => {
        console.log(err);
    })

}


window.addEventListener('load', function () {
    const form = document.getElementById('form')

    form.addEventListener('submit', submit)
})
