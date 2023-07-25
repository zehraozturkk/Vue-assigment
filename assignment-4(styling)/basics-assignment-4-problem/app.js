const app = Vue.createApp({
    data(){
        return{
            inputClass:'',
            paragraphIsVisible: true,
            inputBackgroundColor:''
        }
    },
    computed:{
        paragClasses(){
            return {
                user1:this.inputClass === 'user1',
                user2: this.inputClass === 'user2',
                visible: this.paragraphIsVisible,
                hidden: !this.paragraphIsVisible
            };
        }
    },
    methods:{
        buttonisVisible(){
            this.paragraphIsVisible = !this.paragraphIsVisible;
        }
    }

});

app.mount('#assignment');