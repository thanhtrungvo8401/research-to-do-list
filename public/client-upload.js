function submit(e) {
    e?.preventDefault();

    const fileEl = document.querySelector("input[name='file']")
    const nameEl = document.querySelector("input[name='name']")

    fetch('/upload', 
        { method: 'POST', body: { file: fileEl[0], name: nameEl.value } }
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
