<template>
    <div class="fixed bottom-[10rem] bg-[#000000] w-full rounded-t-2xl max-h-[72vh] overflow-y-auto">
        <div class="p-4 text-white flex flex-col gap-8">
            <!-- تایتل اصلی Earns -->
            <h1 class="text-2xl font-bold text-center mb-6">Earns</h1>

            <!-- کانال‌های تلگرام -->
            <div>
                <div class="flex items-center gap-2 mb-4">
                    <IconUsers stroke="1.5" size="26" color="currentColor" />
                    <h2 class="text-lg font-semibold">Complete Task</h2>
                </div>

                <div class="flex flex-col gap-4">


                    <!-- فالو توییتر-->
                    <div class="bg-[#1a1a1a] p-3 rounded-lg flex flex-col justify-between">
                        <div class="flex items-center justify-between">
                            <div class="flex flex-col gap-1">
                                <div class="flex items-center gap-2">
                                    <img src="https://img.icons8.com/color/48/000000/twitter--v1.png" alt="Twitter" class="w-6 h-6" />
                                    <p class="text-white">Follow us on Twitter</p>
                                </div>
                                <p class="text-gray-400 mt-2 text-sm">Earn 100 tokens for following</p>
                            </div>
                            <a @click="complate_task(0)" href="https://x.com/Depin_Tech" target="_blank" class="bg-[#25ff8f] text-black px-4 py-2 rounded-full text-sm">Follow</a>
                        </div>
                    </div>

                    <!-- کانال 2 -->
                    <div class="bg-[#1a1a1a] p-3 rounded-lg flex flex-col justify-between">
                        <div class="flex items-center justify-between">
                            <div class="flex flex-col gap-1">
                                <div class="flex items-center gap-2">
                                    <img src="https://img.icons8.com/?size=100&id=63306&format=png&color=000000" alt="Twitter" class="w-6 h-6" />
                                    <p class="text-white">Join us on Channel</p>
                                </div>
                                <p class="text-gray-400 mt-2 text-sm">Earn 100 tokens for joining</p>
                            </div>
                            <a @click="complate_task(1)" href="https://t.me/DepinTech" target="_blank" class="bg-[#25ff8f] text-black px-4 py-2 rounded-full text-sm">Join</a>
                        </div>
                    </div>
                    

                    <div class="bg-[#1a1a1a] p-3 rounded-lg flex flex-col justify-between">
                        <div class="flex items-center justify-between">
                            <div class="flex flex-col gap-1">
                                <div class="flex items-center gap-2">
                                    <img src="https://depintech.org/network.png" alt="Twitter" class="w-6 h-6" />
                                    <h3 class="text-white font-semibold">Visit our Website</h3>
                                </div>
                                <p class="text-gray-400 mt-2 text-sm">Earn 50 tokens for visiting</p>
                            </div>
                            <a @click="complate_task(2)" href="https://depintech.org/" target="_blank" class="bg-[#25ff8f] text-black px-4 py-2 rounded-full text-sm">Visit</a>
                        </div>
                    </div>

                    <div class="bg-[#1a1a1a] p-3 rounded-lg flex flex-col justify-between">
                        <div class="flex items-center justify-between">
                            <div class="flex flex-col gap-1">
                                <div class="flex items-center gap-2">
                                    <img src="https://img.icons8.com/color/48/000000/twitter--v1.png" alt="Twitter" class="w-6 h-6" />
                                    <p class="text-white">Like our posts on Twitter</p>
                                </div>
                                <p class="text-gray-400 mt-2 text-sm">Earn 50 tokens for liking</p>
                            </div>
                            <a @click="complate_task(3)" href="https://x.com/Depin_Tech/status/1833386488278515812" target="_blank" class="bg-[#25ff8f] text-black px-4 py-2 rounded-full text-sm">Like</a>
                        </div>
                    </div>

                    <div class="bg-[#1a1a1a] p-3 rounded-lg flex flex-col justify-between">
                        <div class="flex items-center justify-between">
                            <div class="flex flex-col gap-1">
                                <div class="flex items-center gap-2">
                                    <img src="https://img.icons8.com/color/48/000000/twitter--v1.png" alt="Twitter" class="w-6 h-6" />
                                    <p class="text-white">Like our posts on Twitter</p>
                                </div>
                                <p class="text-gray-400 mt-2 text-sm">Earn 50 tokens for liking</p>
                            </div>
                            <a @click="complate_task(4)" href="https://x.com/Depin_Tech/status/1835205999705080181" target="_blank" class="bg-[#25ff8f] text-black px-4 py-2 rounded-full text-sm">Like</a>
                        </div>
                    </div>

                    <div class="bg-[#1a1a1a] p-3 rounded-lg flex flex-col justify-between">
                        <div class="flex items-center justify-between">
                            <div class="flex flex-col gap-1">
                                <div class="flex items-center gap-2">
                                    <img src="https://img.icons8.com/color/48/000000/twitter--v1.png" alt="Twitter" class="w-6 h-6" />
                                    <p class="text-white">Like our posts on Twitter</p>
                                </div>
                                <p class="text-gray-400 mt-2 text-sm">Earn 50 tokens for liking</p>
                            </div>
                            <a @click="complate_task(5)" href="https://x.com/Depin_Tech/status/1833039250817737188" target="_blank" class="bg-[#25ff8f] text-black px-4 py-2 rounded-full text-sm">Like</a>
                        </div>
                    </div>

                
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { IconUsers } from '@tabler/icons-vue';
import axios from 'axios';

const token = useRoute().query.token

const complate_task = (code: number) => {
    const response = axios.post('https://punk1210.com/api/complete_task', {task: code},
        {headers: {Authorization: 'Bearer ' + token}}
    );
}

</script>
