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

    //  create table function

    function createTable(rows, cells, caption) {
        var table = document.createElement('table');
        if (caption) {
            var cap = document.createElement('caption');
            cap.innerHTML = 'Table header';
            table.appendChild(cap);
        }
        for (let i = 0; i < rows; i += 1) {
            var row = document.createElement('tr');
            for (let i = 0; i < cells; i += 1) {
                var data = document.createElement('td');
                row.appendChild(data);
            }
            table.appendChild(row);
        }
        return table;
    }

    var app = document.getElementById('app');


    var buildTable = function (event) {
        event.preventDefault();
        var options = getValue();
        var table = createTable(options.rows, options.cells, options.isCaption);
        table.className = 'table';
        table.setAttribute('contenteditable', 'true');
        app.appendChild(table);
    }

    var createBtn = document.getElementById('creation');
    createBtn.addEventListener('click', buildTable, false);

    var form = document.forms[0];
    form.addEventListener('change', function(event){

    }, false)
};
