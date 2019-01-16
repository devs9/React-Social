import React, { Component } from 'react'
import Loader from '../../atom/Loader'

export default WrappedComponent =>
  class WithLoadingComponent extends Component {
    render() {
      const { isLoading } = this.props
      return isLoading ? <Loader /> : <WrappedComponent {...this.props} />
    }
  }
