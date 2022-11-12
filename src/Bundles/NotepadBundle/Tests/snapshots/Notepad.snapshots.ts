import { mount } from '@vue/test-utils'
import { expect, it, describe } from 'vitest'
import { createTestingPinia } from '@pinia/testing'
import Notepad from '@Bundles/NotepadBundle/Components/Notepad.vue'

const defaultWrapper = mount(Notepad, {
  global: {
    plugins: [
      createTestingPinia({
        initialState: {
          program: { modalNotepad: true },
        },
      }),
    ],
  },
})

describe('[NotepadBundle]<Snapshots>(Notepad)', async () => {
  it('renders correctly component', () => {
    expect(defaultWrapper.element).toMatchSnapshot()
  })
})
