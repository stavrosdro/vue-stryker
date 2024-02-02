<template>
    <div class="card">
        <button type="button" @click="clickHandler">
            count is {{ count }}
        </button>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const count = ref(0);

function clickHandler() {
    count.value++;
}
</script>
