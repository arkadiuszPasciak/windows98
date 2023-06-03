import { expect, it, describe } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useProgramStore } from '@APP|Bundles/ProgramBundle/Stores/Program.stores'

setActivePinia(createPinia())
const store = useProgramStore()

describe('[ProgramBundle]<Stores>(useProgramStore)', () => {
  it('turns on and off Calculator', () => {
    expect(store.modalCalculator).equal(false)

    store.updateCalculatorModal(true)

    expect(store.modalCalculator).equal(true)

    store.updateCalculatorModal(false)

    expect(store.modalCalculator).equal(false)
  })

  it('turns on and off Documentation', () => {
    expect(store.modalDocumentation).equal(false)

    store.updateDocumentationModal(true)

    expect(store.modalDocumentation).equal(true)

    store.updateDocumentationModal(false)

    expect(store.modalDocumentation).equal(false)
  })

  it('turns on and off Media Player', () => {
    expect(store.modalMediaPlayer).equal(false)

    store.updateMediaPlayerModal(true)

    expect(store.modalMediaPlayer).equal(true)

    store.updateMediaPlayerModal(false)

    expect(store.modalMediaPlayer).equal(false)
  })

  it('turns on and off Notepad', () => {
    expect(store.modalNotepad).equal(false)

    store.updateNotepadModal(true)

    expect(store.modalNotepad).equal(true)

    store.updateNotepadModal(false)

    expect(store.modalNotepad).equal(false)
  })

  it('turns on and off Run', () => {
    expect(store.modalRun).equal(false)

    store.updateRunModal(true)

    expect(store.modalRun).equal(true)

    store.updateRunModal(false)

    expect(store.modalRun).equal(false)
  })

  it('turns on and off Settings', () => {
    expect(store.modalSettings).equal(false)

    store.updateSettingsModal(true)

    expect(store.modalSettings).equal(true)

    store.updateSettingsModal(false)

    expect(store.modalSettings).equal(false)
  })

  it('turns on and off ShutDown', () => {
    expect(store.modalShutDown).equal(false)

    store.updateShutDownModal(true)

    expect(store.modalShutDown).equal(true)

    store.updateShutDownModal(false)

    expect(store.modalShutDown).equal(false)
  })

  it('turns on and off TicTacToe', () => {
    expect(store.modalTicTacToe).equal(false)

    store.updateTicTacToeModal(true)

    expect(store.modalTicTacToe).equal(true)

    store.updateTicTacToeModal(false)

    expect(store.modalTicTacToe).equal(false)
  })

  it('turns on and off Timer', () => {
    expect(store.modalTimer).equal(false)

    store.updateTimerModal(true)

    expect(store.modalTimer).equal(true)

    store.updateTimerModal(false)

    expect(store.modalTimer).equal(false)
  })
})
