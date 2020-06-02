function analysisTemplate(html){

}
//建立一个映射关系
//页面元素和数据对象的映射关系
function MyMVVM(id,data){
    this.id = id;
    this.data = data;
    this.el = document.getElementById(id);
    analysisTemplate(this.el.innerHTML);
}
window.onload = function (){
    
}