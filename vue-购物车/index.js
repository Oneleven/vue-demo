var app = new Vue({
    el:'#app',

    data:{
        list:[{
            id:1,
            name:'apple',
            price:18,
            count:3
        },{
            id:2,
            name:'banana',
            price:7,
            count:10
        },{
            id:3,
            name:'orange',
            price:30,
            count:400
        }]
    },

    computed:{
        totalPrice(){
            var total = 0
            for( let i=0 ; i<this.list.length ; i++ ){
                total += this.list[i].price * this.list[i].count
            }
            return total.toLocaleString()  //千位分隔符偷懒的做法，可以用正则，改天研究一下
        }
    },

    methods:{

    }

})