<script setup lang="ts">
const form = reactive({
  name: '',
  email: '',
  phone: '',
  company: '',
  message: ''
})

const errors = reactive<Record<string, string>>({})
const submitting = ref(false)
const submitStatus = ref<'' | 'success' | 'error'>('')

function validate(): boolean {
  for (const key of Object.keys(errors)) delete errors[key]

  if (!isRequired(form.name)) {
    errors.name = 'Name is required.'
  } else if (!isValidName(form.name)) {
    errors.name = 'Name must contain letters only.'
  }

  if (!isRequired(form.email)) {
    errors.email = 'Email is required.'
  } else if (!isValidEmail(form.email)) {
    errors.email = 'Enter a valid email address.'
  }

  if (form.phone && !isValidPhone(form.phone)) {
    errors.phone = 'Enter a valid phone number.'
  }

  if (!isRequired(form.message)) {
    errors.message = 'Message is required.'
  }

  return Object.keys(errors).length === 0
}

const handleSubmit = async () => {
  if (!validate()) {
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
          <FormField id="name" v-model="form.name" label="Name" required placeholder="Samatha Clarken" :error="errors.name" />
          <FormField id="email" v-model="form.email" label="Email" type="email" required placeholder="example@youremail.com" :error="errors.email" />
          <FormField id="phone" v-model="form.phone" label="Phone" type="tel" placeholder="(123) 456 - 7890" :error="errors.phone" />
          <FormField id="company" v-model="form.company" label="Company" placeholder="Moon" />
        </div>

        <FormField id="message" v-model="form.message" label="Message" as="textarea" required placeholder="Type your message here..." :error="errors.message" />

        <button type="submit" :disabled="submitting" class="w-full py-4 bg-overlay-gray text-white font-sans font-semibold uppercase tracking-wider hover:opacity-90 transition flex items-center justify-center gap-2">
          {{ submitting ? 'SENDING...' : 'SEND MESSAGE →' }}
        </button>

        <div v-if="submitStatus" :class="submitStatus === 'success' ? 'text-green' : 'text-error'" class="text-sm font-sans text-center">
          {{ submitStatus === 'success' ? 'Thank you! Your message has been sent successfully.' : 'Please fix the errors above.' }}
        </div>
      </form>
    </div>
  </section>
</template>
