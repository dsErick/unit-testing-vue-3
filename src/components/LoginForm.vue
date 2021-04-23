<template>
<form @submit.prevent="onSubmit">
    <input type="text" v-model="name" data-testid="name-input">
    <button type="submit">Submit</button>
</form>
</template>

<script>
import { ref } from 'vue'

export default {
    emits: ['formSubmitted'],
    setup(_, { emit }) {
        const name = ref('')

        function onSubmit() {
            emit('formSubmitted', { name: name.value })
        }

        return {
            name,
            onSubmit
        }
    }
}
</script>
