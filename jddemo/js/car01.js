/**
 * Created by lenovo on 2016/11/19.
 */
//点击全选按钮实现全部都选中 先找到盒子
var jd_sale=document.querySelector('.jd_sale');//最大的盒子
var check=jd_sale.querySelectorAll('.check');
var jd_sale_h=document.querySelector('.jd_sale_h');//包含全选的盒子
var inputAll=jd_sale_h.querySelector('input');//全选标签
var jd_sale_b=document.querySelector('.jd_sale_b');
var left_round=jd_sale.querySelectorAll('.left_round');//包含按钮的子盒子
var choose=jd_sale.querySelector('.choose');
var inputs=choose.querySelectorAll('input[type=checkbox]');//下边的所有标签

//首先实现单独点击哪一个 就会实现选中和切换
for(var i=0;i<check.length;i++){
    check[i].onclick=function(){
        console.log(1);
        this.classList.toggle('checked');
    }

}

//注册全选点击事件
jd_sale_h.addEventListener('click',function(){
    console.log(2);
    if(jd_sale_h.classList.contains('checked')){//点击完之后它有了 上部点击完他就有了 他和上边那个是同时触发的点击事件吧
        for(var i=0;i<inputs.length;i++){
            inputs[i].checked=true;
            left_round[i].classList.add('checked');
        }

    }else{
        for(var i=0;i<inputs.length;i++){
            inputs[i].checked=false;
            left_round[i].classList.remove('checked');
        }
    }
})
/*
jd_sale_h.onclick=function(){
    if(jd_sale_h.classList.contains('checked')){//这样写的话 同一个头部的时间都用的onclick，所以他会执行后边的这个
        for(var i=0;i<inputs.length;i++){
            inputs[i].checked=true;
            left_round[i].classList.add('checked');
        }

    }else{
        for(var i=0;i<inputs.length;i++){
            inputs[i].checked=false;
            left_round[i].classList.remove('checked');
        }
    }
}*/



//当下边的全被 全选按钮也被选中

for(var i=0;i<inputs.length;i++){
    inputs[i].onclick=function(){
        var flag=true;
        for(var i=0;i<inputs.length;i++){
            if(inputs[i].checked==false){
                flag=false;
            }
        }
        if(flag==true){
            inputAll.checked=true;
            jd_sale_h.classList.add('checked');
        }else{
            inputAll.checked=false;
            jd_sale_h.classList.remove('checked');
        }
    }
}


//加加减减
var prev=document.querySelectorAll('.prev');//类要加点的
var next=document.querySelectorAll('.next');
console.log(prev);
for(var i=0;i<prev.length;i++){
    prev[i].onclick=function(){
        var value=this.nextElementSibling.children[0].value;
        if(value==0){
            this.nextElementSibling.children[0].value=0;
        }else{
            this.nextElementSibling.children[0].value=value-1;
        }

    }
}
for(var i=0;i<next.length;i++){
    next[i].onclick=function(){
        var value=this.previousElementSibling.children[0].value;
        if(value==0){
            this.previousElementSibling.children[0].value=0;
        }
        this.previousElementSibling.children[0].value=Number(value)+1;


    }
}
//遮罩层
var rubblish=document.querySelectorAll('.rubblish');
var bottom_r=document.querySelectorAll('.bottom_r');
var big_mask=document.querySelector('.big_mask');
var exit=document.querySelector('.exit');
var box=document.querySelector('.box');
for(var i=0;i<rubblish.length;i++){
    rubblish[i].onclick=function(){
        //找点击的垃圾桶下边的   垃圾盖
        top_r=this.querySelector('.top_r'); //这个要记录下来 取消的时候还会用到
        this.querySelector('.top_r').classList.add('transitionAll');
        this.querySelector('.top_r').style.webkitTransform='rotate(-20deg) translateX(-5px)';
        big_mask.style.display='block';
        box.classList.add('my_bounceInDown');
    }
}

exit.onclick=function(){
    top_r.style.webkitTransform='';
    big_mask.style.display='none';
    box.classList.remove('my_bounceInDown');
}