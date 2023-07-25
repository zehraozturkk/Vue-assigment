const app = Vue.createApp({
    data(){
        return{
            name:'Zehra',
            age: 21,
            imgLink: 'image.jpg'
        };
    },
    methods: {
        randomNumber(){
            const number = Math.random();
            return number;
        }
    }
});

app.mount('#assignment');