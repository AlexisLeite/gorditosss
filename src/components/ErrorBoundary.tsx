import { Box, Typography } from '@mui/material'
import React, { Component, ErrorInfo, ReactNode } from 'react'

class ErrorBoundary extends Component<
  { children: ReactNode },
  { hasError: boolean; error: null | Error }
> {
  state = {
    hasError: false,
    error: null,
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Error caught by error boundary:', error, errorInfo)
    this.setState({ hasError: true, error })
  }

  render() {
    if (this.state.hasError) {
      return (
        <Box>
          <Typography variant="h3">Error</Typography>
          <Typography variant="body1">{String(this.state.error)}</Typography>
        </Box>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
