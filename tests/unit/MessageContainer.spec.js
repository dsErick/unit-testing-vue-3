// How do we test parent without triggering child's axios request?
// Child has module dependencies we don't want to test?

import { mount } from '@vue/test-utils'
import MessageContainer from '@/components/MessageContainer'

describe('MessageContainer', () => {
    it('Wraps MessageDisplay component', () => {
        const wrapper = mount(MessageContainer, {
            global: {
                stubs: {
                    // Substitute for the MessageDisplay component
                    MessageDisplay: {
                        template: '<p data-testid="message">Hello from the db!</p>'
                    }
                }
            }
        })

        const message = wrapper.find('[data-testid="message"]').text()
        expect(message).toEqual('Hello from the db!')
    })
})

/**
 * Stubs Advantage
 *  - Isolate what you're testing
 *  - Test one thing at a time
 *  - Helps pinpoint what part of your code is broken
 * 
 * Disadvantages of over-using Stubs
 *  - Maintenance costs
 *  - Decrease coverage/confidence
 * 
 * What about shallowMount?
 *  - Same disadvantages as over-using Stubs + more
 *  - Not supported in other libraries. Such as Vue Testing Library
 */
