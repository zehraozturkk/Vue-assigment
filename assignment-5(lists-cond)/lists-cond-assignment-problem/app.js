const app = Vue.createApp({
    data(){
        return{
            tasks:[],
            enteredValue:'',
            visible: true

        }
    },
    methods:{
        addTask(){
            this.tasks.push(this.enteredValue);
            this.enteredValue = '';
        },
        buttonClick(){
          this.visible = !this.visible;
          
        }
    }

});

app.mount('#assignment')