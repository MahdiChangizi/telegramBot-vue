<template>
    <div class="w-screen h-screen z-50 fixed flex flex-col bg-black min-h-screen p-4 text-white">
        <div class="mt-32 text-center flex flex-col gap-8">
            <h1 class="text-2xl font-bold">Now we will calculate</h1>

            <div class="flex flex-col items-start gap-2">
                <p class="text-sm font-semibold">Checking Telegram Premium</p>
                <Progress :model-value="progressValues[0]" class="h-1" />
            </div>
            <div class="flex flex-col items-start gap-2">
                <p class="text-sm font-semibold">Checking Telegram Premium</p>
                <Progress :model-value="progressValues[1]" class="h-1" />
            </div>
            <div class="flex flex-col items-start gap-2">
                <p class="text-sm font-semibold">Checking Telegram Premium</p>
                <Progress :model-value="progressValues[2]" class="h-1" />
            </div>
            <div class="flex flex-col items-start gap-2">
                <p class="text-sm font-semibold">Checking Telegram Premium</p>
                <Progress :model-value="progressValues[3]" class="h-1" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { Progress } from '@/components/ui/progress'
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const progressValues = ref([0, 0, 0, 0])
const token = useRoute().query.token;

const animateProgress = (index: number, targetValue: number, callback?: () => void) => {
    let value = 0
    const increment = () => {
        if (value < targetValue) {
            value += 1
            progressValues.value[index] = value
            setTimeout(increment, 20)
        } else if (callback) {
            callback()
        }
    }
    increment()
}

onMounted(() => {
    animateProgress(0, 100, () => {
        animateProgress(1, 80, () => {
            animateProgress(2, 60, () => {
                animateProgress(3, 40, () => {
                    setTimeout(() => {
                        router.push({
                            path: '/',
                            query: {
                                token: token,
                            }
                        })
                    }, 1000)
                })
            })
        })
    })
})
</script>