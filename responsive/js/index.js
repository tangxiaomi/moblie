//�ֲ�ͼ����
//���Ŵ���ʵ��ͼƬ���л�

//����Сͼ��ʱ�����A��ǩ�в���һ��img ����������ߺͱ���ͼ
$(function(){
    var a=$('.carousel-inner .item a');
    //console.log(a);
    $(window).on('resize',change).trigger('resize');
    function change(){
        var screen=$(window).width();
        var size=screen<640;
        //����Сͼ��ʱ�� ��ÿһ��ͼƬ������������ص���
        a.each(function(index,ele){
            var $a=$(ele);
            var path=size?$a.data('smpath'):$a.data('lgpath');
             $a.html(size?'<img src='+path+'>':'');
             a.height(size?'auto':410);
             $a.css('background-image',size?'':path);
           /* if(size){
                //��ȡ�����·��
                var path=$a.data('smpath');
                //����img
                //��Ԫ��׷�ӵ�a��ǩ��
                $a.html('<img src='+path+'>');
                //ȥ���߶�
                a.height('auto');
                //ȥ������ͼ
                $a.css('background-image','');
            }else{
                //��ȡ�����·��
                var path=$a.data('lgpath');
                //ȥ��img
                $a.html('');
                //��Ӹ߶�
                a.height(410);
                //��ӱ���ͼ
                $a.css('background-image',path);
            }*/
        })
        var include=$('.include');
        //����ul�Ŀ��  �����ÿ��li�Ŀ��
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

        //�����С�������
        include.css('overflow',size?'scroll':'auto');

    }
    //��ʼ��tooltip  ʹ�ù�����ʾ��
    $('button[data-toggle=tooltip]').tooltip();
    //����л�����ߵ�����
    var $p=$('.wjs_globa .my_dot');
    //console.log($p);
    $('.wjs_globa .nav li a').on('click',function(){
    $p.html($(this).data('content'));
})

    //�õ������ʵ�
    var wjs_nav=$('.wjs_nav');
    var lunbo=$('.lunbo');
    $(window).on('scroll',function(){
        if(wjs_nav.hasClass('affix')){
            lunbo.css("margin-top",160);
        }else{
            lunbo.css("margin-top",0);
        }
    })
    //�ֻ��ֲ�ͼ
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
        //�ж��ƶ���
       if(Math.abs(dx)>offsetX){
           //�ж��ƶ��ķ���
           if(dx>0){
               carousel.carousel('prev');
           }else{
               carousel. carousel('next');
           }
       }
    })
})