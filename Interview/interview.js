

const xhr = new XMLHttpRequest();
    const url = "https://github.com/Akash19082001/INTER---ROUND--TECH.git"
    xhr.open('GET', URL, true);

    xhr.onload = function() {
        const data = JSON.parse(this.response);

        console.log(data);
    };
    xhr.send();