/**
 * Created by lenovo on 2016/11/17.
 */
//topbar背景色发生变化
window.addEventListener('scroll',function(){
    //获取被滚去的高度
    var scroll_top=document.documentElement.scrollTop||window.pageYOffset || document.body.scrollTop;
    //获取元素
    var  topbar=document.querySelector('.jd_header');
    if(scroll_top>600){
        topbar.style.backgroundColor='rgba(209,68,50,1)';
    }else{
        topbar.style.backgroundColor='rgba(209,68,50,'+scroll_top/600+')';
    }
})

//过渡动画
//先找到一个li的宽度
var lunbo=document.querySelector('.lunbo');
var news_li=lunbo.querySelectorAll('li');
//添加一个变量
lunbo.appendChild(news_li[0].cloneNode(true));
var index=0;
var newstimer=null;
newstimer=setInterval(function(){
      //先判断有没有过渡的类
    index++;
    if(!lunbo.classList.contains('transitionAll')){
        lunbo.classList.add('transitionAll');
    }
    //手机端对的移动都是用transform  offsetHeight自身的高度
    lunbo.style.webkitTransform='translateY('+-index*news_li[0].offsetHeight+'px)';

    //如果走完了一遍
    lunbo.addEventListener('transitionend',function(){
        //瞬间回到0  每一个li都是有一个过渡的 要判断最后一次过渡的位置
        if(index>news_li.length-1){
            if(lunbo.classList.contains('transitionAll')){
                lunbo.classList.remove('transitionAll');
            }
            lunbo.style.webkitTransform='translateY(0)';
            index=0;
        }

    })
},1000)

//轮播图
//首先将ul撑起来
var course=document.querySelector('.course');
var jd_course=course.querySelector('.jd_course');
var course_li=jd_course.querySelectorAll('li');
var device_height=document.documentElement.offsetWidth;
var course_li_height=course_li[0].offsetHeight;
jd_course.style.height=course_li_height+'px';
var jd_dot=course.querySelector('.jd_dot');
//首先定义相关变量
var  center=0; //这是 第一张
var left=course_li.length-1;//这是最后一张
var  right=1;//这是第二张
var coursetimer=null;
//动态生成小圆点
for(var i=0;i<course_li.length;i++){
    var lis=document.createElement('li');
    if(i==0){
        lis.classList.add('active');
    }
    jd_dot.appendChild(lis);
}
//获取个数
var dot_num=jd_dot.querySelectorAll('li');
//初始化最初的位置
course_li[center].style.webkitTransform='translateX(0px)';
course_li[left].style.webkitTransform='translateX('+-device_height+'px)';
course_li[right].style.webkitTransform='translateX('+device_height+'px)';

//首先换角标，然后在换图片  是移到不是移动了是个结果
coursetimer=setInterval(function(){
   nextpic();
},1000)


//手指拖动
var startX= 0
var dx=0;
course.addEventListener('touchstart',function(e){
   // 获取起点
    startX= e.touches[0].pageX;
    var setTimer=new Date();
    //清除定时器
    clearInterval(coursetimer);
    //清掉过渡
    course_li[center].classList.remove('transitionAll');
    course_li[left].classList.remove('transitionAll');
    course_li[right].classList.remove('transitionAll');

})
course.addEventListener('touchmove',function(e){
    dx=e.touches[0].pageX-startX;
    course_li[center].style.webkitTransform = 'translateX(' + dx +'px)';//从1移动到0  1
    course_li[left].style.webkitTransform = 'translateX('+ (-device_height + dx)+'px)';//从0到左边  2
    course_li[right].style.webkitTransform = 'translateX('+(device_height + dx) +'px)';//从2移动到1  0
})
course.addEventListener('touchend',function(e){
    //var time=new data()-startTime;
    //移动一定的距离在换
    var dx = e.changedTouches[0].pageX - startX;
    if(dx>(device_height/3)){
        prevpic();
        coursetimer=setInterval(function(){
            nextpic();
        },1000)
    }else if(dx<-(device_height/3)){
        nextpic();
        coursetimer=setInterval(function(){
            nextpic();
        },1000)
    }else{
        //添加上过渡
        course_li[center].classList.add('transitionAll');
        course_li[left].classList.add('transitionAll');
        course_li[right].classList.add('transitionAll');
        course_li[center].style.webkitTransform='translateX(0px)';
        course_li[left].style.webkitTransform='translateX('+-device_height+'px)';
        course_li[right].style.webkitTransform='translateX('+device_height+'px)';
    }
})
//封装小圆点颜色变化
 function getchange(){
     for(var i=0;i< course_li.length; i++){
         dot_num[i].classList.remove('active');
     }
     dot_num[center].classList.add('active');
 }

//封装图片
function nextpic(){
    left=center;
    center=right;
    right++;

    if(right>course_li.length-1){
        right=0;
    }
    course_li[center].classList.add('transitionAll');
    course_li[left].classList.add('transitionAll');
    course_li[right].classList.remove('transitionAll');
    //right是 后补所以不用过渡
    course_li[center].style.webkitTransform='translateX(0px)';//从1移动到0  1
    course_li[right].style.webkitTransform='translateX('+device_height+'px)';//从0到左边  2
    course_li[left].style.webkitTransform='translateX('+-device_height+'px)';//从2移动到1  0
    getchange();
}

function prevpic(){
    right=center;
    center=left;
    left--;
    if(left<0){
        left=course_li.length-1;
    }
    course_li[center].classList.add('transitionAll');
    course_li[right].classList.add('transitionAll');
    course_li[left].classList.remove('transitionAll');
    //right是 后补所以不用过渡
    course_li[center].style.webkitTransform='translateX(0px)';//从1移动到0  1
    course_li[right].style.webkitTransform='translateX('+device_height+'px)';//从0到左边  2
    course_li[left].style.webkitTransform='translateX('+-device_height+'px)';//从2移动到1  0

    getchange();
}


//倒计时
var newTime=new Date();
var targetTime=new Date('2016/11/17 19:30:00');
var second=(targetTime-newTime)/1000;
console.log(second);
var timedj=document.querySelector('.time');
var span=timedj.querySelectorAll('span');
var time=setInterval(function(){
    second--;
    var h=second%86400/3600;
    var m=second%3600/60;
    var s=second%60;
    //取个位 十位
    span[0].innerHTML=Math.floor(h/10);
    span[1].innerHTML=Math.floor(h%10);
    span[3].innerHTML=Math.floor(m/10);
    span[4].innerHTML=Math.floor(m%10);
    span[6].innerHTML=Math.floor(s/10);
    span[7].innerHTML=Math.floor(s%10);
},1000)