const render = async () => {
    const list = document.querySelector("#urlList");
    const res2 = await fetch("/filelist") ;
    const data2 = await res2.json() ;
    list.innerHTML = "" ;
    data2.forEach(element => {
        console.log(element) ;
        list.innerHTML += '<li class="list-group-item"><a id="link"' + 'href="' + element + '" class="">' + element + '</a></li>'
    });
}


(async () => {
    const inputFile = document.querySelector('#file');
    const button = document.querySelector("#button");
    

    handleSubmit = async (event) => {
        const formData = new FormData();
        formData.append("file", inputFile.files[0]);
        const body = formData;
        const fetchOptions = {
            method: 'post',
            body: body
        };
        try {
            const res = await fetch("/upload", fetchOptions);
            const data = await res.json();
            await render() ;
        } catch (e) {
            console.log(e);
        }
    }

    button.onclick = handleSubmit;
    await render() ;
})();