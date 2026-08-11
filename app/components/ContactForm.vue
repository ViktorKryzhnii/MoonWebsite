<script setup lang="ts">
const form = reactive({
  name: '',
  email: '',
  phone: '',
  company: '',
  message: ''
})

const submitting = ref(false)
const submitStatus = ref<'' | 'success' | 'error'>('')

const handleSubmit = async () => {
  if (!form.name || !form.email || !form.message) {
    submitStatus.value = 'error'
    return
  }

  submitting.value = true
  submitStatus.value = ''

  await new Promise((resolve) => setTimeout(resolve, 1500))

  submitting.value = false
  submitStatus.value = 'success'

  form.name = ''
  form.email = ''
  form.phone = ''
  form.company = ''
  form.message = ''

  setTimeout(() => {
    submitStatus.value = ''
  }, 5000)
}
</script>

<template>
  <section class="py-16 px-8 md:px-40 bg-white">
    <div class="max-w-4xl mx-auto">
      <form @submit.prevent="handleSubmit" class="flex flex-col gap-6">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="flex flex-col gap-2">
            <label for="name" class="font-sans font-semibold text-neutral-800">Name</label>
            <input id="name" v-model="form.name" type="text" placeholder="Samatha Clarken" class="w-full border border-neutral-300 px-4 py-3 text-neutral-800 font-sans focus:outline-none focus:border-green" />
          </div>
          <div class="flex flex-col gap-2">
            <label for="email" class="font-sans font-semibold text-neutral-800">Email</label>
            <input id="email" v-model="form.email" type="email" placeholder="example@youremail.com" class="w-full border border-neutral-300 px-4 py-3 text-neutral-800 font-sans focus:outline-none focus:border-green" />
          </div>
          <div class="flex flex-col gap-2">
            <label for="phone" class="font-sans font-semibold text-neutral-800">Phone</label>
            <input id="phone" v-model="form.phone" type="tel" placeholder="(123) 456 - 7890" class="w-full border border-neutral-300 px-4 py-3 text-neutral-800 font-sans focus:outline-none focus:border-green" />
          </div>
          <div class="flex flex-col gap-2">
            <label for="company" class="font-sans font-semibold text-neutral-800">Company</label>
            <input id="company" v-model="form.company" type="text" placeholder="Moon" class="w-full border border-neutral-300 px-4 py-3 text-neutral-800 font-sans focus:outline-none focus:border-green" />
          </div>
        </div>

        <div class="flex flex-col gap-2">
          <label for="message" class="font-sans font-semibold text-neutral-800">Message</label>
          <textarea id="message" v-model="form.message" rows="6" placeholder="Type your message here..." class="w-full border border-neutral-300 px-4 py-3 text-neutral-800 font-sans focus:outline-none focus:border-green resize-none"></textarea>
        </div>

        <button type="submit" :disabled="submitting" class="w-full py-4 bg-overlay-gray text-white font-sans font-semibold uppercase tracking-wider hover:opacity-90 transition flex items-center justify-center gap-2">
          {{ submitting ? 'SENDING...' : 'SEND MESSAGE →' }}
        </button>

        <div v-if="submitStatus" :class="submitStatus === 'success' ? 'text-green' : 'text-error'" class="text-sm font-sans text-center">
          {{ submitStatus === 'success' ? 'Thank you! Your message has been sent successfully.' : 'Please fill all required fields.' }}
        </div>
      </form>
    </div>
  </section>
</template>
