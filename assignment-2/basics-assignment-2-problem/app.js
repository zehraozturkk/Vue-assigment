const app = Vue.createApp({
    data(){
        return{
            output: '',
            output2: '',
            confirmoutput: ''
        }
    },
    methods:{
        showAlert(){
            alert("hellooo guyss")
        },
        changeOutput(event){
            this.output = event.target.value;
        },
        changeSecondOutput(event){
            this.output2 = event.target.value;
        },
        confirmInput(){
            this.confirmoutput = this.output2;
        }

    }
});

app.mount('#assignment')