
function addtab(r,c) {
    for (i = 0; i < r; i++) {
        var tr = oTable.insertRow();
        for (j = 0; j < c; j++) {
            var td = tr.insertCell();
            td.HTML = "第" + (i + 1) + "行，第" + (j + 1) + "列";
        }
    }
    return oTable;
}