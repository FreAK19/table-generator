// data of creation 30.07.2017
//Create by Andrew
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
            cap.innerHTML = 'Table header';
            table.appendChild(cap);
        }
        return table;
    }

    function createFullTable(options) {
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


    var buildTable = function (event) {
        event.preventDefault();
        var options = getValue();
        var table = createFullTable(options);
        table.className = 'table';
        table.setAttribute('contenteditable', 'true');
        app.appendChild(table);
        setStorage(options);
    }

    var createBtn = document.getElementById('creation');
    createBtn.addEventListener('click', buildTable, false);

    var form = document.forms[0];
    form.addEventListener('change', function (event) {

    }, false)

    //  localStorage for save option in session (if user by accident close tab or browser), or for more user experience.
    function setStorage(opt) {
        var storage = JSON.stringify(opt);
        localStorage.setItem('options', storage);
    }
};
