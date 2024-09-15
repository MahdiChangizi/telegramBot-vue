<script setup lang="ts">
import { Button } from '@/components/ui/button'

//bot url
const inviteLink = ref('')

const shareInviteLink = () => {
  copyInviteLink();

  if (navigator.share) {
    navigator.share({
      title: 'Invite Friends',
      text: 'Join me on this awesome platform!',
      url: inviteLink.value,
    }).then(() => {
      console.log('Invitation shared successfully');
    }).catch(err => {
      console.error('Error in sharing: ', err);
    });
  } else {
    console.log('Web Share API not supported in this browser');
  }
}

const copyInviteLink = () => {
  navigator.clipboard.writeText(inviteLink.value).catch(err => {
    console.error('Failed to copy text: ', err)
  })
}
</script>

<template>
  <div class="fixed top-[3.5rem] bg-[#000000] w-full h-full text-white">
    <div class="p-2 flex flex-col justify-between items-center h-5/6">
      
      <div class="flex flex-col gap-10 items-center w-full mt-5">
        <h1 class="text-2xl mt-3 font-semibold">Invite Friends in Telegram</h1>
        <img src="https://depintech.org/photo_2024-09-02_09-44-06.png" alt="log" class="w-52">
        <p class="text-xl">Tap on the Button to invite your friends</p>
      </div>

      <Button 
        @click="shareInviteLink" 
        class="w-full py-6 text-lg font-semibold hover:bg-[#25ff8f] bg-[#25ff8f] text-black mb-5 rounded-xl"
      >
        Share Invite Link
      </Button>

      <div class="hidden">{{ inviteLink }}</div>
    </div>
  </div>
</template>

<!-- bg-gradient-to-r from-green-500 via-blue-400 to-green-600 inline-block text-transparent bg-clip-text -->