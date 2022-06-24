<template>
    <AddTask v-show="showTask" @add-task="addTask" />
    <Task @toggle-reminder="toggleReminder" @delete-task="deleteTask" :tasks = "tasks" />
</template>

<script>
import Task from '../components/Task.vue'
import AddTask from '../components/AddTask.vue'

export default {
    name: 'Home',
    props: {
        showTask : Boolean
    },
    components: {
        Task,
        AddTask,
    },
    data(){
        return{
            tasks : [],
        }
    },
    methods: {
        async addTask(task) {
            const res = await fetch('http://localhost:3000/tasks', {
                method: 'POST',
                headers: {
                'Content-type': 'application/json',
                },
                body: JSON.stringify(task),
            })
            const data = await res.json()
            this.tasks = [...this.tasks, data]
        },
        async toggleReminder(id){
            const togReminder = await this.fetchTask(id);
            const updReminder = {
                ...togReminder, reminder : !togReminder.reminder
            }

            const res = await fetch(`http://localhost:3000/tasks/${id}`,{
                method: 'PUT',
                headers: {'Content-type': 'application/json'},
                body: JSON.stringify(updReminder)
            });

            const data = await res.json();
            console.log(data)
            
            this.tasks = this.tasks.map(task => 
                task.id === id ? {...task, reminder: data.reminder}: task
            )
        },
        
        async deleteTask(id){
            if (confirm('Are you Sure?')){
                const res = await fetch(`http://localhost:3000/tasks/${id}`, {
                method: 'DELETE'
                });

                res.status ===200 ? this.tasks = this.tasks.filter((task) => task.id !== id)
                : alert('Error deleting task');
            }
        },

        async fetchTasks(){
            const res = await fetch('http://localhost:3000/tasks');
            const data = await res.json();
            return data;
        },

        async fetchTask(id){
            const res = await fetch(`http://localhost:3000/tasks/${id}`);
            const data = await res.json();
            return data;
        }
    
    },
    async created(){
        this.tasks = await this.fetchTasks();
    },
}
</script>