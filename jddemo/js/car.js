/**
 * Created by lenovo on 2016/11/18.
 */
//���ʵ��ȫѡ
    //ȫѡ��ť

var jd_sale=document.querySelector('.jd_sale');
var check=jd_sale.querySelectorAll('.check');//����ǲ�����ЩΪԪ�صĴ����
var inputAll=document.querySelector('.jd_sale_h');//ȫѡ����
var iputbutton=inputAll.querySelector('input');//ȫѡ��ť
var choose=document.querySelector('.choose');
var input=choose.querySelectorAll('input[type=checkbox]');//�±ߵķ�ѡ����
var left_round=document.querySelectorAll('.left_round');
for(var i=0;i<check.length;i++){
    check[i].addEventListener('click',function(){
        this.classList.toggle('checked');
    })
}

//���������ʱ���ʵ��ȫѡ
inputAll.addEventListener('click',function(){
    if(this.classList.contains('checked')){//�����˵����ѡ����
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
//���±�ȫ����ѡ ȫѡҲ�ᱻѡ
for(var i=0;i<input.length;i++){
    input[i].onclick=function(){//�����һ���ж����и�
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

//�������Ͱ ʵ�����ֲ����
var rubblish=document.querySelectorAll('.rubblish');
var big_mask=document.querySelector('.big_mask');
var exit=document.querySelector('.exit');
var box=document.querySelector('.box');//��ȡ�м��Ǹ���ɫ�Ŀ�
for(var i=0;i<rubblish.length;i++){
    rubblish[i].addEventListener('click',function(){
        big_mask.style.display='block';
        //�ҵ�������
        top_r = this.querySelector('.top_r');
        top_r.classList.add('transitionAll');
        top_r.style.webkitTransform = 'rotate(-20deg) translateX(-5px)'
        //���м��Ǹ���ɫ�Ŀ���Ӷ���
        box.classList.add('my_bounceInDown');

    })
}
exit.addEventListener('click',function(){
    big_mask.style.display='none';
    top_r.style.webkitTransform = '';
    box.classList.remove('my_bounceInDown');
})

//�ӼӼ���
var next=document.querySelectorAll('.next');
var prev=document.querySelectorAll('.prev');
//���
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
//���
for(var i=0;i<next.length;i++){
    next[i].onclick=function(){
        var value=this.previousElementSibling.children[0].value;
        this.previousElementSibling.children[0].value=Number(value)+1;

    }
}


