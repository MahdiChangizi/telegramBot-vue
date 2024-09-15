<template>
    <div class="fixed bottom-[10rem] bg-[#000000] w-full rounded-t-2xl max-h-[72vh] overflow-y-auto">
        <div class="p-4 text-white flex flex-col gap-8">
            <!-- تایتل اصلی Earns -->
            <h1 class="text-2xl font-bold text-center mb-6">Earns</h1>

            <!-- Daily tasks -->
            <div>
                <div class="flex items-center gap-2 mb-4">
                    <IconList stroke="1.5" size="26" color="currentColor" />
                    <h2 class="text-lg font-semibold">Daily Tasks</h2>
                </div>
                <p class="text-gray-400 mb-4">Complete your daily tasks and earn rewards!</p>

                <!-- مثال تسک توییتر -->
                <div class="bg-[#1a1a1a] p-3 rounded-lg flex flex-col justify-between">
                    <div class="flex items-center justify-between">
                        <div class="flex flex-col gap-1">
                            <div class="flex items-center gap-2">
                                <img src="https://img.icons8.com/color/48/000000/twitter--v1.png" alt="Twitter" class="w-6 h-6" />
                                <p class="text-white">Follow us on Twitter</p>
                            </div>
                            <p class="text-gray-400 mt-2 text-sm">Earn 50 tokens for following us on Twitter.</p>
                        </div>
                        <a href="https://twitter.com/example" target="_blank" class="bg-[#25ff8f] text-black px-4 py-2 rounded-full text-sm">Follow</a>
                    </div>
                </div>

                <!-- مثال تسک لایک توییت -->
                <div class="bg-[#1a1a1a] p-3 rounded-lg flex flex-col justify-between mt-4">
                    <div class="flex items-center justify-between">
                        <div class="flex items-center gap-2">
                            <img src="https://img.icons8.com/color/48/000000/heart.png" alt="Like" class="w-6 h-6" />
                            <p class="text-white">Like our latest tweet</p>
                        </div>
                        <a href="https://twitter.com/example/status/123456789" target="_blank" class="bg-[#25ff8f] text-black px-4 py-2 rounded-full text-sm">Like</a>
                    </div>
                    <p class="text-gray-400 mt-2 text-sm">Earn 30 tokens for liking our latest tweet.</p>
                </div>

                <!-- تکرار تسک لایک توییت -->
                <div class="bg-[#1a1a1a] p-3 rounded-lg flex flex-col justify-between mt-4">
                    <div class="flex items-center justify-between">
                        <div class="flex items-center gap-2">
                            <img src="https://img.icons8.com/color/48/000000/heart.png" alt="Like" class="w-6 h-6" />
                            <p class="text-white">Like our latest tweet</p>
                        </div>
                        <a href="https://twitter.com/example/status/123456789" target="_blank" class="bg-[#25ff8f] text-black px-4 py-2 rounded-full text-sm">Like</a>
                    </div>
                    <p class="text-gray-400 mt-2 text-sm">Earn 30 tokens for liking our latest tweet.</p>
                </div>

                <!-- تکرار تسک لایک توییت -->
                <div class="bg-[#1a1a1a] p-3 rounded-lg flex flex-col justify-between mt-4">
                    <div class="flex items-center justify-between">
                        <div class="flex items-center gap-2">
                            <img src="https://img.icons8.com/color/48/000000/heart.png" alt="Like" class="w-6 h-6" />
                            <p class="text-white">Like our latest tweet</p>
                        </div>
                        <a href="https://twitter.com/example/status/123456789" target="_blank" class="bg-[#25ff8f] text-black px-4 py-2 rounded-full text-sm">Like</a>
                    </div>
                    <p class="text-gray-400 mt-2 text-sm">Earn 30 tokens for liking our latest tweet.</p>
                </div>
            </div>

            <!-- کانال‌های تلگرام -->
            <div>
                <div class="flex items-center gap-2 mb-4">
                    <IconUsers stroke="1.5" size="26" color="currentColor" />
                    <h2 class="text-lg font-semibold">Join Telegram Channels</h2>
                </div>

                <div class="flex flex-col gap-4">
                    <!-- کانال 1 -->
                    <div class="bg-[#1a1a1a] p-3 rounded-lg flex flex-col justify-between">
                        <div class="flex items-center justify-between">
                            <div>
                                <h3 class="text-white font-semibold">Channel Name 1</h3>
                                <p class="text-sm text-gray-400">Join this awesome channel</p>
                            </div>
                            <a href="https://t.me/example_channel1" target="_blank" class="bg-[#25ff8f] text-black px-4 py-2 rounded-full text-sm">Join</a>
                        </div>
                        <p class="text-gray-400 mt-2 text-sm">Earn 100 tokens for joining this channel.</p>
                    </div>

                    <!-- کانال 2 -->
                    <div class="bg-[#1a1a1a] p-3 rounded-lg flex flex-col justify-between">
                        <div class="flex items-center justify-between">
                            <div>
                                <h3 class="text-white font-semibold">Channel Name 2</h3>
                                <p class="text-sm text-gray-400">Don't miss out on updates</p>
                            </div>
                            <a href="https://t.me/example_channel2" target="_blank" class="bg-[#25ff8f] text-black px-4 py-2 rounded-full text-sm">Join</a>
                        </div>
                        <p class="text-gray-400 mt-2 text-sm">Earn 100 tokens for joining this channel.</p>
                    </div>

                    <!-- کانال 3 -->
                    <div class="bg-[#1a1a1a] p-3 rounded-lg flex flex-col justify-between">
                        <div class="flex items-center justify-between">
                            <div>
                                <h3 class="text-white font-semibold">Channel Name 3</h3>
                                <p class="text-sm text-gray-400">Exclusive content here</p>
                            </div>
                            <a href="https://t.me/example_channel3" target="_blank" class="bg-[#25ff8f] text-black px-4 py-2 rounded-full text-sm">Join</a>
                        </div>
                        <p class="text-gray-400 mt-2 text-sm">Earn 100 tokens for joining this channel.</p>
                    </div>
                    
                    <!-- تکرار کانال تلگرام -->
                    <div class="bg-[#1a1a1a] p-3 rounded-lg flex flex-col justify-between">
                        <div class="flex items-center justify-between">
                            <div>
                                <h3 class="text-white font-semibold">Channel Name 3</h3>
                                <p class="text-sm text-gray-400">Exclusive content here</p>
                            </div>
                            <a href="https://t.me/example_channel3" target="_blank" class="bg-[#25ff8f] text-black px-4 py-2 rounded-full text-sm">Join</a>
                        </div>
                        <p class="text-gray-400 mt-2 text-sm">Earn 100 tokens for joining this channel.</p>
                    </div>

                    <!-- تکرار کانال تلگرام -->
                    <div class="bg-[#1a1a1a] p-3 rounded-lg flex flex-col justify-between">
                        <div class="flex items-center justify-between">
                            <div>
                                <h3 class="text-white font-semibold">Channel Name 3</h3>
                                <p class="text-sm text-gray-400">Exclusive content here</p>
                            </div>
                            <a href="https://t.me/example_channel3" target="_blank" class="bg-[#25ff8f] text-black px-4 py-2 rounded-full text-sm">Join</a>
                        </div>
                        <p class="text-gray-400 mt-2 text-sm">Earn 100 tokens for joining this channel.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { IconUsers, IconList } from '@tabler/icons-vue';
</script>
