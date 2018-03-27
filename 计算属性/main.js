var app = new Vue({
    el:'#app',
    data:{
        name:{
            firstName:'jack',
            lastName:'tom'
        },
        package1:[
            {
                name:'ip7',
                price:6088,
                count:3
            },
            {
                name:'pen',
                price:30,
                count:10
            },{
                name:'apple',
                price:24,
                count:5
            }
        ],
        package2:[
            {
                name:'ip6',
                price:5088,
                count:4
            },
            {
                name:'flower',
                price:30,
                count:7
            },{
                name:'banana',
                price:24,
                count:9
            } 
        ]
    },
    computed:{
        prices(){
            let prices = 0
            for(let i = 0; i<this.package1.length;i++){  //这里的this指向Vue实例
                prices = prices + (this.package1[i].price * this.package1[i].count)
            }
            for(let i = 0; i<this.package2.length;i++){  
                prices = prices + (this.package2[i].price * this.package2[i].count)
            }
            return prices
        },

        fullname:{
            // getter函数用于读取
            get(){
                return this.name.firstName + ' ' + this.name.lastName
            },

            //setter函数用于改写，这两个函数都在computed内部！
            set(value){
                let newName = value.split(' ')
                this.name.firstName = newName[0]
                this.name.lastName = newName[newName.length - 1]
            }
        }
    }
})

var app2 = new Vue({
    el:'#app2',
    computed:{
        message(){
            return app.package1[1].name  // computed计算属性可以依赖其他实例的数据
        } 
    }
})
app.fullname='hei due'