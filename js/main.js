// data of creation 30.07.2017
//Create by Andrew
// only by native JS(vanilla.js)
/*********************/


window.onload = function () {
    //  take values from #option field

    function getValue() {
        var rows = document.getElementById('table_row').value || 2;
        var cells = document.getElementById('table_cell').value || 2;
        var isCaption = document.getElementById('caption').checked;
        var isNumVertical = document.getElementById('numvert').checked;
        var isNumHorizontal = document.getElementById('numhorz').checked;
        return {
            rows: rows,
            cells: cells,
            isCaption: isCaption,
            isNumVertical: isNumVertical,
            isNumHorizontal: isNumHorizontal,
        }
    }

    //  create table functions
    function createCaption(table, isCaption) {
        if (isCaption) {
            var cap = document.createElement('caption');
            cap.innerHTML = 'Caption';
            table.appendChild(cap);
        }
        return table;
    }

    function createTable(options) {
        var table = document.createElement('table');
        var tab = createCaption(table, options.isCaption);
        for (var i = 0; i < options.rows; i += 1) {
            var row = document.createElement('tr');
            for (var j = 0; j < options.cells; j += 1) {
                var data = document.createElement('td');
                if (j === 0 && options.isNumVertical) {
                    data.innerHTML = i;
                    data.className = 'numeric';
                }
                if (i === 0 && options.isNumHorizontal) {
                    data.innerHTML = j;
                    data.className = 'numeric';
                }
                row.appendChild(data);
            }
            tab.appendChild(row);
        }
        return tab;
    }

    var app = document.getElementById('app');


    var drawTable = function (event) {
        event.preventDefault();
        var options = getValue();
        var table = createTable(options);
        table.className = 'table';
        table.setAttribute('contenteditable', 'true');
        app.appendChild(table);
    }

    var createBtn = document.getElementById('creation');
    createBtn.addEventListener('click', drawTable, false);

    var form = document.forms[1];
    form.addEventListener('change', function (event) {
        if (app.firstElementChild !== null) {
            app.removeChild(app.firstElementChild);
            drawTable(event);
        }
    }, false);


    //  event lister for close popup

    var popup = document.querySelector('#popup');
    var exitBtn = document.querySelector('.btn-close');
    var close = document.querySelector('.close');
    var getHtmlBtn = document.querySelector('#generation');

    function hidePopup(e) {
        e.preventDefault();
        popup.style.opacity = '0';
        setTimeout(function () {
            popup.style.display = 'none';
        }, 600);
    }
    function showPopup(e) {
        e.preventDefault();
        setTimeout(function () {
            popup.style.opacity = '1';
        }, 5);
        popup.style.display = 'block';
    }
    getHtmlBtn.addEventListener('click', showPopup, false);
    close.addEventListener('click', hidePopup, false);
    exitBtn.addEventListener('click', hidePopup, false);

    //  resulting table in textarea

    var result = document.querySelector('#js-result');
    var copyBtn = document.querySelector('.btn-copy');
    copyBtn.addEventListener('click', function () {
        if (document.queryCommandSupported('copy')) {
            var text = result.select();
            document.execCommand('copy');
        }
    }, false);
};
