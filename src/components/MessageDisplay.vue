<template>
<p v-if="error" data-testid="message-error">{{ error }}</p> <!-- Output -->
<p v-else data-testid="message">{{ message.text }}</p> <!-- Output -->
</template>

<script>
import { ref } from 'vue'
import { getMessage } from '@/services/axios.js'

export default {
    setup() {
        const message = ref({})
        const error = ref('')

        return {
            message,
            error
        }
    },
    async created() {
        try {
            this.message = await getMessage() // Input
        } catch (err) {
            this.error = 'Oops! Something went wrong.'
        }
    }
}
</script>
