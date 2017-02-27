/**
 * Created by lenovo on 2016/11/17.
 */
//topbar����ɫ�����仯
window.addEventListener('scroll',function(){
    //��ȡ����ȥ�ĸ߶�
    var scroll_top=document.documentElement.scrollTop||window.pageYOffset || document.body.scrollTop;
    //��ȡԪ��
    var  topbar=document.querySelector('.jd_header');
    if(scroll_top>600){
        topbar.style.backgroundColor='rgba(209,68,50,1)';
    }else{
        topbar.style.backgroundColor='rgba(209,68,50,'+scroll_top/600+')';
    }
})

//���ɶ���
//���ҵ�һ��li�Ŀ��
var lunbo=document.querySelector('.lunbo');
var news_li=lunbo.querySelectorAll('li');
//���һ������
lunbo.appendChild(news_li[0].cloneNode(true));
var index=0;
var newstimer=null;
newstimer=setInterval(function(){
      //���ж���û�й��ɵ���
    index++;
    if(!lunbo.classList.contains('transitionAll')){
        lunbo.classList.add('transitionAll');
    }
    //�ֻ��˶Ե��ƶ�������transform  offsetHeight����ĸ߶�
    lunbo.style.webkitTransform='translateY('+-index*news_li[0].offsetHeight+'px)';

    //���������һ��
    lunbo.addEventListener('transitionend',function(){
        //˲��ص�0  ÿһ��li������һ�����ɵ� Ҫ�ж����һ�ι��ɵ�λ��
        if(index>news_li.length-1){
            if(lunbo.classList.contains('transitionAll')){
                lunbo.classList.remove('transitionAll');
            }
            lunbo.style.webkitTransform='translateY(0)';
            index=0;
        }

    })
},1000)

//�ֲ�ͼ
//���Ƚ�ul������
var course=document.querySelector('.course');
var jd_course=course.querySelector('.jd_course');
var course_li=jd_course.querySelectorAll('li');
var device_height=document.documentElement.offsetWidth;
var course_li_height=course_li[0].offsetHeight;
jd_course.style.height=course_li_height+'px';
var jd_dot=course.querySelector('.jd_dot');
//���ȶ�����ر���
var  center=0; //���� ��һ��
var left=course_li.length-1;//�������һ��
var  right=1;//���ǵڶ���
var coursetimer=null;
//��̬����СԲ��
for(var i=0;i<course_li.length;i++){
    var lis=document.createElement('li');
    if(i==0){
        lis.classList.add('active');
    }
    jd_dot.appendChild(lis);
}
//��ȡ����
var dot_num=jd_dot.querySelectorAll('li');
//��ʼ�������λ��
course_li[center].style.webkitTransform='translateX(0px)';
course_li[left].style.webkitTransform='translateX('+-device_height+'px)';
course_li[right].style.webkitTransform='translateX('+device_height+'px)';

//���Ȼ��Ǳ꣬Ȼ���ڻ�ͼƬ  ���Ƶ������ƶ����Ǹ����
coursetimer=setInterval(function(){
   nextpic();
},1000)


//��ָ�϶�
var startX= 0
var dx=0;
course.addEventListener('touchstart',function(e){
   // ��ȡ���
    startX= e.touches[0].pageX;
    var setTimer=new Date();
    //�����ʱ��
    clearInterval(coursetimer);
    //�������
    course_li[center].classList.remove('transitionAll');
    course_li[left].classList.remove('transitionAll');
    course_li[right].classList.remove('transitionAll');

})
course.addEventListener('touchmove',function(e){
    dx=e.touches[0].pageX-startX;
    course_li[center].style.webkitTransform = 'translateX(' + dx +'px)';//��1�ƶ���0  1
    course_li[left].style.webkitTransform = 'translateX('+ (-device_height + dx)+'px)';//��0�����  2
    course_li[right].style.webkitTransform = 'translateX('+(device_height + dx) +'px)';//��2�ƶ���1  0
})
course.addEventListener('touchend',function(e){
    //var time=new data()-startTime;
    //�ƶ�һ���ľ����ڻ�
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
        //����Ϲ���
        course_li[center].classList.add('transitionAll');
        course_li[left].classList.add('transitionAll');
        course_li[right].classList.add('transitionAll');
        course_li[center].style.webkitTransform='translateX(0px)';
        course_li[left].style.webkitTransform='translateX('+-device_height+'px)';
        course_li[right].style.webkitTransform='translateX('+device_height+'px)';
    }
})
//��װСԲ����ɫ�仯
 function getchange(){
     for(var i=0;i< course_li.length; i++){
         dot_num[i].classList.remove('active');
     }
     dot_num[center].classList.add('active');
 }

//��װͼƬ
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
    //right�� �����Բ��ù���
    course_li[center].style.webkitTransform='translateX(0px)';//��1�ƶ���0  1
    course_li[right].style.webkitTransform='translateX('+device_height+'px)';//��0�����  2
    course_li[left].style.webkitTransform='translateX('+-device_height+'px)';//��2�ƶ���1  0
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
    //right�� �����Բ��ù���
    course_li[center].style.webkitTransform='translateX(0px)';//��1�ƶ���0  1
    course_li[right].style.webkitTransform='translateX('+device_height+'px)';//��0�����  2
    course_li[left].style.webkitTransform='translateX('+-device_height+'px)';//��2�ƶ���1  0

    getchange();
}


//����ʱ
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
    //ȡ��λ ʮλ
    span[0].innerHTML=Math.floor(h/10);
    span[1].innerHTML=Math.floor(h%10);
    span[3].innerHTML=Math.floor(m/10);
    span[4].innerHTML=Math.floor(m%10);
    span[6].innerHTML=Math.floor(s/10);
    span[7].innerHTML=Math.floor(s%10);
},1000)