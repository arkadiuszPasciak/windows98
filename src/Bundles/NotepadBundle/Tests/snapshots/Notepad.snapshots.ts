import { mount } from '@vue/test-utils'
import { expect, it, describe } from 'vitest'
import Notepad from '@Bundles/NotepadBundle/Components/Notepad.vue'

const defaultWrapper = mount(Notepad)

describe('[NotepadBundle]<Snapshots>(Notepad)', async () => {
  it('renders correctly component', () => {
    expect(defaultWrapper.element).toMatchSnapshot()
  })
})
