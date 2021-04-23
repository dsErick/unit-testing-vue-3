import flushPromises from 'flush-promises'
import { mount } from '@vue/test-utils'
import Events from '@/components/Events'
import { getEvents } from '@/services/axios'

jest.mock('@/services/axios')

describe('Events', () => {
    it('Can', async () => {
        getEvents.mockResolvedValueOnce([
            {
                id: 1,
                name: 'Palestra na praça',
                start_date: '10:30 23-04-2021',
                user: { 'id': '1', 'name': 'João' }
            },
            // {
            //     id: 2,
            //     name: 'Visita à prefeitura',
            //     start_date: '16:10 29-04-2021',
            //     user: { id: '2', name: 'Maria' }
            // }
        ])
        
        const wrapper = mount(Events)

        await flushPromises()
        
        expect(getEvents).toHaveBeenCalledTimes(1)

        const eventName = wrapper.find('[data-testid="event-name-1"]').text()
        const eventUser = wrapper.find('[data-testid="event-user-1"]').text()
        const eventStartDate = wrapper.find('[data-testid="event-start_date-1"]').text()

        // console.log(eventName.text());
        // console.log(eventStartDate.text());
        // console.log(eventUser.text());

        expect(eventName).toEqual('Palestra na praça')
        expect(eventUser).toEqual('João')
        expect(eventStartDate).toEqual('10:30 23-04-2021')
    })
})
