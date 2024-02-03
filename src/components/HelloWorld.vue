<template>
    <div class="card">
        <button type="button" @click="clickHandler">
            {{ buttonText }}
        </button>
    </div>
</template>

<script setup>
import { computed, ref } from 'vue';

const count = ref(0);

function clickHandler() {
    count.value++;
}

const buttonText = computed(() => {
    if (count.value === 0) {
        return 'Start the counter';
    }

    return `Count is ${count.value}`;
});
</script>
