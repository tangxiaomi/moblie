//轮播图区域
//缩放窗口实现图片的切换

//当是小图的时候就在A标签中插入一个img 并且清楚定高和背景图
$(function(){
    var a=$('.carousel-inner .item a');
    //console.log(a);
    $(window).on('resize',change).trigger('resize');
    function change(){
        var screen=$(window).width();
        var size=screen<640;
        //当是小图的时候 让每一个图片都进行增加相关的类
        a.each(function(index,ele){
            var $a=$(ele);
            var path=size?$a.data('smpath'):$a.data('lgpath');
             $a.html(size?'<img src='+path+'>':'');
             a.height(size?'auto':410);
             $a.css('background-image',size?'':path);
           /* if(size){
                //获取到相关路径
                var path=$a.data('smpath');
                //创建img
                //将元素追加到a标签中
                $a.html('<img src='+path+'>');
                //去掉高度
                a.height('auto');
                //去掉背景图
                $a.css('background-image','');
            }else{
                //获取到相关路径
                var path=$a.data('lgpath');
                //去掉img
                $a.html('');
                //添加高度
                a.height(410);
                //添加背景图
                $a.css('background-image',path);
            }*/
        })
        var include=$('.include');
        //定死ul的宽度  计算出每个li的宽度
        var nav_tabs=$('.nav-tabs');
        var licouple=$('.nav-tabs li');
        console.log(licouple);
        var x=0;
        licouple.each(function(index,ele){
            x+=$(ele).width();
        })
        nav_tabs.width(x);
        include.width(screen);
        console.log(nav_tabs.width());

        //如果是小屏就添加
        include.css('overflow',size?'scroll':'auto');

    }
    //初始化tooltip  使用工具提示框
    $('button[data-toggle=tooltip]').tooltip();
    //点击切换作左边的文字
    var $p=$('.wjs_globa .my_dot');
    //console.log($p);
    $('.wjs_globa .nav li a').on('click',function(){
    $p.html($(this).data('content'));
})

    //让导航栏适当
    var wjs_nav=$('.wjs_nav');
    var lunbo=$('.lunbo');
    $(window).on('scroll',function(){
        if(wjs_nav.hasClass('affix')){
            lunbo.css("margin-top",160);
        }else{
            lunbo.css("margin-top",0);
        }
    })
    //手滑轮播图
    var carousel=$('.carousel');
    var startX=0;
    var  dx=0;
    var offsetX=50;
    carousel.on('touchstart',function(e){
        startX= e.originalEvent.touches[0].pageX;
    })
    carousel.on('touchmove',function(e){
        dx= e.originalEvent.touches[0].pageX-startX;
    })
    carousel.on('touchend',function(e){
        //判断移动不
       if(Math.abs(dx)>offsetX){
           //判断移动的方向
           if(dx>0){
               carousel.carousel('prev');
           }else{
               carousel. carousel('next');
           }
       }
    })
})