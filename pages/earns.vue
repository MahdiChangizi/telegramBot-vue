<template>
<div class="fixed bottom-[10rem] bg-[#000000] w-full rounded-t-2xl max-h-[72vh] overflow-y-auto">
    <div class="p-4 text-white flex flex-col gap-8">
    <h1 class="text-2xl font-bold text-center mb-6">Earns</h1>
    <div>
        <div class="flex items-center gap-2 mb-4">
        <IconUsers stroke="1.5" size="26" color="currentColor" />
        <h2 class="text-lg font-semibold">Complete Task</h2>
        </div>
        <div class="flex flex-col gap-4">
        <div v-for="(task, index) in tasks" :key="index" 
                class="bg-[#1a1a1a] p-3 rounded-lg flex flex-col justify-between"
                :class="{ 'opacity-50': index < completedTasks }">
            <div class="flex items-center justify-between">
            <div class="flex flex-col gap-1">
                <div class="flex items-center gap-2">
                <img :src="task.icon" :alt="task.title" class="w-6 h-6" />
                <p class="text-white">{{ task.title }}</p>
                </div>
                <p class="text-gray-400 mt-2 text-sm">{{ task.description }}</p>
            </div>
            <a 
                :href="task.link" 
                target="_blank"
                @click="completeTask(index)"
                :disabled="index < completedTasks"
                :class="[ 'px-4 py-2 rounded-full text-sm inline-block text-center', index < completedTasks ? 'bg-gray-500 text-gray-300' : 'bg-[#25ff8f] text-black' ]">
                {{ index < completedTasks ? 'Completed' : task.buttonText }}
            </a>
            </div>
        </div>
        </div>
    </div>
    </div>
</div>
</template>
  
<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { IconUsers } from '@tabler/icons-vue';
import axios from 'axios';
import { useRoute } from 'vue-router';

const route = useRoute();
const token = route.query.token as string;
const completedTasks = ref(-1);

const tasks = [
    { title: 'Follow us on Twitter', description: 'Earn 100 tokens for following', icon: 'https://img.icons8.com/color/48/000000/twitter--v1.png', link: 'https://x.com/Depin_Tech', buttonText: 'Follow' },
    { title: 'Join us on Channel', description: 'Earn 100 tokens for joining', icon: 'https://img.icons8.com/?size=100&id=63306&format=png&color=000000', link: 'https://t.me/DepinTech', buttonText: 'Join' },
    { title: 'Visit our Website', description: 'Earn 50 tokens for visiting', icon: 'https://depintech.org/network.png', link: 'https://depintech.org/', buttonText: 'Visit' },
    { title: 'Like our posts on Twitter', description: 'Earn 50 tokens for liking', icon: 'https://img.icons8.com/color/48/000000/twitter--v1.png', link: 'https://x.com/Depin_Tech/status/1833386488278515812', buttonText: 'Like' },
    { title: 'Like our posts on Twitter', description: 'Earn 50 tokens for liking', icon: 'https://img.icons8.com/color/48/000000/twitter--v1.png', link: 'https://x.com/Depin_Tech/status/1835205999705080181', buttonText: 'Like' },
    { title: 'Like our posts on Twitter', description: 'Earn 50 tokens for liking', icon: 'https://img.icons8.com/color/48/000000/twitter--v1.png', link: 'https://x.com/Depin_Tech/status/1833039250817737188', buttonText: 'Like' },
];
  
const completeTask = async (taskIndex: number) => {
    if (taskIndex < completedTasks.value) return;    
    try {
        await axios.post('https://punk1210.com/api/complete_task', { task: taskIndex }, {
            headers: { Authorization: 'Bearer ' + token }
        });
        completedTasks.value = Number(taskIndex) + 1
    } catch (error) {
        console.error('Error completing task:', error);
    }
};
  
onMounted(async () => {
try {
    const response = await axios.get('https://punk1210.com/api/complete_task', {
    headers: { Authorization: 'Bearer ' + token }
    });
    completedTasks.value = response.data;
} catch (error) {
    console.error('Error fetching completed tasks:', error);
}
});
</script>