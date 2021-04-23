import { mount } from '@vue/test-utils'
import AppHeader from '@/components/AppHeader'

// Creates a block of test, aka a 'test suite'
describe('AppHeader', () => {
    // Creates a Jest test
    test('If user is not logged in, do not show logout button', () => {
        // Mount and wrappes it, given access to functions to help testing the component
        const wrapper = mount(AppHeader)

        // expect: An assertion about the expected outcome
        // toBe: A Jest matcher
        expect(wrapper.find('button').isVisible()).toBe(false)
    })

    test('If user is logged in, show logout button', async () => {
        const wrapper = mount(AppHeader)

        await wrapper.setData({ loggedIn: true })

        expect(wrapper.find('button.helloWorld').isVisible()).toBe(true)
    })
})
