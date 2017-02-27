
//首先让该动的盒子实现托动
window.onload=function(){
    scroll('.left'); //每次只是包裹滚动的盒子不一样
    scroll('.right');
    function scroll(id){
        var content=document.querySelector('.content');
        var left_ul=content.querySelector(id);//找准对象
        var clum_ul=left_ul.querySelector('.public');
        var maxvalue=100;
        var left_height=left_ul.offsetHeight;
        var clum_height=clum_ul.offsetHeight;
//注册相关的拖动事件  给那个包裹要动的盒子进行注册
        var startY=0, dy=0,currentY=0;
        left_ul.addEventListener('touchstart',function(e){
            startY= e.touches[0].pageY;
        })

        left_ul.addEventListener('touchmove',function(e){
            dy= e.touches[0].pageY-startY; //得到差值 进行 相关的移动
            //不加上次的位置会导致先跑到上边 在下来
            //在这里首先要确定一下被上下拉动的位置
            if((dy+currentY)<maxvalue&&(dy+currentY)>-(clum_height-left_height+maxvalue)){
                clum_ul.style.webkitTransform='translateY('+(dy+currentY)+'px)';
            }

        })
        left_ul.addEventListener('touchend',function(){
            currentY=currentY+dy;
            //松手之后实现反弹
            //向下大于0 就反弹  向上只要不在重叠就反弹
            if(currentY>0){
                currentY=0
                clum_ul.classList.add('transitionAll');
                clum_ul.style.webkitTransform='translateY('+currentY+'px)';
            }else if(currentY<-(clum_height-left_height)){ //越是小越往上跑
                currentY=-(clum_height-left_height);
                clum_ul.classList.add('transitionAll');
                //这时ul还是往上走的
                clum_ul.style.webkitTransform='translateY('+currentY+'px)';
            }
        })

        if(id==".left"){
            var lis=clum_ul.querySelectorAll('li');
            var li_height=lis[0].offsetHeight;
            for(var i=0;i<lis.length;i++){
                 lis[i].index=i;
                lis[i].onclick=function(){
                    var h=-(li_height* this.index);
                    if(h>-(clum_height-left_height)){
                        currentY=h;
                        clum_ul.classList.add('transitionAll');
                        clum_ul.style.webkitTransform='translateY('+currentY+'px)';
                    }else{
                        clum_ul.classList.add('transitionAll');
                        currentY=-(clum_height-left_height)
                        clum_ul.style.webkitTransform='translateY('+currentY+'px)';
                    }
                }
            }

        }

    }
}
