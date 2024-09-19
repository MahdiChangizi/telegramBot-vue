<script setup lang="ts">
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { Alert } from '@/components/ui/alert'

// متغیر برای لینک دعوت
const inviteLink = ref('');

// متغیر برای وضعیت نمایش Alert
const showAlert = ref(false);

// تابع کپی کردن لینک دعوت
const copyInviteLink = () => {
  navigator.clipboard.writeText(inviteLink.value).then(() => {
    showAlert.value = true;
    setTimeout(() => {
      showAlert.value = false;
    }, 2000); // Alert برای 2 ثانیه نمایش داده می‌شود
  }).catch(err => {
    console.error('Failed to copy text: ', err);
  });
}

// گرفتن توکن از URL
const token = useRoute().query.token

// بارگذاری داده‌ها هنگام Mount شدن کامپوننت
onMounted(async () => {
  try {
    const response = await axios.get('https://punk1210.com/api/invite-code', {
      headers: {
        Authorization: 'Bearer ' + token,
      },
    });
    inviteLink.value = `https://t.me/Depintech_bot?start=${response.data.invite_code}`;
  } catch (error) {
    console.error('Error fetching token data:', error);
  }
});
</script>

<template>
  <div>
    <!-- نمایش Alert وقتی showAlert به true تغییر می‌کند -->
    <Alert v-if="showAlert" class="fixed top-4 left-1/2 transform -translate-x-1/2 z-10 bg-[#25ff8f] border-none w-80">
      The link was copied!
    </Alert>

    <div class="fixed top-[3.5rem] bg-[#000000] w-full h-full text-white">
      <div class="p-2 flex flex-col justify-between items-center h-5/6">
        <div class="flex flex-col gap-10 items-center w-full mt-5">
          <h1 class="text-2xl mt-3 font-semibold">Invite Friends in Telegram</h1>
          <img src="https://depintech.org/photo_2024-09-02_09-44-06.png" alt="log" class="w-52">
          <p class="text-xl">Tap on the Button to invite your friends</p>
        </div>

        <Button 
          @click="copyInviteLink" 
          class="w-full py-6 text-lg font-semibold hover:bg-[#25ff8f] bg-[#25ff8f] text-black mb-5 rounded-xl"
        >
          Share Invite Link
        </Button>
      </div>
    </div>
  </div>
</template>
