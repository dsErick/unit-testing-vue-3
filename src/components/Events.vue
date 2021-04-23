<template>
<table style="width: 100%">
    <thead>
        <tr>
            <th style="min-width: 24ch">Nome</th>
            <th>Data</th>
            <th style="min-width: 24ch">Responsável</th>
            <th></th>
        </tr>
    </thead>
    <tbody v-if="events.length">
        <tr v-for="event in events" :key="event.id">
            <td :data-testid="`event-name-${event.id}`">
                {{ event.name }}
            </td>
            <td class="text-nowrap" :data-testid="`event-start_date-${event.id}`">
                {{ event.start_date }}
            </td>
            <td :data-testid="`event-user-${event.id}`">
                {{ event.user.name }}
            </td>
            <td class="action">
                <router-link :to="`/events/${event.id}`">
                    Ver
                </router-link>
            </td>
        </tr>
    </tbody>
    <tbody v-else>
        <tr>
            <td colspan="4">{{ error }}</td>
        </tr>
    </tbody>
</table>
</template>

<script>
import { ref } from 'vue'
import { getEvents } from '@/services/axios'

export default {
    setup() {
        const events = ref([])
        const error = ref('')
        
        async function loadEvents() {
            try {
                // throw new Error('Nice');
                events.value = await getEvents() // Input

            } catch (err) {
                error.value = 'Oops! Something went wrong.'
            }
        }
        loadEvents()

        return {
            events,
            error
        }
    }
}
</script>
