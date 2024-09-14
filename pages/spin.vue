<!-- <script setup lang="ts">
import { ref, onMounted } from 'vue';
import axios from 'axios';
import Chart from 'chart.js/auto';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import SpinnerArrow from '../assets/spinner-arrow-.svg';

// نوع‌دهی متغیرها
const wheel = ref<HTMLCanvasElement | null>(null);
const finalValue = ref<string>('Click On The Spin Button To Start');
const canSpin = ref<boolean>(false);
const lastSpin = ref<Date | null>(null);
let myChart: Chart | null = null;
let count: number = 0;
let resultValue: number = 101;

// مقادیر توکن به جای اعداد
type RotationValue = {
  minDegree: number;
  maxDegree: number;
  value: number;
};

const rotationValues: RotationValue[] = [
  { minDegree: 0, maxDegree: 30, value: 200 },
  { minDegree: 31, maxDegree: 90, value: 100 },
  { minDegree: 91, maxDegree: 150, value: 600 },
  { minDegree: 151, maxDegree: 210, value: 500 },
  { minDegree: 211, maxDegree: 270, value: 400 },
  { minDegree: 271, maxDegree: 330, value: 300 },
  { minDegree: 331, maxDegree: 360, value: 200 },
];

const pieColors = ['#4caf50', '#2e7d32', '#4caf50', '#2e7d32', '#4caf50', '#2e7d32'];

const token = useRoute().query.token

// بررسی آخرین زمان اسپین
const checkLastSpin = async (): Promise<void> => {  
  try {
    const response = await axios.get<{ lastSpin: string }>(
      'http://localhost:8000/api/last_spin',
      {
        headers: {
          Authorization: 'Bearer ' + token
        }
      }
    );
    
    console.log(response.data);
    
    // if (response.data) {
    //   lastSpin.value = new Date(response.data.lastSpin);
    //   const now = new Date();
    //   const diff = now.getTime() - lastSpin.value.getTime();
    //   const hoursSinceLastSpin = diff / (1000 * 60 * 60);
    //   canSpin.value = hoursSinceLastSpin >= 24;
    // } else {
    //   console.error("Invalid lastSpin value in response");
    // }
    if (response.data) {
      canSpin.value = true;
    } else {
      console.error("Cannot spin at the moment");
    }

  } catch (error) {
    console.error("Error fetching last spin data:", error);
  }
};

// اسپین چرخ
const spinWheel = (): void => {
  if (!canSpin.value) {
    finalValue.value = 'You can spin once every 24 hours!';
    return;
  }

  let randomDegree: number = Math.floor(Math.random() * (355 - 0 + 1) + 0);
  let rotationInterval = setInterval((): void => {
    if (myChart) {
      myChart.options.rotation += resultValue;
      myChart.update();
      if (myChart.options.rotation >= 360) {
        count += 1;
        resultValue -= 5;
        myChart.options.rotation = 0;
      } else if (count > 15 && myChart.options.rotation === randomDegree) {
        valueGenerator(randomDegree);
        clearInterval(rotationInterval);
        count = 0;
        resultValue = 101;
      }
    }
  }, 10);
};

// تولید مقدار جایزه و ارسال به سرور
const valueGenerator = async (angleValue: number): Promise<void> => {
  for (let i of rotationValues) {
    if (angleValue >= i.minDegree && angleValue <= i.maxDegree) {
      finalValue.value = `🎉 Congratulations! You won ${i.value} tokens!`;
      
      const response = await axios.post(
      'http://localhost:8000/api/spin',
      { token_received: i.value },
      {
        headers: {
          Authorization: 'Bearer ' + token
        }
      }
    );
      

      // بروز رسانی زمان آخرین اسپین
      lastSpin.value = new Date();
      canSpin.value = false;

      break;
    }
  }
};

// مقداردهی اولیه و چک کردن آخرین اسپین
onMounted((): void => {
  checkLastSpin();

  myChart = new Chart(wheel.value as HTMLCanvasElement, {
    plugins: [ChartDataLabels],
    type: 'pie',
    data: {
      labels: rotationValues.map(val => `${val.value}`), // نمایش مقادیر توکن به جای اعداد
      datasets: [{ backgroundColor: pieColors, data: [16, 16, 16, 16, 16, 16] }],
    },
    options: {
      responsive: true,
      animation: { duration: 0 },
      plugins: {
        tooltip: false,
        legend: { display: false },
        datalabels: {
          color: '#ffffff',
          formatter: (_: any, context: any) => context.chart.data.labels[context.dataIndex],
          font: { size: 24 },
        },
      },
      rotation: 0,
    },
  });
});
</script>

<template>
  <div class="bg-[#000000] w-full h-full text-white flex flex-col items-center justify-center">
    <div class="w-11/12 max-w-lg h-96 flex flex-col items-center justify-center rounded-lg shadow-lg p-5">
      <canvas ref="wheel" class="w-full h-full"></canvas>
      <button
        @click="spinWheel"
        class="absolute w-24 h-24 rounded-full bg-gradient-to-br from-[#4caf50] to-[#2e7d32] text-white font-semibold uppercase text-xl mt-5 border border-[#4caf50]"
      >
        Spin
      </button>
      <img :src="SpinnerArrow" alt="spinner-arrow" class="absolute w-12 top-[45%] right-[9%]" />
    </div>
    <div class="text-lg text-center mt-5 text-[#4caf50]">{{ finalValue }}</div>
  </div>
</template> -->

<!-- <template>
  
  <div class="bg-gray-900 w-full h-screen text-white flex flex-col items-center justify-center">
    <div class="relative w-64 h-64 mb-8">
      <div ref="wheel" class="w-full h-full rounded-full overflow-hidden shadow-lg" :style="wheelStyle"></div>
      <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-16 bg-white" 
           style="clip-path: polygon(50% 0%, 0% 100%, 100% 100%);"></div>
    </div>
    <button
      @click="spinWheel"
      :disabled="!canSpin || isSpinning"
      class="px-6 py-3 rounded-full text-lg font-bold transition-all"
      :class="canSpin && !isSpinning ? 'bg-green-500 hover:bg-green-600 text-white' : 'bg-gray-500 text-gray-300 cursor-not-allowed'"
    >
      {{ isSpinning ? 'Spinning...' : 'SPIN' }}
    </button>
    <p v-if="result" class="mt-4 text-xl font-semibold text-green-400">{{ result }}</p>
    <p v-if="!canSpin && !isSpinning" class="mt-2 text-red-400">You can spin once every 24 hours.</p>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import axios from 'axios';

const prizes = [
  { value: 100, color: '#4caf50', weight: 30 },
  { value: 200, color: '#2e7d32', weight: 25 },
  { value: 300, color: '#1b5e20', weight: 20 },
  { value: 400, color: '#43a047', weight: 15 },
  { value: 500, color: '#66bb6a', weight: 7 },
  { value: 600, color: '#81c784', weight: 3 },
];

const wheel = ref<HTMLElement | null>(null);
const result = ref<string>('');
const canSpin = ref<boolean>(false);
const isSpinning = ref<boolean>(false);
const rotation = ref<number>(0);
const token = useRoute().query.token

const wheelStyle = computed(() => {
  // Generate gradient for wheel sections
  const gradient = prizes.map((prize, index) => 
    `${prize.color} ${(index / prizes.length) * 100}% ${(index + 1) / prizes.length * 100}%`
  ).join(', ');
  
  return {
    background: `conic-gradient(${gradient})`,
    transform: `rotate(${rotation.value}deg)`,
    transition: 'transform 5s cubic-bezier(0.25, 0.1, 0.25, 1)'
  };
});

const checkLastSpin = async (): Promise<void> => {
  try {
    const response = await axios.get<boolean>(
      'http://localhost:8000/api/last_spin',
      {
        headers: {
          Authorization: 'Bearer ' + token
        }
      }
    );
    canSpin.value = response.data;
  } catch (error) {
    console.error("Error fetching last spin data:", error);
  }
};

const spinWheel = async (): Promise<void> => {
  if (!canSpin.value || isSpinning.value) return;

  isSpinning.value = true;
  result.value = '';

  // Calculate total weight and winning prize
  const totalWeight = prizes.reduce((sum, prize) => sum + prize.weight, 0);
  const randomValue = Math.random() * totalWeight;
  let weightSum = 0;
  let winningPrize;
  
  for (const prize of prizes) {
    weightSum += prize.weight;
    if (randomValue <= weightSum) {
      winningPrize = prize;
      break;
    }
  }

  // Rotate the wheel
  const extraSpins = Math.floor(Math.random() * 5) + 5; // 5 to 10 extra spins
  const prizeIndex = prizes.indexOf(winningPrize!);
  const totalRotation = 360 * extraSpins + (360 / prizes.length) * prizeIndex;

  rotation.value = totalRotation;

  setTimeout(() => {
    result.value = `🎉 Congratulations! You won ${winningPrize!.value} tokens!`;

    axios.post(
      'http://localhost:8000/api/spin',
      { token_received: winningPrize!.value },
      {
        headers: {
          Authorization: 'Bearer ' + token
        }
      }
    ).then(() => {
      canSpin.value = false;
    }).catch((error) => {
      console.error("Error updating spin result:", error);
    });

    isSpinning.value = false;
  }, 5000);
};

onMounted(() => {
  checkLastSpin();
});
</script>

<style scoped>
/* Styling for the wheel and button */
canvas {
  border-radius: 50%;
  border: 4px solid #4caf50;
}
button {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
</style> -->

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import axios from 'axios';

const prizes = [
  { value: 100, color: '#4caf50', weight: 30 },
  { value: 200, color: '#2e7d32', weight: 25 },
  { value: 300, color: '#1b5e20', weight: 20 },
  { value: 400, color: '#43a047', weight: 15 },
  { value: 500, color: '#66bb6a', weight: 7 },
  { value: 600, color: '#81c784', weight: 3 },
];

const wheel = ref<HTMLElement | null>(null);
const result = ref<string>('');
const canSpin = ref<boolean>(false);
const isSpinning = ref<boolean>(false);
const rotation = ref<number>(0);
const token = useRoute().query.token;

const wheelStyle = computed(() => {
  const gradient = prizes.map((prize, index) => 
    `${prize.color} ${(index / prizes.length) * 100}% ${(index + 1) / prizes.length * 100}%`
  ).join(', ');
  
  return {
    background: `conic-gradient(${gradient})`,
    transform: `rotate(${rotation.value}deg)`,
    transition: 'transform 5s cubic-bezier(0.25, 0.1, 0.25, 1)',
  };
});

const checkLastSpin = async (): Promise<void> => {
  try {
    const response = await axios.get<boolean>(
      'http://localhost:8000/api/last_spin',
      {
        headers: {
          Authorization: 'Bearer ' + token,
        },
      }
    );
    canSpin.value = response.data;
  } catch (error) {
    console.error('Error fetching last spin data:', error);
  }
};

const spinWheel = async (): Promise<void> => {
  if (!canSpin.value || isSpinning.value) return;

  isSpinning.value = true;
  result.value = '';

  const totalWeight = prizes.reduce((sum, prize) => sum + prize.weight, 0);
  const randomValue = Math.random() * totalWeight;
  let weightSum = 0;
  let winningPrize;

  for (const prize of prizes) {
    weightSum += prize.weight;
    if (randomValue <= weightSum) {
      winningPrize = prize;
      break;
    }
  }

  const extraSpins = Math.floor(Math.random() * 5) + 5;
  const prizeIndex = prizes.indexOf(winningPrize!);
  const totalRotation = 360 * extraSpins + (360 / prizes.length) * prizeIndex;

  rotation.value = totalRotation;

  setTimeout(() => {
    result.value = `🎉 Congratulations! You won ${winningPrize!.value} tokens!`;

    axios.post(
      'http://localhost:8000/api/spin',
      { token_received: winningPrize!.value },
      {
        headers: {
          Authorization: 'Bearer ' + token,
        },
      }
    ).then(() => {
      canSpin.value = false;
    }).catch((error) => {
      console.error('Error updating spin result:', error);
    });

    isSpinning.value = false;
  }, 5000);
};

onMounted(() => {
  checkLastSpin();
});
</script>

<template>
  <div class="bg-gradient-to-t from-black via-[#06261a] to-[#137543] w-full h-full min-h-screen text-white flex flex-col items-center justify-center p-4 overflow-auto">
    <h1 class="text-3xl font-bold mb-8 text-center">Spin & Win!</h1>

    <div class="relative w-64 h-64 mb-8">
      <div ref="wheel" class="w-full h-full rounded-full overflow-hidden shadow-2xl border-8 border-green-400" :style="wheelStyle"></div>
      <div class="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-16">
        <svg viewBox="0 0 30 60" class="w-full h-full">
          <polygon points="0,60 15,0 30,60" fill="#25ff8f" stroke="#1d4ed8" stroke-width="2"/>
        </svg>
      </div>
    </div>

    <div class="grid grid-cols-3 gap-4 mb-8 bg-gray-950 bg-opacity-70 p-4 rounded-lg">
      <div v-for="prize in prizes" :key="prize.value" class="flex items-center">
        <div class="w-4 h-4 rounded-full mr-2" :style="{ backgroundColor: prize.color }"></div>
        <span class="text-sm">{{ prize.value }} tokens</span>
      </div>
    </div>

    <button
      @click="spinWheel"
      :disabled="!canSpin || isSpinning"
      class="px-8 py-3 rounded-full text-lg font-bold transition-all"
      :class="canSpin && !isSpinning ? 'bg-green-500 hover:bg-green-600 text-white' : 'bg-gray-500 text-gray-300 cursor-not-allowed'"
    >
      {{ isSpinning ? 'Spinning...' : 'SPIN' }}
    </button>

    <p v-if="result" class="mt-4 text-xl font-semibold text-green-400">{{ result }}</p>
    <p v-if="!canSpin && !isSpinning" class="mt-2 text-red-400">You can spin once every 24 hours.</p>
  </div>
</template>

<style scoped>
button {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
</style>
