import { defu } from './src/modules/defu'

const config = {
  name: 'Viki',
  age: 3,
  hobby: ['bike', 'hike']
}

const res = defu(config, {
  age: 4,
  hobby: ['run'],
  sex: '1'
})
