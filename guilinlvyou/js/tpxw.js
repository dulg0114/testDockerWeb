   var speed=30//�ٶ���ֵԽ���ٶ�Խ��
var colee_left2=document.getElementById("colee_left2");
var colee_left1=document.getElementById("colee_left1");
var colee_left=document.getElementById("colee_left");
colee_left2.innerHTML=colee_left1.innerHTML
function Marquee3(){
if(colee_left2.offsetWidth-colee_left.scrollLeft<=0)//offsetWidth �Ƕ���Ŀɼ����
colee_left.scrollLeft-=colee_left1.offsetWidth//scrollWidth �Ƕ����ʵ�����ݵĿ��������߿��
else{
colee_left.scrollLeft++
}
}
var MyMar3=setInterval(Marquee3,speed)
colee_left.onmouseover=function() {clearInterval(MyMar3)}
colee_left.onmouseout=function() {MyMar3=setInterval(Marquee3,speed)}