const app = Vue.createApp({
    data(){
        return{
            result:0,
        }
    },
    watch:{
        result(){
            if(this.result===37){
                this.result=37;
                return alert('not there yet')
            }
            else if(this.result > 37){
                this.result=37;
                return alert('Too much!!')
            }
            setTimeout(()=>{
                this.result=0;
            },5000)
        }
    },
    // computed:{
    //     newResult(){
    //         if(this.result<37){
    //             return 'not yet';
    //         }
    //         else if(this.result===37){
    //             this.result=37;
    //         }
    //         else{
    //             return 'too much'
    //         }
    //     }
    // }, ben computed kullanmadığım için biraz farklı oldu ama eğer computed kullansaydık {{}} kısmında newresult olarak düzeltmemiz lazımdı
    methods:{
        // addNumber(num){
        //     this.result = this.result + num;
        // } bölye ,
        addFive(){
            this.result=this.result + 5;
        },
        add(){
            this.result=this.result + 1;
        }
        

    }

});

app.mount('#assignment');