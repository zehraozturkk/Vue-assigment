<template>
    <form @submit.prevent="submitData">
        <div>
            <label >name</label>
            <input type="text" v-model="enteredName">
        </div>
        <div>
            <label >age</label>
            <input type="text" v-model="enteredAge">
        </div>
        <div>
            <button>add PErson</button>
        </div>

    </form>
</template>

<script>
export default{
    emit:['add-person'],
    data(){
        return{
            enteredName:'',
            enteredAge:'',
        }
    },
    methods:{
        submitData(){
            this.$emit('add-person', this.enteredName, this.enteredAge)
        }

    }
}
</script>