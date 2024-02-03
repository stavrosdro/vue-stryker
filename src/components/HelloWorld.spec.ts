import { describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';
import HelloWorld from './HelloWorld.vue';

describe('HelloWorld', () => {
    describe('render', () => {
        it('should render card properly', () => {
            const wrapper = mount(HelloWorld);

            const div = wrapper.find('.card');

            expect(div.exists()).toBeTruthy();
        });

        it('should render button text properly', () => {
            const wrapper = mount(HelloWorld);

            const button = wrapper.find('button');

            expect(button.text()).toContain('Start the counter');
        });
    });

    describe('button click', () => {
        it('should update button text on click', async () => {
            const wrapper = mount(HelloWorld);

            const button = wrapper.find('button');
            button.trigger('click');
            button.trigger('click');
            button.trigger('click');

            await wrapper.vm.$nextTick();

            expect(button.text()).toContain('Count is');
        });
    });
});
