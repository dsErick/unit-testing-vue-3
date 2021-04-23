import { mount } from '@vue/test-utils'
import LoginForm from '@/components/LoginForm'

describe('LoginForm', () => {
    it('emits and event with a user data payload', () => {
        const wrapper = mount(LoginForm)

        // 1. Find text input
        // 2. Set value to text input
        // 3. Simulate form submission
        // 4. Assert event has been emitted
        // 5. Assert payload is correct

        const input = wrapper.find('[data-testid="name-input"]')

        input.setValue('Erick Silva')
        wrapper.trigger('submit')

        const formSubtmittedCalls = wrapper.emitted('formSubmitted')

        expect(formSubtmittedCalls).toHaveLength(1)
        expect(formSubtmittedCalls[0][0]).toMatchObject({ name: 'Erick Silva' })
    })
})
