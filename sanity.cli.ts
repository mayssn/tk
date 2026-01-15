import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'sbzov2e3',
    dataset: 'production',
  },
  deployment: {
    autoUpdates: true,
    appId: 'j09rumtaovdpde3oyz3839ch',
  },
})
