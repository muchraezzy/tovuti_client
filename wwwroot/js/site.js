// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your Javascript code.
$("data").click(function () {
    $("a").toggleClass("nav-link text-dark fill-div active");
});



$('#products tbody').on('click', 'tr', function () {
    $(this).toggleClass('selected');
});

$('#products tbody').on('click', 'td.details-control', function () {
    var tr = $(this).closest('tr');
    var row = table.row(tr);

    if (row.child.isShown()) {
        // This row is already open - close it
        row.child.hide();
        tr.removeClass('shown');
    }
    else {
       // loadAjaxInfo(row.data(), function (formattedContent) {
            // Open this row
            row.child(formattedContent).show();
            tr.addClass('shown');
       // });
    }
});

function loadAjaxInfo(data, callback) {
    $.ajax({
        
        data: {/*Put your request needle here*/ },
        
        success: function (response) {
            callback(format(response));
        }
    });
}


function format(d) {
    // `d` is the original data object for the row
    return '<table>' +
        '<tr>' +
        '<td>Color:</td>' +
        '<td>' + d.color + '</td>' +
        '</tr>' +
        '<tr>' +
        '<td>Size:</td>' +
        '<td>' + d.size + '</td>' +
        '</tr>' +
        '<tr>' +
        '<td>Gender:</td>' +
        '<td>' + d.gender + '</td>' +
        '</tr>' +
        '<tr>' +
        '<td>Price:</td>' +
        '<td>' + d.price + '</td>' +
        '</tr>' +
        '</table>';
}


/*var tblCats = $('#category').dataTable();*/

$('#category tbody').on('click', 'tr', function () {
    $(this).toggleClass('selected');
});

/*var tblAttrs = $('#attribute').dataTable();*/

$('#attribute tbody').on('click', 'tr', function () {
    $(this).toggleClass('selected');
});



var btnContainer = document.getElementById("cell1");

// Get all buttons with class="btn" inside the container
var btns = btnContainer.getElementsByClassName("fill-div");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}

$("#prodAdd").click(function () {
    var x = document.getElementById("lblAddProd");
    var y = document.getElementById("lblEditProd");
    var z = document.getElementById("drpcategories");
    var save = document.getElementById("btnSaveProd");
    var edit = document.getElementById("btnEditSaveProd");
    save.style.display = "block";
    edit.style.display = "none";
    z.disabled = false;
    x.style.display = "block";
    y.style.display = "none";
    clearAddProds();
    $("#AddProds").modal('show');
});

$("#btnHideprodModal").click(function () {
    $("#btnHideprodModal").on('click', event => {
        event.preventDefault();
    });
    $("#AddProds").modal('hide');
});

$("#catAdd").click(function () {
    clearAddCat();
    var x = document.getElementById("lblAddCat");
    var y = document.getElementById("lblEditCat");
    var z = document.getElementById("prodAddDiv");
    y.style.display = "none";
    x.style.display = "block";
    z.style.display = "block";
    $("#AddCat").modal('show');
});

$("#btnHidecatModal").click(function () {
    $("#btnHidecatModal").on('click', event => {
        event.preventDefault();
    });

    $("#AddCat").modal('hide');
});

$("#attrAdd").click(function () {
    clearAddAttr();
    var x = document.getElementById("lblAddAttr");
    var y = document.getElementById("lblEditAttr");
    var drpprods = document.getElementById("drpprods");
    drpprods.disabled = false;
    y.style.display = "none";
    x.style.display = "block";
    $("#AddAttr").modal('show');
});

$("#btnHideattrModal").click(function () {
    $("#btnHideattrModal").on('click', event => {
        event.preventDefault();
    });
    $("#AddAttr").modal('hide');
});


//$('.modal').on('shown.bs.modal', function (e) {
//    $('.modal.backdrop').each(function (index) {
//        $(this).css('z-index', 1101 + index * 2);
//    });
//    $('.modal-show').each(function (index) {
//        $(this).css('z-index', 1101 + index * 2 - 1);
//    });
//});

function clearAddAttr() {
    var drpprods = document.getElementById("drpprods");
    drpprods.value = "";

    //var atrridd = document.getElementById("atrridd");
    //atrridd.value = 0;


    //var attrname = document.getElementById("attrname");
    //attrname.value = "";

    var drpcolorM = document.getElementById("drpcolorM");
    drpcolorM.value = "";

    var drpsizeM = document.getElementById("drpsizeM");
    drpsizeM.value = "";

    var drpgenderM = document.getElementById("drpgenderM");
    drpgenderM.value = "M";

    var txtpriceM = document.getElementById("priceM");
    txtpriceM.value = "0.00";
}

function clearAddCat() {
    var catname = document.getElementById("catname");
    catname.value = "";

    var catid = document.getElementById("catid");
    catid.value = "";
}

function clearAddProds() {
    var prodname = document.getElementById("prodname");
    prodname.value = "";

    var prodid = document.getElementById("prodid");
    prodid.value = "";

    var category = document.getElementById("drpcategories");
    category.value = "";

    var HasAttr = document.getElementById("hasAttr");
    HasAttr.checked = false;

    var drpcolor = document.getElementById("drpcolor");
    drpcolor.value = "";

    var drpsize = document.getElementById("drpsize");
    drpsize.value = "";

    var drpgender = document.getElementById("drpgender");
    drpgender.value = "M";

    var txtprice = document.getElementById("price");
    txtprice.value = "0.00";
}

function fetchprodsModal(x) {
    x.preventDefault();
    $("#AddCat").modal('hide');

    $('#AddCat').on('hide.bs.modal', function (e) {
        var y = document.getElementById("hasAttr");
        y.checked == false;
        $("#AddProds").modal('show');//prodback
        var x = document.getElementById("prodback");
        x.style.display = "block";
        //e.preventDefault();
    })
}

function returntoCat(x) {
    x.preventDefault();
    $("#AddProds").modal('hide');

    $('#AddProds').on('hide.bs.modal', function (e) {
        $("#AddCat").modal('show');//prodback
       // e.preventDefault();
    })
}

function toggleAttr() {
    var x = document.getElementById("hasAttr");
    var y = document.getElementById("AttrOptions");
    if (x.checked)
    {
        y.style.display = "block";
    } else
    {
        y.style.display = "none";
    }
}


function myFunction(ed) {
    var x = document.getElementById("prods");
    var y = document.getElementById("cat");
    var z = document.getElementById("attr");

    if (ed === 1) {
        x.style.display = "block";
        y.style.display = "none";
        z.style.display = "none";
    } else
        if (ed === 2) {
            x.style.display = "none";
            y.style.display = "block";
            z.style.display = "none";
        } else
            if (ed === 3) {
                x.style.display = "none";
                y.style.display = "none";
                z.style.display = "block";

            }
}

function show_alert_from_js(alert_type, text) {
    msg = `  <div class="toast" data-autohide="false">
    <div class="toast-header">
      <strong class="mr-auto text-primary">Toast Header</strong>
      <small class="text-muted">5 mins ago</small>
      <button type="button" class="ml-2 mb-1 close" data-dismiss="toast">&times;</button>
    </div>
    <div class="toast-body">
      Some text inside the toast body
    </div>
  </div>
</div>${text}`;  // to render the text message to show.
    msg_html = $.parseHTML(msg);
    $('.message-container').append(msg_html);
}

function SaveAttribute() {
    var pid = document.getElementById("drpprods").value;
    var color = document.getElementById("drpcolorM").value;
    var size = document.getElementById("drpsizeM").value;
    var gender = document.getElementById("drpgenderM").value;
    var price2 = document.getElementById("priceM").value;

    var activeLbl = document.getElementById("lblAddAttr");

    if (activeLbl.style.display == "block")
    {
        var action = "Save";
    } else {
        var action = "Edit";
        pid = document.getElementById("attridd").value;
    }
    
    createdby = 1;

    $.ajax({
        type: "POST",
        url: "/Products/SaveAttribute?pid=" + pid + "&createdby=" + createdby + "&color=" + color + "&size=" + size + "&gender=" + gender + "&price=" + price2 + "&paction=" + action,
        data: {
            pid: pid,
            createdby: createdby,
            color: color,
            size: size,
            gender: gender,
            action: action
        }, // passing the parameter
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (retValue) {
            // Do something with the return value from.Net method
            $("#AddAttr").modal('hide');
            show_alert_from_js("success", "Attribute has been succesfully saved");

        }
    });

}

function SaveCategory() {
    var cname = document.getElementById("catname").value;
    var cidd = document.getElementById("catid");
    var cddd = cidd.value;
    createdby = 1;

    var activeLbl = document.getElementById("lblAddCat");

    if (activeLbl.style.display == "block") {
        var action = "Save";
    } else {
        var action = "Edit";
        
    }

    $.ajax({
        type: "POST",
        url: "/Products/SaveCategory?cname=" + cname + "&createdby=" + createdby + "&cid=" + cddd +"&paction="+action,
        data: {
            cname: cname,
            createdby: createdby
        }, // passing the parameter
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (retValue) {
            // Do something with the return value from.Net method
            /* show_alert_from_js("error", "You cannot create a hub with same hub name")*/
           
        }
    });

}


function SaveProduct() {
    var pname = document.getElementById("prodname").value;
    var createdby = document.getElementById("useridHolder").value;
    var hasattr = document.getElementById("hasAttr").value;
    var cid = document.getElementById("drpcategories").value;

    createdby = "admin";

    $.ajax({
        type: "POST",
        url: "/Products/SaveProduct?pname="+pname+"&createdby="+createdby+"&hasattr="+hasattr+"&cid="+cid,
        data: {
            pname: pname,
            createdby: createdby,
            hasattr: hasattr,
            cid: cid
        }, // passing the parameter
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (retValue) {
            // Do something with the return value from.Net method
        }
    });


}

function EditProduct() {
    /*var prodTable = $("#products").dataTable().rows({ selected: true }).data();*/
    var table = $('#products').DataTable();

    var data = table.rows({ selected: true }).data();

    console.log("(o)(o)(o)(o)(0)(0)(0)(0)(o)(o)(o)(o)(0)(0)(0)(0)__________-----------------__________-----------___________(o)(o)(o)(o)(0)(0)(0)(0)",data);

    if (data === null) {
        alert("No product has been selected. Please click on the row you want to edit");
       // return;
    } else {
        console.log("(o)(o)(o)(o)(0)(0)(0)(0)(o)(o)(o)(o)(0)(0)(0)(0)", data.length,"XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",data[0]);

        clearAddProds();
        var category = document.getElementById("drpcategories");
        category.value = data[0].cid;
        category.disabled = true;

        var prodname = document.getElementById("prodname");
        prodname.value = data[0].pname;

        var pidtxt = document.getElementById("prodid");
        pidtxt.value = data[0].pid;


        var HasAttr = document.getElementById("hasAttr");
        HasAttr.checked = data[0].has_attr;
        HasAttr.value = data[0].has_attr;

        if (HasAttr.checked) {
            var y = document.getElementById("AttrOptions");
            y.style.display = "block";

            var attrid = document.getElementById("atrriddd");
            attrid.value = null ?? data[0].attr_id;

            var drpcolor = document.getElementById("drpcolor");
            drpcolor.value = null ?? data[0].color;

            var drpsize = document.getElementById("drpsize");
            drpsize.value = null ?? data[0].size;

            //var drpgender = document.getElementById("drpgender");
            //    drpgender.value = prodData.gender;

            var txtprice = document.getElementById("price");
            txtprice.value = data[0].price;

        } else {
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
        //var newarray = [];
        //for (var i = 0; i < data.length; i++) {
        //    alert("Name: " + data[i][0] + " Address: " + data[i][1] + " Office: " + data[i][2]);
        //    newarray.push(data[i][0]);
        //    newarray.push(data[i][1]);
        //}

        //var sData = newarray.join();
    }

}

function EditSaveProduct() {
    var pname = document.getElementById("prodname").value;
    var createdby = document.getElementById("useridHolder").value;
    var hasattr = document.getElementById("hasAttr").value;
    var cid = document.getElementById("drpcategories").value;
    var pid = document.getElementById("prodid").value;
    var attrid = document.getElementById("atrriddd").value;
    var action = "Edit";
    createdby = "admin";
    createdby1 = 1;
    if (hasattr)
    {
        var color = document.getElementById("drpcolor").value;
        var size = document.getElementById("drpsize").value;
        var gender = document.getElementById("drpgender").value;
        var price1 = document.getElementById("price").value;
        $.ajax({
            type: "POST",
            url: "/Products/SaveAttribute?pid=" + attrid + "&createdby=" + createdby1 + "&color=" + color + "&size=" + size + "&gender=" + gender + "&price=" + price1 + "&paction=" + action,
            data: {
                pid: pid,
                createdby: createdby,
                color: color,
                size: size,
                gender: gender,
                action: action
            }, // passing the parameter
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (retValue) {
                // Do something with the return value from.Net method
            }
        });

    }

    $.ajax({
        type: "POST",
        url: "/Products/UpdateProduct?pname=" + pname + "&createdby=" + createdby1 + "&hasattr=" + hasattr + "&cid=" + cid +"&pid="+ pid,
        data: {
            pname: pname,
            createdby: createdby,
            hasattr: hasattr,
            cid: cid
        }, // passing the parameter
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (retValue) {
            // Do something with the return value from.Net method
        }
    });


}


function EditCategory() {
    /*var prodTable = $("#products").dataTable().rows({ selected: true }).data();*/
    var table = $('#category').DataTable();

    var data = table.rows({ selected: true }).data();

    console.log("(o)(o)(o)(o)(0)(0)(0)(0)(o)(o)(o)(o)(0)(0)(0)(0)__________-----------------__________-----------___________(o)(o)(o)(o)(0)(0)(0)(0)", data);

    if (data == null) {
        alert("No category has been selected. Please click on the row you want to edit");
        // return;
    } else {
        console.log("(o)(o)(o)(o)(0)(0)(0)(0)(o)(o)(o)(o)(0)(0)(0)(0)", data.length, "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX", data[0]);

        clearAddCat();
        var catname = document.getElementById("catname");
        catname.value = data[0].cname;

        var cidt = document.getElementById("catid");
        cidt.value = data[0].cid;

        var x = document.getElementById("lblAddCat");
        var y = document.getElementById("lblEditCat");
        var z = document.getElementById("prodAddDiv");
        y.style.display = "block";
        x.style.display = "none";
        z.style.display = "none";
        $("#AddCat").modal('show');
        //var newarray = [];
        //for (var i = 0; i < data.length; i++) {
        //    alert("Name: " + data[i][0] + " Address: " + data[i][1] + " Office: " + data[i][2]);
        //    newarray.push(data[i][0]);
        //    newarray.push(data[i][1]);
        //}

        //var sData = newarray.join();
    }

}

function EditAttr() {
    /*var prodTable = $("#products").dataTable().rows({ selected: true }).data();*/
    var table = $('#attribute').DataTable();

    var data = table.rows({ selected: true }).data();

    console.log("(o)(o)(o)(o)(0)(0)(0)(0)(o)(o)(o)(o)(0)(0)(0)(0)__________-----------------__________-----------___________(o)(o)(o)(o)(0)(0)(0)(0)", data);

    if (data == null) {
        alert("No attribute has been selected. Please click on the row you want to edit");
        // return;
    } else {
        console.log("(o)(o)(o)(o)(0)(0)(0)(0)(o)(o)(o)(o)(0)(0)(0)(0)", data.length, "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX", data[0]);

        clearAddAttr();
        var drpprods = document.getElementById("drpprods");
        drpprods.value = data[0].pid;
        drpprods.disabled=true;
        //var attrname = document.getElementById("attrname");
        //attrname.value = "";
        var attrid = document.getElementById("attridd");
        attrid.value = data[0].attr_id;

        var drpcolorM = document.getElementById("drpcolorM");
        drpcolorM.value = null ?? data[0].color;

        var drpsizeM = document.getElementById("drpsizeM");
        drpsizeM.value = null ?? data[0].size;

        var drpgenderM = document.getElementById("drpgenderM");
        drpgenderM.value = "M";

        var txtpriceM = document.getElementById("priceM");
        txtpriceM.value = data[0].price;

        var x = document.getElementById("lblAddAttr");
        var y = document.getElementById("lblEditAttr");
        y.style.display = "block";
        x.style.display = "none";
        $("#AddAttr").modal('show');
        //var newarray = [];
        //for (var i = 0; i < data.length; i++) {
        //    alert("Name: " + data[i][0] + " Address: " + data[i][1] + " Office: " + data[i][2]);
        //    newarray.push(data[i][0]);
        //    newarray.push(data[i][1]);
        //}

        //var sData = newarray.join();
    }

}
//$('#myDiv').click(function () {
//    $(this).toggleClass('active');
//});