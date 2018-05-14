function padData(value){
    return value<10?'0'+value:value  //0不加引号会以数字处理
}

new Vue({
    el:'#clock',
    data:{
        time:new Date()
    },

    filters:{
        formatDate(value){  //这里的value就是{{time|formatDate}}里面的time
            const data = new Date(value)
            // 这里多次一举，直接用value即可，value就是插值中的{{time}}，也是data数据里面的time
            //const day = value.getDate()
            const month = padData(data.getMonth() + 1) //getMonth返回的是0~11，所以要加上1
            const year = data.getFullYear()
            const day = data.getDate()  //区分data.getDay(),表示星期中的第几天0~6
            const hour = data.getHours()
            const minute = data.getMinutes()
            const second = data.getSeconds()
            return `${year}-${month}-${padData(day)}-${padData(hour)}：${padData(minute)}：${padData(second)}` //模板字符串，${}里面可以使用方法调用
        }
    },

    mounted:function(){
        var _this = this
        this.timer = setInterval(function(){ //这里的this指向window，所以要在前面绑定_this
            _this.time = new Date()
        },1000)
    },

    beforeDestory:function(){
        if(this.timer){
            clearInterval(this.timer)
        }
    }

    //es6语法
   /*  mounted(){
        this.setIntervaltimer = setInterval(()=>{
            this.time = new Date()
        },1000)
    },
    beforeDestory(){
        if(this.timer){
            clearInterval(this.timer)
        }
    } */

})