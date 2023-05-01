import { UserConfig as VitestConfigInterface } from 'vitest/config'

const vitestConfig = {
  globals: true,
  environment: 'jsdom',
  include: ['**/*.units.ts', '**/*.snapshots.ts'],
  setupFiles: ['../configs/vue-test-utils.config.ts'],
  resolveSnapshotPath: (testPath, snapshotExtension) => {
    return (
      testPath.replace('/__snapshots__', '').replace('.ts', '') +
      snapshotExtension
    )
  },
} as VitestConfigInterface['test']

export default vitestConfig
