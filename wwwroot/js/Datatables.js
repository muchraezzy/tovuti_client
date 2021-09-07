var editor;
var editor1;
var editor2;
var data;

$(document).ready(function () {
    
    LoadDataGrids();
});

function LoadDataGrids() {
    ProductsTable();
    CategoryTable();
    AttributesTable();
    //ProductsTable();----initializeGrids();
}

function initializeGrids() {

    editor = new $.fn.dataTable.Editor({
        "ajax": "GetProducts",
        "table": "#products",
        /* "idSrc": "id",*/
        "fields": [{
            "label": "Category Name:",
            "name": "cname"
        }, {
            "label": "Product Name:",
            "name": "pname"
        }, {
            "label": "Has Attributes:",
            "name": "has_attr",
            "type": "boolean"
        }, {
            "label": "Created By:",
            "name": "created_by"
        },
        {
            "label": "Modified By:",
            "name": "modified_by"
        },
        {
            "label": "cid:",
            "name": "cid",
            "type": "number"
        },
        {
            "label": "pid:",
            "name": "pid",
            "type": "number"
        },
        {
            "label": "attr_id:",
            "name": "attr_id",
            "type": "number"
        },
        {
            "label": "uid:",
            "name": "uid",
            "type": "number"
        },
        {
            "label": "color:",
            "name": "color"
        },
        {
            "label": "price:",
            "name": "number"
        },
        {
            "label": "size:",
            "name": "size"
        }
            ,
        {
            "label": "Edit:"
        }
            , {
            "label": "Delete:"
        }
        ]
    });


    editor1 = new $.fn.dataTable.Editor({
        "ajax": "GetCategories",
        "table": "#category",
        "fields": [{
            "label": "Category Name:",
            "name": "cname"
        }, {
            "label": "cid:",
            "name": "cid",
            "type": "number"
            },
        {
            "label": "Created By:",
            "name": "created_by"
        },
        {
            "label": "Modified By:",
            "name": "modified_by"
        },
        {
            "label": "Edit:"
        },
        {
            "label": "Delete:"
        }
        ]
    });

    editor2 = new $.fn.dataTable.Editor({
        "ajax": "GetProdAttr",
        "table": "#attribute",
        /* "idSrc": "id",*/
        "fields": [
            {
                "label": "pid:",
                "name": "pid",
                "type": "number"
            },
            {
                "label": "attr_id:",
                "name": "attr_id",
                "type": "number"
            },
            {
                "label": "Product Name:",
                "name": "pname"
            },
            {
                "label": "Color:",
                "name": "color"
            },
            {
                "label": "Size:",
                "name": "size"
            },
            {
                "label": "Price:",
                "name": "price",
                "type":"number"
            },
            {
            "label": "Created By:",
            "name": "created_by"
        },
        {
            "label": "Modified By:",
            "name": "modified_by"
        },
        {
            "label": "Edit:"
            },
            {
            "label": "Delete:"
        }
        ]
    });
}


function EditAttrData(pid, attr_id, pname, color, price, size)
{
    clearAddAttr();
    var drpprods = document.getElementById("drpprods");
    drpprods.value = pid;
    drpprods.disabled = true;

    var attrid = document.getElementById("attridd");
    attrid.value = attr_id;

    //var attrid = document.getElementById("attridd");
    //attrid.value = attr_id;

    //var attrname = document.getElementById("attrname");
    //attrname.value = "";

    var drpcolorM = document.getElementById("drpcolorM");
    drpcolorM.value = null ?? color;

    var drpsizeM = document.getElementById("drpsizeM");
    drpsizeM.value =null ?? size;

    var drpgenderM = document.getElementById("drpgenderM");
    drpgenderM.value = "M";

    var txtpriceM = document.getElementById("priceM");
    txtpriceM.value = price;

    var x = document.getElementById("lblAddAttr");
    var y = document.getElementById("lblEditAttr");
    y.style.display = "block";
    x.style.display = "none";
    $("#AddAttr").modal('show');
}

function EditCatData(cid, cname, created_by, modified_by)
{
    clearAddCat();
    var catname = document.getElementById("catname");
    catname.value = cname;

    var cid = document.getElementById("catid");
    cid.value = cid;

    var x = document.getElementById("lblAddCat");
    var y = document.getElementById("lblEditCat");
    var z = document.getElementById("prodAddDiv");
    y.style.display = "block";
    x.style.display = "none";
    z.style.display = "none";
    $("#AddCat").modal('show');
}

function EditProdData(pid,cid ,attr_id,pname ,cname ,has_attr,color,price ,size, atrr_id )
{
    clearAddProds();
    var category = document.getElementById("drpcategories");
    category.value = cid;
    category.disabled = true;
    //console.log("||||||||||||||||||||||=========XXXXXXX=======XXXXXXX=========XXXXXX||||||||||||||||||||||||||", pid, cid, attr_id, pname, cname, has_attr, color, price, size);

    var prodname = document.getElementById("prodname");
    prodname.value = pname;

    var pidtxt = document.getElementById("prodid");
    pidtxt.value = pid;

    var HasAttr = document.getElementById("hasAttr");
    HasAttr.checked = has_attr;
    HasAttr.value = has_attr;

    if (HasAttr.checked) {
        var y = document.getElementById("AttrOptions");
        y.style.display = "block";

    var drpcolor = document.getElementById("drpcolor");
        drpcolor.value = null ?? color;

    var drpsize = document.getElementById("drpsize");
    drpsize.value = null ?? size;

        var atrrid = document.getElementById("atrriddd");
        atrrid.value = atrr_id;
    //var drpgender = document.getElementById("drpgender");
    //    drpgender.value = prodData.gender;

    var txtprice = document.getElementById("price");
    txtprice.value = price;

    } else
    {
        var y = document.getElementById("AttrOptions");
        y.style.display = "none";
    }

    var x = document.getElementById("lblAddProd");
    var y = document.getElementById("lblEditProd");
    var save = document.getElementById("btnSaveProd");
    var edit = document.getElementById("btnEditSaveProd");
    save.style.display = "none";
    edit.style.display = "block";
    y.style.display = "block";
    x.style.display = "none";
    $("#AddProds").modal('show');
}

function DeleteData(table, pid, cid, attr_id) {

    if (table === 1)
    {
        if (confirm("Are you sure you want to delete ...?")) {
            DeleteProd(pid, cid, attr_id);
        }
        else {
            return false;
        }
    }
   
}


function DeleteProd(pid, cid, attr_id) {
    var url = "/Products/DeleteProduct?pid=" + pid + "&cid=" + cid + "&attr_id=" + attr_id+"";

    $.post(url, function (data) {
        if (data) {
            oTable = $('#products').DataTable();
            oTable.draw();
        }
        else {
            alert("Something Went Wrong!");
        }
    });
}

function ProductsTable() {
    $("#products").dataTable({
        processing: true, // for show progress bar  
        serverSide: true, // for process server side  
        filter: true, // this is for disable filter (search box)  
        orderMulti: false,
        select: true,
        dom: "Bfrtip",
        info: true,
        ajax: {
            url: "GetProducts",
            type: "POST",
            datatype: "json",
            dataSrc: function (data) {
                localStorage.setItem('products', JSON.stringify(data));
                var select = document.getElementById('drpprods');

                for (index in data) {
                    console.log("iiiiiiiiiiiii!!!!!!!!!!!!!!!!!iiiiiiiiiiiiiii", index, data[index], data[index].cid, data[index].cname);
                    select.options[select.options.length] = new Option(data[index].pname, data[index].pid);
                }
                return data;
            },
            //success: function () {
            //    localstorage.setitem('products', json.stringify(data));
            //},
            //error: function () {
            //    //your code here
            //}
        },
        columns: [
            //{
            //    "className": 'details-control',
            //    "orderable": false,
            //    "data": null,
            //    "defaultContent": ""
            //},
            { "data": "cname", "name": "Category Name", "defaultContent": "", "autoWidth": true },
            { "data": "pname", "name": "Product Name", "defaultContent": "", "autoWidth": true },
            { "data": "has_attr", "name": "Has Attributes", "defaultContent": "", "autoWidth": true },
            { "data": "created_by", "name": "Created By", "defaultContent": "", "autoWidth": true },
            { "data": "modified_by", "name": "Modified By", "defaultContent": "", "autoWidth": true },
            { "data": "cid", "name": "cid", "defaultContent": "", "autoWidth": true },
            { "data": "pid", "name": "pid", "defaultContent": "", "autoWidth": true },
            { "data": "attr_id", "name": "attr_id", "defaultContent": "", "autoWidth": true },
            { "data": "uid", "name": "uid", "defaultContent": "", "autoWidth": true },
            { "data": "color", "name": "Color", "defaultContent": "", "autoWidth": true },
            { "data": "price", "name": "Price", "defaultContent": "", "autoWidth": true },
            { "data": "size", "name": "Size", "defaultContent": "", "autoWidth": true },
            {
                "name": "Edit",
                "data":null,
                "render": function (data, type, full, meta) {
                   /* console.log("EEEEDDDDIIIITTTTTTTT----data===",data,"--------type_______:",type,"=========Full----",full,"-------_______meta:----",meta,"-----tteeesssttttXXXXXX+++====="+full.pid);*/
                    return '<a class="btn btn-outline-dark" onclick=EditProdData("' + full.pid + '","' + full.cid + '","' + full.attr_id + '","' + full.pname + '","' + full.cname + '","'
                        + full.has_attr + '","' + full.color + '","' + full.price + '","' + full.size + '","' + full.attr_id + '"); ><i class="fa fa-pencil" aria-hidden="true"></i></a>';
                }
            },
            {
                "name": "Delete",
                "data": null,
                data: null, render: function (data, type, row, full) {
                    /*console.log("DDDEEEEELLLEEEETTTEEEEE----data===", data, "--------type_______:", type, "=========Full----", full, "-------_______meta:----", meta);*/
                    return '<a href="#" class="btn btn-outline-danger" onclick=DeleteData( 1,"' + full.pid + '","'+full.cid+'","'+full.attr_id +'"); > <i class="fa fa-trash" aria-hidden="true"></i>  </a>';
                }
            }

        ],
        columnDefs:
            [
                {
                    "targets": [5, 6, 7, 8, 9, 10, 11],
                    "visible": false,
                    "searchable": false
                },
                {
                    "render": function (data, type, row) {
                        console.log("HasAttrCheck",data);
                        if (data == "true") {
                            return "<input type='checkbox' checked='true' disabled /><input type='hidden' value='" + data + "' />";
                        }
                        else { return "<input type='checkbox' checked='false' disabled /><input type='hidden' value='" + data + "' />"; }
                    },
                    "targets": [2],
                    "type": Boolean
                },
                {
                    "targets": [5, 6, 7, 8, 10],
                    "type": Number
                }
            ],
        language: {
            "emptyTable": "There are no products found.",
            "zeroRecords": "There were no matching products found."
        },
        draw: "draw",
        recordsTotal: "recordsTotal",
        recordsFiltered: "recordsFiltered"
    });

    //datatablevar.fnClearTable();
    
            //datatablevar.fnAddData(data);
        }


function CategoryTable() {
    $("#category").dataTable({
        processing: true, // for show progress bar  
        serverSide: true, // for process server side  
        filter: true, // this is for disable filter (search box)  
        orderMulti: false,
        select: true,
        dom: "Bfrtip",
        info: true,
        ajax: {
            url: "GetCategories",
            type: "POST",
            datatype: "json",
            dataSrc: function (data) {
                localStorage.setItem('category', JSON.stringify(data));
                var select = document.getElementById('drpcategories');

                for (index in data) {
                    console.log("iiiiiiiiiiiii!!!!!!!!!!!!!!!!!iiiiiiiiiiiiiii", index, data[index], data[index].cid, data[index].cname);
                    select.options[select.options.length] = new Option(data[index].cname, data[index].cid);
                }

                return data;
            },
            //success: function (data) {
            //    console.log("_______------______-------______-------_______------",data);
            //    localStorage.setItem('category', JSON.stringify(data));

            //    var select = document.getElementById('drpcategories');

            //    //for (index in data) {
            //    //    console.log("iiiiiiiiiiiii!!!!!!!!!!!!!!!!!iiiiiiiiiiiiiii", index, data[index], index.cid, index.cname);
            //    //    select.options[select.options.length] = new Option(index.cid, index.cname);
            //    //}
            //},
            //error: function () {
            //    //your code here
            //}
        },
        columns: [
            { "data": "cname", "name": "Category Name", "defaultContent": "", "autoWidth": true },
            { "data": "cid", "name": "cid", "defaultContent": "", "autoWidth": true },
            { "data": "created_by", "name": "Created By", "defaultContent": "", "autoWidth": true },
            { "data": "modified_by", "name": "Modified By", "defaultContent": "", "autoWidth": true },
            {
                "name": "Edit",
                "data": null,
                "render": function (data, type, full, meta) {
                    return '<a class="btn btn-outline-dark" onclick=EditCatData("' + full.cid + '","' + full.cname + '","'
                        + full.created_by + '","' + full.modified_by + '"); ><i class="fa fa-pencil" aria-hidden="true"></i></a>';
                }
            },
            {
                "name": "Delete",
                "data": null,
                data: null, render: function (data, type, row, full) {
                    return '<a href="#" class="btn btn-outline-danger" onclick=DeleteData(2, null,"' + full.cid + '",null); > <i class="fa fa-trash" aria-hidden="true"></i>  </a>';
                }
            }

        ],
        columnDefs:
            [
                {
                    "targets": [1],
                    "visible": false,
                    "searchable": false
                },
                {
                    "targets": [0, 2, 3],
                    "type": "Text"
                }

            ],
        language: {
            "emptyTable": "There are no categories found.",
            "zeroRecords": "There were no matching categories found."
        },
        //"footerCallback": function (row, data, start, end, display) {
        //    var api = this.api(), data;
        //    // Remove the formatting to get integer data for summation 
        //    var intVal = function (i) { return typeof i === 'string' ? i.replace(/[\$,]/g, '') * 1 : typeof i === 'number' ? i : 0; };
        //    // Total over all pages
        //    data = api.column(4).data();
        //    total = data.length ? data.reduce(function (a, b) { return intVal(a) + intVal(b); }) : 0;
        //    // Total over this page
        //    data = api.column(4, { page: 'current' }).data();
        //    pageTotal = data.length ? data.reduce(function (a, b) { return intVal(a) + intVal(b); }) : 0;
        //    // Update footer
        //    $(api.column(4).footer()).html('$' + pageTotal + ' ( $' + total + ' total)');
        //}

        });
}

function AttributesTable() {

    //var editor = new $.fn.DataTable.Editor({
    //    "table": "#attribute",
    //    "idSrc": "id",
    //});
    $("#attribute").dataTable({
        processing: true, // for show progress bar  
        serverSide: true, // for process server side  
        filter: true, // this is for disable filter (search box)  
        orderMulti: false,
        select: true,
        dom: "Bfrtip",
        info: true,
        ajax: {
            url: "GetProdAttr",
            type: "POST",
            datatype: "json",
            dataSrc: "",
            //success: function () {
            //    localStorage.setItem('attribute', JSON.stringify(data));
            //},
            //error: function () {
            //    //your code here
            //}
        },
        columns: [
            { "data": "pid", "name": "pid", "defaultContent": "", "autoWidth": true },
            { "data": "attr_id", "name": "attr_id", "defaultContent": "", "autoWidth": true },
            { "data": "pname", "name": "Product Name", "defaultContent": "", "autoWidth": true },
            { "data": "color", "name": "Color", "defaultContent": "", "autoWidth": true },
            { "data": "price", "name": "Price", "defaultContent": "", "autoWidth": true },
            { "data": "size", "name": "Size", "defaultContent": "", "autoWidth": true },
            { "data": "gender", "name": "Gender", "defaultContent": "", "autoWidth": true },
            { "data": "created_by", "name": "Created By", "defaultContent": "", "autoWidth": true },
            { "data": "modified_by", "name": "Modified By", "defaultContent": "", "autoWidth": true },
            {
                "name": "Edit",
                "data": null,
                "render": function (data, type, full, meta) {
                    return '<a class="btn btn-outline-dark" onclick=EditAttrData("' + full.pid + '","' + full.attr_id + '","' + full.pname +
                        '","' + full.color + '","' + full.price + '","' + full.size + '"); ><i class="fa fa-pencil" aria-hidden="true"></i></a>';
                }
            },
            {
                "name": "Delete",
                "data":null,
                data: null, render: function (data, type, row, full) {
                    return '<a href="#" class="btn btn-outline-danger" onclick=DeleteData( 3,"' + full.pid + '",null,"' + full.attr_id +'"); > <i class="fa fa-trash" aria-hidden="true"></i>  </a>';
                }
            }

        ],
        columnDefs:
            [
                {
                    "targets": [0, 1],
                    "visible": false,
                    "searchable": false
                }
            ],
        language: {
            "emptyTable": "There are no attributes found.",
            "zeroRecords": "There were no matching attributes found."
        },
        draw: "draw",
        recordsTotal: "recordsTotal",
        recordsFiltered: "recordsFiltered"
    });

}