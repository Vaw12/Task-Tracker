<template>
    <button @click="onClick()" class="btn" :style="{background:colors}">{{textButton}}</button>
</template>

<script>
export default {
    name: 'Button',
    props: {
        colors: String,
        textButton: String
    },
    methods: {
        onClick(){
            this.$emit('btn-click')
        }
    },  
};
</script>