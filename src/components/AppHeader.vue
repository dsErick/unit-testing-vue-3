<template>
<div>
    <button class="helloWorld" v-show="loggedIn">Logout</button> <!-- Output -->
</div>
</template>

<script>
export default {
    data() {
        return {
            loggedIn: false // Input
        }
    }
}
</script>

<style>
</style>
