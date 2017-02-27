/**
 * Created by lenovo on 2016/11/18.
 */
//点击实现全选
    //全选按钮

var jd_sale=document.querySelector('.jd_sale');
var check=jd_sale.querySelectorAll('.check');//这个是产生哪些为元素的大盒子
var inputAll=document.querySelector('.jd_sale_h');//全选盒子
var iputbutton=inputAll.querySelector('input');//全选按钮
var choose=document.querySelector('.choose');
var input=choose.querySelectorAll('input[type=checkbox]');//下边的分选盒子
var left_round=document.querySelectorAll('.left_round');
for(var i=0;i<check.length;i++){
    check[i].addEventListener('click',function(){
        this.classList.toggle('checked');
    })
}

//当点击最顶面的时候会实现全选
inputAll.addEventListener('click',function(){
    if(this.classList.contains('checked')){//这里就说明被选中了
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
//当下边全都被选 全选也会被选
for(var i=0;i<input.length;i++){
    input[i].onclick=function(){//点击着一个判断所有个
        var flag=true;
        for(var i=0;i<input.length;i++){
            if(input[i].checked==false){
                flag=false;
            }
        }
        console.log(flag);
        if(flag==true){
            inputAll.classList.add('checked');
            iputbutton.checked=true;
        }else{
            inputAll.classList.remove('checked');
            iputbutton.checked=false;
        }

    }

}

//点击垃圾桶 实现遮罩层出现
var rubblish=document.querySelectorAll('.rubblish');
var big_mask=document.querySelector('.big_mask');
var exit=document.querySelector('.exit');
var box=document.querySelector('.box');//获取中间那个白色的框
for(var i=0;i<rubblish.length;i++){
    rubblish[i].addEventListener('click',function(){
        big_mask.style.display='block';
        //找到垃圾盖
        top_r = this.querySelector('.top_r');
        top_r.classList.add('transitionAll');
        top_r.style.webkitTransform = 'rotate(-20deg) translateX(-5px)'
        //给中间那个白色的框添加动画
        box.classList.add('my_bounceInDown');

    })
}
exit.addEventListener('click',function(){
    big_mask.style.display='none';
    top_r.style.webkitTransform = '';
    box.classList.remove('my_bounceInDown');
})

//加加减减
var next=document.querySelectorAll('.next');
var prev=document.querySelectorAll('.prev');
//相减
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
//相加
for(var i=0;i<next.length;i++){
    next[i].onclick=function(){
        var value=this.previousElementSibling.children[0].value;
        this.previousElementSibling.children[0].value=Number(value)+1;

    }
}


