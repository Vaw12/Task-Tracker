<template>
    <div>
        <div v-for="task in tasks" :key="task.id">
            <Single @dblclick="$emit('toggle-reminder', task.id)"
            @delete-task="$emit('delete-task', task.id)" :task ="task"/>
        </div>
    </div>
</template>

<script>
import Single from './Single.vue'
export default {
    name: "Task",
    props: {
        tasks: Array
    },
    components: {
        Single
    },
    emits: ['delete-task', 'toggle-reminder']
}
</script>