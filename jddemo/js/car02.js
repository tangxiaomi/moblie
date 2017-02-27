/**
 * Created by lenovo on 2016/11/19.
 */
//实现全选
var jd_sale=document.querySelector('.jd_sale');
var jd_sale_h=document.querySelector('.jd_sale_h');//全选框
var inputAll=jd_sale_h.querySelector('input');//全选按钮
var left_round=jd_sale.querySelectorAll('.left_round');//所有单个的盒子
var choose=jd_sale.querySelector('.choose');
var input=choose.querySelectorAll('input[type=checkbox]');//所有单个的按钮
var check=jd_sale.querySelectorAll('.check');//所有带选框的盒子

//注册事件了
 for(var i=0;i<check.length;i++){
     check[i].addEventListener('click',function(){
         this.classList.toggle('checked');//这里不用加点
     })
 }
//实现全选
jd_sale_h.addEventListener('click',function(){ //上边是先选择好了
    if(jd_sale_h.classList.contains('checked')){
        for(var i=0;i<left_round.length;i++){
            left_round[i].classList.add('checked');
            input[i].checked=true;
        }
    }else{
        for(var i=0;i<left_round.length;i++){
            left_round[i].classList.remove('checked');
            input[i].checked=false;
        }
    }

})

//底边的变化影响上边的 变化
for(var i=0;i<input.length;i++){
    input[i].addEventListener('click',function(){
        //进行判断一波 点击一次就检查一遍所有的
        var flag=true;
        console.log(input.length);
        for(var i=0;i<input.length;i++){
            if(input[i].checked==false){
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
    })
}

//垃圾桶
var big_mask=document.querySelector('.big_mask');
var box=document.querySelector('.box');
var exit=document.querySelector('.exit');
var rubblish=document.querySelectorAll('.rubblish');
for(var i=0;i<rubblish.length;i++){
    rubblish[i].addEventListener('click',function(){
        top_r=this.querySelector('.top_r');//这样就是全局变量了
      //取名字不能用top
        top_r.classList.add('transitionAll');
        top_r.style.webkitTransform='rotate(-20deg) translateX(-5px)';
        big_mask.style.display='block';
        box.classList.add('my_bounceInDown')
    })
}
exit.addEventListener('click',function(){
    big_mask.style.display='none';
    top_r.style.webkitTransform='';//没有就得写空
    box.classList.remove('my_bounceInDown')
})
