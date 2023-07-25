const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      confirmedName: '',
      lastName: '',
      // fullname: ''
    };
  },
  watch:{
    counter(value){
      if(value>50){
        this.counter=0;
      }

    }
    // name(value){
    //   this.fullname = value + ' ' + this.lastName; 
    // },
    // lastName(value){
    //   this.fullname = this.name + ' ' + value; 
    // }
  },
  computed:{
    fullname(){
      if(this.name === '' || this.lastName === ''){
        return '';
      }
      return this.name + ' ' + this.lastName;
    }
  },
  methods: {
    confirmedInput(){
      this.confirmedName = this.name;
    },
    setName(event){
      this.name = event.target.value; 
    },
    resetInput(){
      this.name='';
      this.lastName='';
    },
    outputFullName(){
      if(this.name === ''){
        return '';
      }
      return this.name + ' ' + 'Ozturk';
    },
    increase(num){
      this.counter = this.counter+num;
    },
    decrease(num){
      this.counter= this.counter - num;
    },
  }
});

app.mount('#events');
