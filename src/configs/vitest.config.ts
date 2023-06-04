import { UserConfig as VitestConfigInterface } from 'vitest/config'
import { getPathMain } from './path.config'

const vitestConfig = {
  globals: true,
  cache: {
    dir: getPathMain('node_modules/.vitest'),
  },
  environment: 'jsdom',
  include: ['**/*.units.ts', '**/*.snapshots.ts'],
  setupFiles: [getPathMain('src/configs/vue-test-utils.config.ts')],
  resolveSnapshotPath: (testPath, snapshotExtension) => {
    return (
      testPath.replace('/__snapshots__', '').replace('.ts', '') +
      snapshotExtension
    )
  },
} as VitestConfigInterface['test']

export default vitestConfig
