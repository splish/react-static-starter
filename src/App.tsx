import { css } from 'emotion'
import * as React from 'react'

export class App extends React.Component {
  public render() {
    return (
      <p
        className={css({
          background: 'pink'
        })}
      >
        To get startet, edit <code>src/App.tsx</code> and save to reload.
      </p>
    )
  }
}
