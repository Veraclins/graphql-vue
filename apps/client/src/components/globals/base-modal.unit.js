import BaseModal from './base-modal';

describe('@components/base-button', () => {
  it('renders its content', () => {
    const slotContent = '<span>foo</span>';
    const { element } = shallowMount(BaseModal, {
      slots: {
        default: slotContent,
      },
    });
    expect(element.innerHTML).toContain(slotContent);
  });
});
