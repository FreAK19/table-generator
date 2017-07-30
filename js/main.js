// data of creation 30.07.2017
//Create by Andrew
/*********************/


window.onload = function () {
    //  take values from #option field
    function getValue() {
        var row = document.getElementById('table_row').value || 2;
        var cell = document.getElementById('table_cell').value || 2;
        var isCaption = document.getElementById('caption').checked;
        var isNumVertical = document.getElementById('numvert').checked;
        var isNumHorizontal = document.getElementById('numhorz').checked;
        return {
            row: row,
            cell: cell,
            isCaption: isCaption,
            isNumVertical: isNumVertical,
            isNumHorizontal: isNumHorizontal,
        }
    }
    var createBtn = document.getElementById('creation');
    createBtn.addEventListener('click', function (event) {
        event.preventDefault();
        console.log(getValue().cell)
    })
}

