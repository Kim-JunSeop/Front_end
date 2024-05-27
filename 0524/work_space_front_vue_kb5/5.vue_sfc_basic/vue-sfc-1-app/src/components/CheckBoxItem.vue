<template>
    <li>
        <input type="checkbox" v-model="checked">
        <span class="test">옵션1</span>
    </li>
</template>
<script>
export default{
    name:'CheckBoxItem', 
    data(){
        return{
            checked:false,

        };
    }
}
</script>
<style scoped>
    .test{
        color:blue;
    }
</style>