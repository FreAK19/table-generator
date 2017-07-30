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

    //  create table

    function createTable(rows, cells) {
        var table = document.createElement('table');
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

    var createBtn = document.getElementById('creation');
    createBtn.addEventListener('click', function (event) {
        event.preventDefault();
        var oprions = getValue();
        var table = createTable(oprions.rows, oprions.cells);
        app.appendChild(table);
    });
}
