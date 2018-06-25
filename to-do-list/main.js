
// 全局组件
Vue.component('todo-list',{
    props:['content','index'],
    template:'<li @click = "removeValue"> {{ content }} <li>',
    methods:{
        removeValue:function(){
            this.$emit('delete', this.index)  //自定义delete事件发布
        }
    }
})


//局部组件
// var todoItem = {
//     template:'<li> heihei <li>'
// }

new Vue({
    el:'#app',
    data:{
        inputValue:'',
        list:[]
    },
    // components:{
    //     'todo-list':todoItem
    // },
    methods:{
        submitValue(){
            this.list.push(this.inputValue)
            this.inputValue = ''
        },
        handleDelete:function(index){
            this.list.splice(index, 1)
        }
    }
})