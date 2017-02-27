/**
 * Created by lenovo on 2016/11/18.
 */
/*
 * @Author: Administrator
 * @Date:   2016-11-17 17:23:33
 * @Last Modified by:   Administrator
 * @Last Modified time: 2016-11-17 17:23:34
 */
scrollY('.left');
scrollY('.right');
function scrollY(id){
    //首先要实现ul的拖动
    var content=document.querySelector('.content');   //最大的盒子
    var left_ul=content.querySelector(id);//包含要移动的盒子的盒子
    var  clum_ul=left_ul.querySelector('.public');//要移动的盒子

//ul的高度是可能大于他的
    var clum_height=clum_ul.offsetHeight;
    var  left_height=left_ul.offsetHeight;
    console.log(clum_height,left_height);
//给右边的盒子注册那些托动事件
//初始化相关变量
    var  startY= 0,dy= 0,currentY=0;
    var maxvalue=100;
    var minvalue=100;
    left_ul.addEventListener('touchstart',function(e){
        startY= e.touches[0].pageY;
        //清楚过渡 以防托动迟钝
        clum_ul.classList.remove('transitionAll')
    });
    left_ul.addEventListener('touchmove',function(e){
        dy= e.touches[0].pageY-startY;//？？？
        //托动到一定的位置让他暂停在原位置上  后一个相当于盒子变长了
        if((currentY+dy)<maxvalue && (currentY+dy)>-(clum_height-left_height+minvalue)){
            //让ul实现托动
            clum_ul.style.webkitTransform='translateY('+(currentY+dy)+'px)';
        };

    })
    left_ul.addEventListener('touchend',function(e){
//记录上次托动的到的位置 这是核心
        currentY=currentY+dy;
        //当我松开手的时候它会反弹回去
        if(currentY>0){
            //只要超过0就反弹
            //实现同步
            clum_ul.classList.add('transitionAll')
            currentY=0;
            clum_ul.style.webkitTransform='translateY('+currentY+'px)';
        }else if(currentY<-(clum_height-left_height)){  //刚好到这个时候者两个盒子的底边就重叠了 负数越长越小
            clum_ul.classList.add('transitionAll')//移动的方向就决定了她应该是负值
            currentY=-(clum_height-left_height);
            clum_ul.style.webkitTransform='translateY('+currentY+'px)';//当你拉倒最底的时候它就会停留在两底边重叠的地方
        }

        //点击小方块。点击谁谁就回到最顶端 当这个外边的盒子可以完全展示出剩下的li的时候 就不能再点击了向上移动了
        if(id=='.left'){
            //获取到所有的li
            var lis=clum_ul.querySelectorAll('li');
            for(var i=0;i<lis.length;i++){
                //记录每个li的下标
                lis[i].index=i;
                lis[i].addEventListener('click',function(){
                    var h=-(this.index*lis[0].offsetHeight);//因为是往上跑所以是负值
                    if (h<-(clum_height-left_height)){//两地重合 再往上走h就更小
                        h=-(clum_height-left_height); //这个是达到最低端的时候
                    }
                    clum_ul.classList.add('transitionAll');
                    currentY=h;
                    clum_ul.style.webkitTransform='translateY('+currentY+'px)';
                })
            }
        }
    })
}


