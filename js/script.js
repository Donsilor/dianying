//等待dom元素加载完毕.
$(function () {

    //侧边栏展开效果
    $("aside .level1>a.tit").click(function () {
        $(this).addClass('current')   //给当前元素添加"current"样式
            .find('i').addClass('down')   //小箭头向下样式
            .parent().next().slideDown(200)  //下一个元素显示
            .parent().siblings().children('a').removeClass('current')//父元素的兄弟元素的子元素去除"current"样式
            .find('i').removeClass('down').parent().next().slideUp(200);//隐藏
        return false; //阻止默认时间
    });

    //封装弹窗函数
    function popupFunc(openBtn, closeBtn, switObj) {
        $(openBtn).on("click", function () { $(switObj).css('display', 'block'); });
        $(closeBtn).on("click", function () { $(switObj).css('display', 'none'); });
    }

    //POS收银弹窗
    popupFunc('.hallItem', '.popup .closeBtn', '#handle');
    popupFunc('.hallItem.state1', '.popup .closeBtn', '#selMode');
    popupFunc('.hallItem.state2', '.popup .closeBtn', '#state2-selMovie');
    popupFunc('.hallItem.state3', '.popup .closeBtn', '#state3-Order');
    popupFunc('.hallItem.state4', '.popup .closeBtn', '#onChange');
    popupFunc('.hallItem.state5', '.popup .closeBtn', '#sweeping');

    popupFunc('.orderPopup .edit', '.editPrice .cancel', '.editPriceLayer');

    //卖品--结算弹窗
    popupFunc('#settlementAmount', '.popup .closeBtn', '#settlement');
    popupFunc('#settlementAmount', '.popup .closeBtn', '#settlement>#order');

    //卖品--修改价格弹窗
    popupFunc('#order .edit', '.editPrice .cancel', '.editPriceLayer');


    //订单管理弹窗
    popupFunc('.orderList .detailBtn', '#detailsCloseBtn', '#details');
    popupFunc('.orderList .detailBtn', '#detailsCloseBtn', '#details>.interface');

    //卖品结算弹窗
    popupFunc('.addHall', '#addHallCloseBtn', '#addHall');
    popupFunc('.addHall', '#addHallCloseBtn', '#addHall>.interface');

    //影厅设置--添加影厅弹窗
    popupFunc('#alertSettlementAmount', '#closeSettlementBtn', '#settlement');
    popupFunc('#alertSettlementAmount', '#closeSettlementBtn', '#settlement>.interface');

    //影厅设置--编辑影厅弹窗
    popupFunc('.hallList .editHall', '#editHallCloseBtn', '#editHall');
    popupFunc('.hallList .editHall', '#editHallCloseBtn', '#editHall>.interface');

    //影厅设置--删除影厅弹窗
    popupFunc('.hallList .delHall', '#delHallCloseBtn', '#delHall');
    popupFunc('.hallList .delHall', '#delHallCloseBtn', '#delHall>.interface');

    //商品管理--下架弹窗
    popupFunc('.bottom .tr1 a.a2', '.off .p2>.a2', '#handle');
    popupFunc('.bottom .tr1 a.a2', '.off .p2>.a2', '#soldOut');

    //商品管理--编辑弹窗
    popupFunc('.bottom .tr1 a.a1', '.edit .btn a.a2', '#handle');
    popupFunc('.bottom .tr1 a.a1', '.edit .btn a.a2', '#edit');

    //商品管理--新增商品弹窗
    popupFunc('.orderManage .ma-top>a.a2', '.commodity .btn>a.a2', '#handle');
    popupFunc('.orderManage .ma-top>a.a2', '.commodity .btn>a.a2', '#addGoods');

    //商品管理--新增品类弹窗
    popupFunc('.orderManage .ma-top>a.a3', '.category .btn>a.a2', '#handle');
    popupFunc('.orderManage .ma-top>a.a3', '.category .btn>a.a2', '#addCategory');

    //商品管理--新增品类弹窗
    popupFunc('.orderManage .ma-top>a.a4', '.delete .btn>a.a2', '#handle');
    popupFunc('.orderManage .ma-top>a.a4', '.delete .btn>a.a2', '#delCategory');

    //会员信息--添加会员弹窗
    popupFunc('.orderManage .top input.ip4', '.addMember .title a.a1', '#handle');
    popupFunc('.orderManage .top input.ip4', '.addMember .title a.a1', '#addMember');

    //会员信息--修改弹窗
    popupFunc('.orderManage .bottom .tr1 a.a1', '.modify .title a.a1', '#handle');
    popupFunc('.orderManage .bottom .tr1 a.a1', '.modify .title a.a1', '#amend');

    //会员信息--充值弹窗
    popupFunc('.orderManage .bottom .tr1 a.a2', '.recharge .title a.a1', '#handle');
    popupFunc('.orderManage .bottom .tr1 a.a2', '.recharge .title a.a1', '#pay');

    //会员管理--交易记录--详情弹窗
    popupFunc('.details .tr1 a.a1', '.closeBtn', '#details');
    popupFunc('.details .tr1 a.a1', '.closeBtn', '#details>.t-details');

    //影厅管理--人员管理--删除弹窗
    popupFunc('.orderManage .bottom a.a2', '#closeDelPopup', '#handle');
    popupFunc('.orderManage .bottom a.a2', '#closeDelPopup', '#delPopup');

    //影厅管理--人员管理--编辑弹窗
    popupFunc('.orderManage .bottom a.a1', '.addEmployee .add-title a', '#handle');
    popupFunc('.orderManage .bottom a.a1', '.addEmployee .add-title a', '#editEmployee');

    //影厅管理--人员管理--添加员工弹窗
    popupFunc('#addStaff', '.addEmployee .add-title a', '#handle');
    popupFunc('#addStaff', '.addEmployee .add-title a', '#addEmployee');

    //封装选项卡效果
    function tabFunc(tabOpt,curClass,tabContItem,tabItem) {
        var $tabOpt = $(tabOpt);
        $tabOpt.click(function () {
            $(this).addClass(curClass).siblings().removeClass(curClass);
            var $index = $tabOpt.index(this);
            $(tabContItem).eq($index).show().siblings(tabItem).hide();
        });
    }

    //财务统计选项卡
    tabFunc(".tab1 span",'cur','.tabCont1 .tabItem','.tabItem');
    tabFunc(".tab2 span",'cur','.tabCont2 .tabItem','.tabItem');

    //会员管理--交易记录选项卡
    tabFunc(".tab-title a.item",'item-cur','.tab-cont__wrap>li.item','.item');

    //POS收银--观影选项卡
    tabFunc(".selMode span",'cur','.selModeNext>a','a');

    //POS收银--选择观看时长选项卡
    tabFunc(".duration .ctn a",'cur','');

    //POS收银--选购卖品选项卡
    tabFunc(".goodsType>span",'cur','.goodsList>.tabItem');

    //POS收银--支付方式选项卡
    tabFunc(".selPayMode>.payItem",'cur','');

    //POS收银--选择电影选项卡
    tabFunc(".listScroll li.item",'opt','');

    //POS收银--展厅选项卡
    tabFunc(".hallState>a",'cur','');

    //POS收银--筛选选项卡
    tabFunc(".filtNum>a",'cur','');

    //卖品--分类选项卡
    tabFunc(".filtrate>a",'cur','.goodsList>ul');

    //封装开关函数
    function switFunc(switBtn, switObj) {
        $(switBtn).click(function () {
            $(switObj).toggle();
        })
    }

    switFunc('#payRecordBtn','#payRecord');

    //卖品--购物车
    switFunc('.shoppingCart>a','.shoppingCart>.layer');



    //关闭弹窗函数
    function closePopupFunc(closeBtn, hideObj, showObj) {
        $(closeBtn).on('click',function () {
            $(hideObj).css('display', 'none');
            hideAllInterface();
            $(showObj).css('display','block');
        });
    }

    function closePopupFunc2(closeBtn, hideObj, showObj) {
        $(closeBtn).on('click',function () {
            $(hideObj).css('display', 'none');
            $(showObj).css('display','block');
        });
    }

    closePopupFunc('.interface .top>.closeBtn','#handle' ,'#selMode');
    closePopupFunc('.interface .top>.closeBtn','.interface' ,'');
    // closePopupFunc('.interface .top>.closeBtn','#handle' ,'.popup>.interface');

    closePopupFunc('.affirmBtn','#handle','#selMode');
    closePopupFunc('.affirmBtn','#settlement','#selMode');

    closePopupFunc('.popup>.confirm .btns a','#handle','#selMode');

    closePopupFunc('.sweep .confirmBtn','#handle','#selMode');

    closePopupFunc('#payRecord .closeBtn','#payRecord','');
    closePopupFunc('#delPopup .closeBtn','#delPopup','');


    //POS收银--弹窗跳转
    function hideAllInterface() {
        $('.popup>div').css('display','none');
    }

    function gotoFunc(clickBtn, toThat) {
        $(clickBtn).on('click',function () {
            hideAllInterface();
            $(toThat).css('display','block');
        });
    }


    //状态1 包场观映
    gotoFunc('#branch_1', '#selMovie-1');
    gotoFunc('#selMovieGoBack', '#selMode');
    gotoFunc('#goSelGoods-1', '#selGoods-1');
    gotoFunc('#toSelMovie-1', '#selMovie-1');
    gotoFunc('#toSelMovie-1-2', '#selMovie-1');
    gotoFunc('#toOrder-1', '#order-1');
    gotoFunc('#toOrder-1-2', '#order-1-2');
    gotoFunc('#toSelGoods-1', '#selGoods-1');
    gotoFunc('#toPayMode-1', '#payMode-1');
    gotoFunc('#toPayMode-1-2', '#payMode-1-2');
    gotoFunc('#toPayMode-1-3', '#payMode-1');
    gotoFunc('#toPayMode-1-4', '#payMode-1-2');
    gotoFunc('#backOrder-1', '#order-1');
    gotoFunc('#backOrder-1-2', '#order-1-2');
    gotoFunc('#toPayInfo-1', '#payInfo-1');
    gotoFunc('#toPayInfo-1-2', '#payInfo-1-2');

    //状态1 包时观映
    gotoFunc('#branch_2', '#selTime-2');
    gotoFunc('#selTimeGoBack', '#selMode');
    gotoFunc('#toOrder-2', '#order-2');
    gotoFunc('#toSelTime-2', '#selTime-2');
    gotoFunc('#toPayMode-2', '#payMode-2');
    gotoFunc('#backOrder-2', '#order-2');
    gotoFunc('#toPayInfo-2', '#payInfo-2');
    gotoFunc('#toPayMode-2-2', '#payMode-2');
    gotoFunc('#toSelGoods-2', '#selGoods-2');
    gotoFunc('#backSelTime-2', '#selTime-2');
    gotoFunc('#toOrder-2-2', '#order-2-2');
    gotoFunc('#toSelTime-2-2', '#selGoods-2');
    gotoFunc('#toPayMode-2-3', '#payMode-2-3');
    gotoFunc('#backOrder-2-2', '#order-2-2');
    gotoFunc('#toPayMode-2-4', '#payMode-2-3');
    gotoFunc('#toPayInfo-2-2', '#payInfo-2-2');
    gotoFunc('#backMode-2-3', '#payMode-2-3');

    //状态2 包场观映
    gotoFunc('#goSelGoods-3', '#selGoods-3');
    gotoFunc('#toOrder-3', '#order-3');
    gotoFunc('#toPayMode-3', '#payMode-3');
    gotoFunc('#toPayInfo-3', '#payInfo-3');
    gotoFunc('#backSelMovie-2', '#state2-selMovie');
    gotoFunc('#backSelMovie-2-2', '#state2-selMovie');
    gotoFunc('#backOrder-3', '#order-3');
    gotoFunc('#backMode-3', '#payMode-3');
    gotoFunc('#toOrder-3-2', '#order-3-2');
    gotoFunc('#backSelMovie-3', '#selGoods-3');
    gotoFunc('#toPayMode-3-2', '#payMode-3-2');
    gotoFunc('#toPayInfo-3-2', '#payInfo-3-2');
    gotoFunc('#backOrder-3-2', '#order-3-2');
    gotoFunc('#backMode-3-2', '#payMode-3-2');

    //状态3 包时观映
    gotoFunc('#toSelMovie-4', '#selMovie-4');
    gotoFunc('#backState3-order', '#state3-Order');
    gotoFunc('#toOrder-4', '#order-4');
    gotoFunc('#backSelMovie-4', '#selMovie-4');
    gotoFunc('#toPayMode-4', '#payMode-4');
    gotoFunc('#backOrder-4', '#order-4');
    gotoFunc('#toPayInfo-4', '#payInfo-4');
    gotoFunc('#backMode-4', '#payMode-4');
    gotoFunc('#goSelGoods-4', '#selGoods-4');
    gotoFunc('#backSelMovie-4-2', '#selMovie-4');
    gotoFunc('#toOrder-4-2', '#order-4-2');
    gotoFunc('#backSelGoods-4', '#selGoods-4');
    gotoFunc('#toPayMode-4-2', '#payMode-4');

    gotoFunc('#toSelTime-3', '#selTime-3');
    gotoFunc('#backState3-order-2', '#state3-Order');
    gotoFunc('#toOrder-4-3', '#order-4-3');
    gotoFunc('#backSelTime-3', '#selTime-3');
    gotoFunc('#toPayMode-4-3', '#payMode-4-3');
    gotoFunc('#backOrder-4-3', '#order-4-3');
    gotoFunc('#toPayInfo-4-2', '#payInfo-4-2');
    gotoFunc('#backPayMode-4-3', '#payMode-4-3');
    gotoFunc('#toSelGoods-4-2', '#selGoods-4-2');
    gotoFunc('#backSelTime-3-2', '#selTime-3');
    gotoFunc('#toOrder-4-4', '#order-4-4');
    gotoFunc('#backSelGoods-4-2', '#selGoods-4-2');
    gotoFunc('#toPayMode-4-4', '#payMode-4-4');
    gotoFunc('#backOrder-4-4', '#order-4-4');
    gotoFunc('#toPayInfo-4-3', '#payInfo-4-3');
    gotoFunc('#backPayMode-4-4', '#payMode-4-4');
    gotoFunc('#toConfirm', '#confirm');

    //卖品
    gotoFunc('#toPayMode', '#payMode');
    gotoFunc('#backOrder', '#order');
    gotoFunc('#toPayInfo', '#payInfo');
    gotoFunc('#backPayMode', '#payMode');





});


//下拉框
(function ($) {
    $.fn.input = function () {
        var iptlabel = $(this).find("input[for='label']");
        var iptvalue = $(this).find("input[for='value']");
        var ul = $(this).find('ul');
        var li = ul.find('li');
        var btn = $(this).find('.pubicon');
        iptlabel.click(function () {
            ul.show();
            return false;
        });

        btn.click(function () {
            ul.show();
            return false;
        });
        li.click(function () {
            iptlabel.val($(this).html());
            iptvalue.val($(this).attr("data"));
            ul.hide();
            return false;
        }).mouseover(function () {
            $(this).css({
                'background': '#008fe7',
                'color': '#fff'
            })
        }).mouseout(function () {
            $(this).css({
                'background': '#fff',
                'color': '#333'
            });
        });
        $(document).click(function () {
            ul.hide();
        });
    }
})(jQuery);

//下拉框调用
$('#Tmcselect01').input();
$('#Tmcselect02').input();
$('#Tmcselect03').input();
$('#Tmcselect04').input();
$('#Tmcselect05').input();
$('#Tmcselect06').input();

//加减数量
$(document).ready(function () {
    var pl = $("p:last");
    var reg = /(.*[\:\：]\s*)([\+\d\.]+)(\s*元)/g;
    $(".sy_minus").click(function () {
        var me = $(this),
            txt = me.next(":text"),
            pc = me.closest("p");
        var val = parseFloat(txt.val());
        val = val < 1 ? 1 : val;
        txt.val(val - 1);
        var price = parseFloat(pc.prev("p").text().replace(reg, '$2')) * txt.val();
        pc.next("p").text(pc.next("p").text().replace(reg, "$1" + price + "$3"));
        var sum = 0;
        $(".p_num").next("p").each(function (i, dom) {
            sum += parseFloat($(this).text().replace(reg, "$2"));
        });
        pl.text(pl.text().replace(reg, "$1" + sum + "$3"));
    });

    $(".sy_plus").click(function () {
        var me = $(this),
            txt = me.prev(":text"),
            pc = me.closest("p");
        var val = parseFloat(txt.val());
        txt.val(val + 1);
        var price = parseFloat(pc.prev("p").text().replace(reg, '$2')) * txt.val();
        pc.next("p").text(pc.next("p").text().replace(reg, "$1" + price + "$3"));
        var sum = 0;
        $(".p_num").next("p").each(function (i, dom) {
            sum += parseFloat($(this).text().replace(reg, "$2"));
        });
        pl.text(pl.text().replace(reg, "$1" + sum + "$3"));
    });
})[0].onselectstart = new Function("return false");

//购物车效果
$(".addToCart").click(function () {
    $("#cartList").prepend("<div class='item clearfix'><span class='name'>可口可乐</span><div><span class='sy_minus' id='sy_minus_gid2'>-</span><input class='sy_num' id='sy_num_gid2' readonly='readonly' type='text' name='number1' value='1' /><span class='sy_plus' id='sy_plus_gid2'>+</span></div><span class='price'>￥40.00</span><a href='#' class='removeBtn'><img src='images/closeBtn2.png' alt=''></a></div>");
    $('.shoppingCart>.layer').css('display','block');
});
$(".removeBtn").live('click', function () {
    $(this).parents("div.item").remove();
});
$('#empty').click(function () {
    $('.shoppingCart .itemList').children('div.item').remove();
});



//充值促销效果
var addSetLiBtn = $(".setList .bco");
function addSetLi() {
    $(".setList li:last-child").after("<li class='clearfix'><div class='left fl'>充值 <input type='text' value='500'> 送 <input type='text' value='50'> 元</div><div class='center fl'><span class='fl'>活动时间：</span><div class='frame fl'><input type='text' value=' ' class='ip1'><i class='note-b'></i></div><span class='fl'>至</span><div class='frame fl'><input type='text' value=' ' class='ip1'><i class='note-b'></i></div><input type='submit' value='添加' class='ip3 bco fl'></div><div class='right fl'><a href='#' class='a1'>编辑</a>&nbsp;<a href='#' class='a2'>删除</a></div></li>");
}
addSetLiBtn.live('click',addSetLiBtn,function () {
    addSetLi();
});
$(".setList .right a.a2").live('click', function () {
    $(this).parents().parents("li").remove();
});

//POS收银--订单弹窗 编辑效果
// $(".interface .detail a.edit").on("click",function () {
//     $(this).parent().siblings("td").each(function () {
//         var childInput = $(this).find("input:text");
//         if(!childInput.length){
//             $(this).html("<input type='text' value='"+$(this).text()+"' style='border: 1px solid #d0c7c7;'>");
//         }else{
//             $(this).html(childInput.val());
//         }
//     });
// });

//POS收银--订单弹窗 删除效果
$(".interface .detail a.del").on("click",function () {
    $(this).parents().parents("tr").remove();
});


// 影院信息--删除已上传图片
$(document).ready(function () {

    $('.imgList .imgItem a.absBtn').on('click',function () {
        $(this).parents().parents('div.imgItem').remove();
    })



});

