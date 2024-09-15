<script setup lang="ts">
import { IconHomeFilled } from '@tabler/icons-vue';
import { IconTrophyFilled } from '@tabler/icons-vue';
import { IconUserFilled } from '@tabler/icons-vue';
import { IconWhirl } from '@tabler/icons-vue';
import { IconCoinFilled } from '@tabler/icons-vue';

const token = useRoute().query.token
const user_id = useRoute().query.user_id

</script>

<template>

    <div class="block md:hidden">

        <div class="bg-[#000000] w-screen h-screen"> 
            <!-- bg-[#000000] -->

            <!-- navigation -->
            <!-- <div class="fixed top-0 w-full text-[#ffffff] font-semibold text-sm z-40"
                :class="$route.path === '/' ? 'bg-[#032214]' : 'bg-black'">
                <div class="flex items-center justify-between p-4">
                    <div class="flex items-center justify-center gap-6">
                        <IconX stroke="1.5" size="24" color="#ffffff" />
                        <span class="mb-[0.20rem]">Depintech</span>
                    </div>
                    <div class="flex items-center justify-center gap-6">
                        <IconChevronDown stroke="1.5" size="24" color="#ffffff" />
                        <IconDotsVertical stroke="1.5" size="24" color="#ffffff" />
                    </div>
                </div>
            </div> -->
            <!-- navigation -->

            <!-- app -->
            <slot></slot>
            <!-- app -->

            <!-- bottom -->
            <div class="fixed bottom-0 w-full bg-[#000000] text-[#6e6e73] font-semibold text-[12px] z-40">
                <div class="flex items-center justify-around p-4">
                    <NuxtLink 
                        :to="{ name: 'index', query: {token: token} }"
                        class="flex items-center justify-center flex-col w-10 gap-1"
                        :class="{ 'text-white': $route.path == '/' }">
                        <IconHomeFilled stroke="1.5" size="26" color="currentColor" />
                        <span>Home</span>
                    </NuxtLink>

                    <NuxtLink 
                        :to="{ name: 'earns', query: {token: token} }"
                        class="flex items-center justify-center flex-col w-10 gap-1"
                        :class="{ 'text-white': $route.path == '/earns' }">
                        <IconCoinFilled stroke="1.5" size="26" color="currentColor" />
                        <span>Earns</span>
                    </NuxtLink>

                    <!-- <NuxtLink to="spin" class="flex items-center justify-center flex-col w-10" -->
                    <NuxtLink :to="{ name: 'spin', query: {token: token} }" class=" gap-1flex items-center justify-center flex-col w-10"
                        :class="{ 'text-white': $route.path == '/spin' }">
                        <IconWhirl stroke="1.5" size="26" color="currentColor" />
                        <span>Spin</span>
                    </NuxtLink>

                    <NuxtLink 
                        :to="{ name: 'leaderboard', query: {token: token} }"
                        class="flex items-center justify-center flex-col w-10 gap-1"
                        :class="{ 'text-white': $route.path == '/leaderboard' }">
                        <IconTrophyFilled stroke="1.5" size="26" color="currentColor" />
                        <span>Leaderboard</span>
                    </NuxtLink>

                    <NuxtLink 
                        :to="{ name: 'frends', query: {token: token} }" 
                        class="flex items-center justify-center flex-col w-10 gap-1"
                        :class="{ 'text-white': $route.path == '/frends' }">
                        <IconUserFilled stroke="1.5" size="26" color="currentColor" />    
                        <span>Friends</span>
                    </NuxtLink>
                </div>
            </div>
            <!-- bottom -->
        </div>

    </div>
</template>
