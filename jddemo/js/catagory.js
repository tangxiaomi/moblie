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
    //����Ҫʵ��ul���϶�
    var content=document.querySelector('.content');   //���ĺ���
    var left_ul=content.querySelector(id);//����Ҫ�ƶ��ĺ��ӵĺ���
    var  clum_ul=left_ul.querySelector('.public');//Ҫ�ƶ��ĺ���

//ul�ĸ߶��ǿ��ܴ�������
    var clum_height=clum_ul.offsetHeight;
    var  left_height=left_ul.offsetHeight;
    console.log(clum_height,left_height);
//���ұߵĺ���ע����Щ�ж��¼�
//��ʼ����ر���
    var  startY= 0,dy= 0,currentY=0;
    var maxvalue=100;
    var minvalue=100;
    left_ul.addEventListener('touchstart',function(e){
        startY= e.touches[0].pageY;
        //������� �Է��ж��ٶ�
        clum_ul.classList.remove('transitionAll')
    });
    left_ul.addEventListener('touchmove',function(e){
        dy= e.touches[0].pageY-startY;//������
        //�ж���һ����λ��������ͣ��ԭλ����  ��һ���൱�ں��ӱ䳤��
        if((currentY+dy)<maxvalue && (currentY+dy)>-(clum_height-left_height+minvalue)){
            //��ulʵ���ж�
            clum_ul.style.webkitTransform='translateY('+(currentY+dy)+'px)';
        };

    })
    left_ul.addEventListener('touchend',function(e){
//��¼�ϴ��ж��ĵ���λ�� ���Ǻ���
        currentY=currentY+dy;
        //�����ɿ��ֵ�ʱ�����ᷴ����ȥ
        if(currentY>0){
            //ֻҪ����0�ͷ���
            //ʵ��ͬ��
            clum_ul.classList.add('transitionAll')
            currentY=0;
            clum_ul.style.webkitTransform='translateY('+currentY+'px)';
        }else if(currentY<-(clum_height-left_height)){  //�պõ����ʱ�����������ӵĵױ߾��ص��� ����Խ��ԽС
            clum_ul.classList.add('transitionAll')//�ƶ��ķ���;�������Ӧ���Ǹ�ֵ
            currentY=-(clum_height-left_height);
            clum_ul.style.webkitTransform='translateY('+currentY+'px)';//����������׵�ʱ�����ͻ�ͣ�������ױ��ص��ĵط�
        }

        //���С���顣���˭˭�ͻص���� �������ߵĺ��ӿ�����ȫչʾ��ʣ�µ�li��ʱ�� �Ͳ����ٵ���������ƶ���
        if(id=='.left'){
            //��ȡ�����е�li
            var lis=clum_ul.querySelectorAll('li');
            for(var i=0;i<lis.length;i++){
                //��¼ÿ��li���±�
                lis[i].index=i;
                lis[i].addEventListener('click',function(){
                    var h=-(this.index*lis[0].offsetHeight);//��Ϊ�������������Ǹ�ֵ
                    if (h<-(clum_height-left_height)){//�����غ� ��������h�͸�С
                        h=-(clum_height-left_height); //����Ǵﵽ��Ͷ˵�ʱ��
                    }
                    clum_ul.classList.add('transitionAll');
                    currentY=h;
                    clum_ul.style.webkitTransform='translateY('+currentY+'px)';
                })
            }
        }
    })
}


