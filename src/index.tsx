import * as React from 'react'
import * as ReactDOM from 'react-dom'

import { App } from './App'

export default App

if (typeof document !== 'undefined') {
  const render =
    process.env.NODE_ENV === 'production' ? ReactDOM.hydrate : ReactDOM.render

  const el = document.getElementById('root')

  if (!el) {
    throw new Error('#root not found')
  }

  render(<App />, document.getElementById('root'))
}
