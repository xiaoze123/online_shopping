//
//
//    var item= [
//        {
//            itemize: '饮料',
//            name: '可口可乐',
//            unit: '瓶',
//            price: 3.00
//        },
//        {
//            itemize: '饮料',
//            name: '雪碧',
//            unit: '瓶',
//            price: 3.00
//        },
//        {
//            itemize: '水果',
//            name: '苹果',
//            unit: '斤',
//            price: 5.50
//        },
//        {
//            itemize: '水果',
//            name: '荔枝',
//            unit: '斤',
//            price: 15.00
//        },
//        {
//            itemize: '生活用品',
//            name: '电池',
//            unit: '个',
//            price: 2.00
//        },
//        {
//            itemize: '食品',
//            name: '方便面',
//            unit: '袋',
//            price: 4.50
//        }
//    ];
//for( var i=0 ;i<item.length ;i++){
//    console.log (item[i]);
//}

function test(){
    var cart_list = JSON.parse(localStorage.getItem('cart_list'));
    var cartNum = 0;
    for(var i in cart_list){
        cartNum += cart_list[i].count;
    }
    $('#shoppingCartNumShow').text("购物车"+"("+cartNum+")")
}