import BaseTextarea from './base-textarea';

describe('@components/base-textarea', () => {
  it('works with v-model', () => {
    const wrapper = mount(BaseTextarea, {
      propsData: {
        value: 'aaa',
      },
    });
    const textareaEl = wrapper.find('textarea').element;

    // Has the correct starting value
    expect(textareaEl.value).toEqual('aaa');

    // Emits an textarea event with the correct value when edited
    textareaEl.value = 'bbb';
    wrapper.trigger('textarea');
    expect(wrapper.emitted().textarea).toEqual([['bbb']]);

    // Sets the textarea to the correct value when props change
    wrapper.setProps({
      value: 'ccc',
    });
    expect(textareaEl.value).toEqual('ccc');
  });
});
