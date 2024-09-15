<script setup lang="ts">
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import axios from 'axios';

const token = useRoute().query.token

interface DataInterface {
  total_users: number;
  top_users: { telegram_id: number; username: string, tokens_amount: number, first_name: string }[];
  current_user: { id: number, first_name: string; username: string; tokens_amount: number };
}

const allData = ref<DataInterface | null>(null);

onMounted(async () => {
  try {
    const response = await axios.get('http://localhost:8000/api/leaderboard', {
      headers: {
        Authorization: 'Bearer ' + token,
      },
    });

    // به روزرسانی allData با داده‌های دریافتی
    allData.value = response.data;
    
  } catch (error) {
    console.error('Error fetching data:', error);
  }
});
</script>

<template>
    <div class="fixed top-[3.5rem] bg-[#000000] w-full h-full text-white">
        <div class="p-2">
            <div class="flex flex-col gap-3 font-semibold items-center w-full text-sm">
                <h1 class="text-2xl mt-3 text-[#25ff8f]">Telegram Wall of Fame</h1>
                <Card class="w-80 flex items-center justify-around p-2 rounded-2xl border-none mt-[20px] bg-[#25ff8f]">
                    <div>
                        <Avatar class="bg-[#35ba75] border-2 border-[#05c964]">
                            <AvatarFallback>
                                {{ allData?.current_user?.first_name ? allData.current_user.first_name.split('').slice(0, 2).join('').toUpperCase() : '' }}
                            </AvatarFallback>
                        </Avatar>
                    </div>
                    <div class="flex flex-col justify-center mr-12">
                        <h1>{{ allData?.current_user.username }}</h1>
                        <h1>{{ allData?.current_user.tokens_amount ? allData?.current_user.tokens_amount.toLocaleString() : '0' }} Depintech</h1>
                    </div>
                    <div>
                        #{{ allData?.current_user.id }}
                    </div>
                </Card>
            </div>
            <div class="p-4 mt-10">
                <h1 class="font-semibold">
                    {{ allData?.total_users ?? 0 }} holder
                </h1>

                <div class="flex flex-col gap-6 mt-6 max-h-96 overflow-y-auto">
                    <!-- card -->
                    <div v-for="data in allData?.top_users" :key="data?.telegram_id" class="w-full h-full flex items-center justify-between rounded-2xl">
                        <div class="flex gap-6 items-center">
                            <Avatar>
                                <AvatarFallback>
                                    {{ data.first_name ? data.first_name.split('').slice(0, 2).join('').toUpperCase() : '' }}
                                </AvatarFallback>
                            </Avatar>

                            <div class="flex flex-col justify-center">
                                <h1>{{ data.username }}</h1>
                                <h1>{{ data.tokens_amount ? data.tokens_amount.toLocaleString() : '0' }} Depintech</h1>
                            </div>
                        </div>
                    
                        <div>
                            #{{ data.telegram_id }}
                        </div>
                    </div>

                    <div class="w-full my-6 text-black">
                    </div>

                </div>


            </div>
        </div>
    </div>
    
</template>