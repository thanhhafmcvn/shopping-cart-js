// To check if browser supports HTML 5
const checkBrowser = () => {
    if ('localStorage' in window && window['localStorage'] !== null) {
        return true;
    }
    else {
        return false;
    }
}

const showAll = () => {
    if (checkBrowser()) {
        var keys = '';
        var list = "<tr><th>Item</th><th>Value</th></tr>\n";
        var i = 0;
        for (i = 0; i <= localStorage.length - 1; i++){
            key = localStorage.key(i);
            list += "<tr><td>" + key + "</td>\n<td>" + localStorage.getItem(key) + "</td></tr>\n"
        }
        if (list == "<tr><th>Item</th><th>Value</th></tr>\n") {
            list += "<tr><td><i>Empty</i></td><td><i>Empty</i></td></tr>\n"
        }
        document.querySelector('#table').innerHTML = list;
    }
    else {
        alert("Cannot save your shopping list")
    }
}

const addToCart = () =>{
    var name = document.querySelector('#name').value;
    var data = document.querySelector('#data').value;
    localStorage.setItem(name, data);
    showAll();
}

const modifyItem = () => {
    var name1 = document.querySelector('#name').value;
    var data1 = document.querySelector('#data').value;

    if (localStorage.getItem(name1) !== null) {
        localStorage.setItem(name1, data1);
        document.querySelector('#data').value = localStorage.getItem(name1);
    }
    showAll();
}

const removeItem = () => {
    var name = document.querySelector('#name').value;
    document.querySelector('#data').value = localStorage.removeItem(name);
    showAll();
}

const clearAll = () => {
    localStorage.clear();
    showAll();
}