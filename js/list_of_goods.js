//
//$(function()
//{
//    $(".nav").html("<ul class=\"nav_back_page\"><li><a href=\"index.html\">Let's Go!</a></li> <li><a href=\"index.html\">主页</a></li> <li><a href=\"list_of_goods.html\">商品列表</a></li> <li><a href=\"shopping_list.html\"> <span class=\"cartImg\"><img src=\"../img/shopping71.png\" ></span> <span id=\"shoppingCartNumShow\"></span>购物车（）</a></li> </ul> ");
//    var table_html = "<table border='1'><tr><th>分类</th><th>名称</th><th>单价(元)</th><th>单位</th><th></th></tr>";
//    for(var i = 0; i < item.length; i ++ )
//    {
//        table_html += "<tr class='tr1'><td>"+item[i].itemize+"</td><td>"+item[i].name+"</td><td>"+item[i].unit+"</td><td>"+item[i].price +"</td><td><button  onclick='jump_page()'>加入购物车</button></td></tr>";
//    }
//    $("#table").html(table_html+"</table>");
//});
function loadAllItems() {
    return [
        {
            classify:'饮料',
            barcode: 'ITEM000000',
            name: '可口可乐',
            unit: '瓶',
            price: 3.00
        },
        {
            classify:'饮料',
            barcode: 'ITEM000001',
            name: '雪碧',
            unit: '瓶',
            price: 3.00
        },
        {
            classify:'水果',
            barcode: 'ITEM000002',
            name: '苹果',
            unit: '斤',
            price: 5.50
        },
        {
            classify:'水果',
            barcode: 'ITEM000003',
            name: '荔枝',
            unit: '斤',
            price: 15.00
        },
        {
            classify:'生活用品',
            barcode: 'ITEM000004',
            name: '电池',
            unit: '个',
            price: 2.00
        },
        {
            classify:'食品',
            barcode: 'ITEM000005',
            name: '方便面',
            unit: '袋',
            price: 4.50
        }
    ];
}
localStorage.setItem('allItems', JSON.stringify(loadAllItems()));
var store_list = JSON.parse(localStorage.getItem('allItems'));
function show_store_list(){
    var html = '';
    html = html +'<tr class="list_header"><td id="h1">分类</td><td id="h2">名称</td><td id="h3">单价(元)</td><td id="h4">单位</td><td id="h5"></td>';
    for(var i in store_list){
        var btn_id = i.toString();
        var items = store_list[i];
        html = html +'<tr>';
        html = html + '<td>'+items.classify+'</td><td>'+items.name+'</td><td>'+items.price+'</td><td>'+items.unit+'</td><td>'+'<button id='+btn_id+' type="button" style="color:white;background:rgb(88, 135, 207);font-size:20px;border-radius: 10px;" onclick="addShoppingCart(this.id)">加入购物车</button></td>';
        html = html + '</tr>';
    }
    $('#add_table').html(html);
}
function addShoppingCart(id){

    var btn_id = id;
    var cart_item = store_list[btn_id];
    var arr_cart_list = JSON.parse(localStorage.getItem('cart_list'))||[];
    cart_item.count = 1;

    cart_item.freecount = -1;
    if(arr_cart_list.length == 0){
        arr_cart_list.push(cart_item);
    }
    else{
        for(var i = 0; i < arr_cart_list.length; i ++){
            if(arr_cart_list[i].barcode == cart_item.barcode){
                arr_cart_list[i].count ++;
                break;
            }
            else if(arr_cart_list[i].barcode != cart_item.barcode && i == arr_cart_list.length-1){
                arr_cart_list.push(cart_item);
                break;
            }
        }
    }
    localStorage.setItem('cart_list', JSON.stringify(arr_cart_list));
    location.reload();
}

