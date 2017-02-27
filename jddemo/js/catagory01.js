/**
 * Created by lenovo on 2016/11/19.
 */
//�����ñ��϶��ĺ��ӿ����ƶ�
window.onload=function(){
    scroll('.left');
    scroll('.right');
    function scroll(id){
        var content=document.querySelector('.content');
        var left_box=content.querySelector(id);
        var left_height=left_box.offsetHeight;
        var clum_ul=left_box.querySelector('.public');
        var clum_height=clum_ul.offsetHeight;
//ע���϶��¼�
        var startY=0,dy=0,currentY=0, maxValue=100;
        left_box.addEventListener('touchstart',function(e){
            startY= e.touches[0].pageY;
            clum_ul.classList.remove('transitionAll');
        })

        left_box.addEventListener('touchmove',function(e){
            //����ָ�ƶ���ʱ�������϶�
            dy= e.touches[0].pageY-startY;
            //��������һ����Χ���������޵������������� ����������100 ����������-100+��ֵ
            if((currentY+dy)<maxValue&&(currentY+dy)>-(clum_height-left_height+maxValue)){
                //ÿ���ƶ���Ҫ�����ϴε� ������������һ�� ������
                clum_ul.style.webkitTransform='translateY('+(currentY+dy)+'px)';
            }

        })
        left_box.addEventListener('touchend',function(e){
            //��¼���յľ���
            currentY=currentY+dy;
            //��ָ�ɿ�ʵ�ַ��� ������ȷ ����ֻҪ�������0 ����ֻҪ�������ױ߲��غ�
            if(currentY>0){
                clum_ul.classList.add('transitionAll');
                currentY=0; //Ϊ��ʵ��ͬ��
                clum_ul.style.webkitTransform='translateY('+currentY+'px)';
            }else if(currentY<-(clum_height-left_height)){
                currentY=-(clum_height-left_height); //Ϊ��ʵ��ͬ��
                clum_ul.style.webkitTransform='translateY('+currentY+'px)';
            }

        })


        //���С����ʵ����ת ֪�����ױ��غ�
        if(id=='.left'){
            var lis= clum_ul.querySelectorAll('li');
            var lis_height=lis[0].offsetHeight;
            var h=0;
            for(var i=0;i<lis.length;i++){
                lis[i].index=i;
                lis[i].onclick=function(){
                    h=-(this.index*lis_height);//��Ϊ�������� �����Ǹ�ֵ
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


