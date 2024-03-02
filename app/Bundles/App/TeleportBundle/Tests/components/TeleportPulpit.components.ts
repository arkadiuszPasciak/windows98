import TeleportPulpitTesting from '@APP|Bundles/TeleportBundle/Services/TeleportPulpitTesting.services'

const TeleportPulpitTestingService = new TeleportPulpitTesting()

describe('[TeleportBundle]<Components>(TeleportPulpit)', async () => {
  it('renders correctly component and turn on/off modal calculator', () => {
    TeleportPulpitTestingService.testComponent({
      name: 'Calculator',
      width: 195,
      height: 220,
    })
  })

  it('renders correctly component and turn on/off modal notepad', () => {
    TeleportPulpitTestingService.testComponent({
      name: 'Notepad',
      width: 600,
      height: 450,
    })
  })

  it('renders correctly component and turn on/off modal run', () => {
    TeleportPulpitTestingService.testComponent({
      name: 'Run',
      width: 330,
      height: 165,
    })
  })

  it('renders correctly component and turn on/off modal settings', () => {
    TeleportPulpitTestingService.testComponent({
      name: 'Settings',
      width: 420,
      height: 415,
    })
  })

  it('renders correctly component and turn on/off modal shut down', () => {
    TeleportPulpitTestingService.testComponent({
      name: 'ShutDown',
      width: 330,
      height: 180,
    })
  })

  it('renders correctly component and turn on/off modal tic tac toe', () => {
    TeleportPulpitTestingService.testComponent({
      name: 'TicTacToe',
      width: 330,
      height: 220,
    })
  })

  it('renders correctly component and turn on/off modal timer', () => {
    TeleportPulpitTestingService.testComponent({
      name: 'Timer',
      width: 330,
      height: 225,
    })
  })
})
