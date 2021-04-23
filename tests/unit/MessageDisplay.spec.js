import flushPromises from 'flush-promises'
import { mount } from '@vue/test-utils'
import MessageDisplay from '@/components/MessageDisplay'
import { getMessage } from '@/services/axios.js'

// Jest mocked version of getMessage module
jest.mock('@/services/axios.js')

beforeEach(() => jest.clearAllMocks())

describe('MessageDisplay', () => {
    it('Calls getMessage and display message', async () => {
        const mockMessage = 'Hello from the db!'
        // Moke the API call
        // Refers to mocked getMessage
        getMessage.mockResolvedValueOnce({ text: mockMessage })

        const wrapper = mount(MessageDisplay)

        // wait for promise to resolve
        // flushPromises make sure that all component promises were resolved
        await flushPromises()

        // check that call happened once
        expect(getMessage).toHaveBeenCalledTimes(1)

        // check that component displays message
        const message = wrapper.find('[data-testid="message"]').text()
        expect(message).toEqual(mockMessage)
    })

    it('Displays an error when getMessage call fails', async () => {
        const mockError = 'Oops! Something went wrong.'
        // Mock the failed API call
        getMessage.mockRejectedValueOnce(mockError)
        
        const wrapper = mount(MessageDisplay)

        // Wait promise to resolve
        await flushPromises()
        
        // check that call happened once
        expect(getMessage).toHaveBeenCalledTimes(1)
        
        // Check that component displays error
        const messageError = wrapper.find('[data-testid="message-error"]').text()
        expect(messageError).toEqual(mockError)
    })
})
