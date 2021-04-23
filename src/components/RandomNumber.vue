<template>
<div>
    <span>{{ randomNumber }}</span> <!-- Output -->
    <button @click="getRandomNumber">Generate Random Number</button>
</div>
</template>

<script>
import { ref } from 'vue'

export default {
    props: {
        min: { // Inputs
            type: Number,
            default: 1
        },
        max: { // Inputs
            type: Number,
            default: 10
        }
    },
    setup(props) {
        const randomNumber = ref(0)

        function getRandomNumber() {
            randomNumber.value = Math.floor(Math.random() * (props.max - props.min + 1) + props.min)
        }
        
        return {
            randomNumber,
            getRandomNumber
        }
    }
}
</script>

<style>
</style>
