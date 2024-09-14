<script setup lang="ts">
import { useRoute } from 'vue-router'
import { useCookies } from 'vue3-cookies'

const { cookies } = useCookies()
const route = useRoute()

if (process.client) {
  const token = route.query.token as string;
  const userId = route.query.user_id as string;

  if (token && userId) {
    cookies.set('token', token, '300d'); // ذخیره توکن به مدت 1 روز
    cookies.set('user_id', userId, '300d'); // ذخیره user_id به مدت 1 روز
  }
}
</script>
