<script setup lang="ts">
import { AccordionContent, AccordionHeader, AccordionItem, AccordionRoot, AccordionTrigger } from 'radix-vue'

const props = defineProps<{
  desc: string
}>()

const sections = computed(() => [
  { value: 'details', title: 'Details', content: props.desc },
  { value: 'dimensions', title: 'Dimensions', content: 'Height: 8 cm, Diameter: 27 cm, Weight: 0.6 kg. Dimensions may vary slightly due to the handmade nature of the piece.' },
  { value: 'reviews', title: 'Reviews', content: 'Customer reviews for this product will appear here.' }
])
</script>

<template>
  <AccordionRoot type="single" collapsible class="border-t border-neutral-200">
    <AccordionItem v-for="section in sections" :key="section.value" :value="section.value" class="border-b border-neutral-200">
      <AccordionHeader>
        <AccordionTrigger class="w-full flex items-center justify-between py-5 font-sans text-base font-semibold text-warm-black">
          {{ section.title }}
          <Icon name="custom:line-rounded-plus" class="w-5 h-5 text-neutral-600 transition-transform data-[state=open]:rotate-45" />
        </AccordionTrigger>
      </AccordionHeader>
      <AccordionContent class="font-sans text-sm text-neutral-600 leading-relaxed pb-5">
        {{ section.content }}
      </AccordionContent>
    </AccordionItem>
  </AccordionRoot>
</template>
