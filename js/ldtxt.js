class loadText {
    constructor(file, elm) {

        let xhr = new XMLHttpRequest();

        xhr.open('GET', file, true);
        xhr.onprogress = function() {
            console.log("working");
        };

        xhr.onload = function() {
            if (this.status == 200) {
                console.log("working inside");
                document.getElementById(`${elm}`).innerHTML += this.responseText;
            }
        };

        xhr.onerror = function() {
            console.log(xhr,'Request Error');
        };
        xhr.send();
        return xhr.responseText;
    }
}