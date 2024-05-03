/* eslint-disable */
import React from 'react'

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { error: false }
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { error: error }
  }

  render() {
    if (this.state.error) {
      if (this.props.errorComponent) {
        return this.props.errorComponent
      }

      return (
        <div className={'bg-red-100'}>
          <div className='container m-auto pb-20 pl-3 pr-3 pt-20 text-red-950'>
            <p className={'text-2xl font-bold'}>There seems to be a problem:</p>
            <p className={'text-xl'}>{this.state.error.stack.split('Error:')[1].split('\n')[0]}</p>

            {this.props.optionalMessage && (
              <div
                className={'mt-10 text-right text-lg'}
                dangerouslySetInnerHTML={{ __html: this.props.optionalMessage }}
              />
            )}
          </div>
        </div>
      )
    }

    return this.props.children
  }
}
