<template>
    <header>
        <h1>{{title}}</h1>
        <Button @btn-click ="$emit('toggle-add-task')" :textButton="showtask ?'Close' : 'Add Task'" :colors ="showtask ? 'red' : 'black'" />
    </header>
</template>

<script>
import Button from './Button.vue';
export default {
    name: 'Header',
    props: {
        title: String,
        showtask: Boolean
    },  
    components: {Button}
};
</script>

<style scoped>
    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;
    }
</style>

