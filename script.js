function runCode() {
    const htmlCode = document.getElementById('htmlCode').value;
    const iframe = document.getElementById('preview');
    iframe.srcdoc = htmlCode;
}
