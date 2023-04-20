// @from https://github.com/yargs/yargs/blob/f91d9b334ad9cfce79a89c08ff210c622b7c528f/lib/utils/process-argv.ts

function getProcessArgvBinIndex() {
  const isElectronApp = !!(process as ElectronProcess).versions.electron
  const isBundled = isElectronApp && !(process as ElectronProcess).defaultApp

  return isBundled ? 0 : 1
}

export function hideBin(argv: string[]) {
  return argv.slice(getProcessArgvBinIndex() + 1)
}

export function getProcessArgvBin() {
  return process.argv[getProcessArgvBinIndex()]
}

interface ElectronProcess extends NodeJS.Process {
  defaultApp?: boolean
  versions: NodeJS.ProcessVersions & {
    electron: string
  }
}
