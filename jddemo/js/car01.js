/**
 * Created by lenovo on 2016/11/19.
 */
//���ȫѡ��ťʵ��ȫ����ѡ�� ���ҵ�����
var jd_sale=document.querySelector('.jd_sale');//���ĺ���
var check=jd_sale.querySelectorAll('.check');
var jd_sale_h=document.querySelector('.jd_sale_h');//����ȫѡ�ĺ���
var inputAll=jd_sale_h.querySelector('input');//ȫѡ��ǩ
var jd_sale_b=document.querySelector('.jd_sale_b');
var left_round=jd_sale.querySelectorAll('.left_round');//������ť���Ӻ���
var choose=jd_sale.querySelector('.choose');
var inputs=choose.querySelectorAll('input[type=checkbox]');//�±ߵ����б�ǩ

//����ʵ�ֵ��������һ�� �ͻ�ʵ��ѡ�к��л�
for(var i=0;i<check.length;i++){
    check[i].onclick=function(){
        console.log(1);
        this.classList.toggle('checked');
    }

}

//ע��ȫѡ����¼�
jd_sale_h.addEventListener('click',function(){
    console.log(2);
    if(jd_sale_h.classList.contains('checked')){//�����֮�������� �ϲ�������������� �����ϱ��Ǹ���ͬʱ�����ĵ���¼���
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
    if(jd_sale_h.classList.contains('checked')){//����д�Ļ� ͬһ��ͷ����ʱ�䶼�õ�onclick����������ִ�к�ߵ����
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



//���±ߵ�ȫ�� ȫѡ��ťҲ��ѡ��

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


//�ӼӼ���
var prev=document.querySelectorAll('.prev');//��Ҫ�ӵ��
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
//���ֲ�
var rubblish=document.querySelectorAll('.rubblish');
var bottom_r=document.querySelectorAll('.bottom_r');
var big_mask=document.querySelector('.big_mask');
var exit=document.querySelector('.exit');
var box=document.querySelector('.box');
for(var i=0;i<rubblish.length;i++){
    rubblish[i].onclick=function(){
        //�ҵ��������Ͱ�±ߵ�   ������
        top_r=this.querySelector('.top_r'); //���Ҫ��¼���� ȡ����ʱ�򻹻��õ�
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