<template>
    <header>
        <h1>Adding User</h1>
    </header>

    <data-user @add-person="addPerson"></data-user>
    <active-user
    v-for="person in persons"
    :key="person.id"
    :name="person.name"
    :age="person.age"
    />
    
</template>

<script>
export default{
    data(){
        return{
            persons:[
                {
                    id:"zehra",
                    name:"zehraOz",
                    age:1
                }
            ]
        }
    },
    methods:{
        addPerson(name,age){
            const newPerson = {
                id:Math.random(),
                name:name,
                age:age
            };
            this.persons.push(newPerson);
        }
    }
}

</script>

<style>
*{
    box-sizing:border-box;
}
header{
    max-width: 50%;
    margin-left: 25%;
    height: 8rem;
    background-color:antiquewhite;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 24px;
    
}

form{
    max-width: 50%;
    margin-left: 25%;
    height: 8rem;
    background-color:bisque;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 24px;
}

form div{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
    margin-bottom:8px ;
  
}

section{
    max-width: 50%;
    margin-left: 25%;
    height: 8rem;
    background-color:bisque;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

h2{
    color:chocolate
}

h2 strong{
    color: teal;
}

h3{
    color: chocolate;
    font-size: 24px;
}

h3 strong{
    color: teal;
}



</style>