<template>
   <section>
    <h2><strong>NAME:</strong> {{ name }} </h2>
    <h3><strong>AGE:</strong> {{ age }}</h3>
   </section>
</template>

<script>

export default{
    props:{
        id:{
            type:Number,
            required:true
        },
        name:{
            type:String,
            required:true
        },
        age:{
            type:Number,
            required:true
        }
    }
    
}
    

</script>
