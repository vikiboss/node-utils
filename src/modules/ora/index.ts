import ora from 'ora'

export const loading = ora({
  color: 'cyan',
  spinner: {
    interval: 50,
    frames: ['◢', '◣', '◤', '◥']
  }
})

export * from 'ora'
