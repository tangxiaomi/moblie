/**
 * Created by lenovo on 2016/11/19.
 */
//首先让被拖动的盒子可以推动
window.onload=function(){
    scroll('.left');
    scroll('.right');
    function scroll(id){
        var content=document.querySelector('.content');
        var left_box=content.querySelector(id);
        var left_height=left_box.offsetHeight;
        var clum_ul=left_box.querySelector('.public');
        var clum_height=clum_ul.offsetHeight;
//注册拖动事件
        var startY=0,dy=0,currentY=0, maxValue=100;
        left_box.addEventListener('touchstart',function(e){
            startY= e.touches[0].pageY;
            clum_ul.classList.remove('transitionAll');
        })

        left_box.addEventListener('touchmove',function(e){
            //在手指移动的时候让他拖动
            dy= e.touches[0].pageY-startY;
            //给拉动定一个范围，不能无限的上拉或者下拉 下拉不超过100 上拉不超过-100+差值
            if((currentY+dy)<maxValue&&(currentY+dy)>-(clum_height-left_height+maxValue)){
                //每次移动还要加上上次的 否则他会先上一下 再下来
                clum_ul.style.webkitTransform='translateY('+(currentY+dy)+'px)';
            }

        })
        left_box.addEventListener('touchend',function(e){
            //记录最终的距离
            currentY=currentY+dy;
            //手指松开实现反弹 首先明确 下拉只要满足大于0 上拉只要满足两底边不重合
            if(currentY>0){
                clum_ul.classList.add('transitionAll');
                currentY=0; //为了实现同步
                clum_ul.style.webkitTransform='translateY('+currentY+'px)';
            }else if(currentY<-(clum_height-left_height)){
                currentY=-(clum_height-left_height); //为了实现同步
                clum_ul.style.webkitTransform='translateY('+currentY+'px)';
            }

        })


        //点击小方框实现跳转 知道两底边重合
        if(id=='.left'){
            var lis= clum_ul.querySelectorAll('li');
            var lis_height=lis[0].offsetHeight;
            var h=0;
            for(var i=0;i<lis.length;i++){
                lis[i].index=i;
                lis[i].onclick=function(){
                    h=-(this.index*lis_height);//因为是往上跑 所以是负值
                    if(h>-(clum_height-left_height)){
                        clum_ul.classList.add('transitionAll');
                        clum_ul.style.webkitTransform='translateY('+h+'px)';
                    }else{
                        currentY=-(clum_height-left_height);
                        clum_ul.style.webkitTransform='translateY('+currentY+'px)';
                    }
                }
            }
        }
    }



}


