import App, { Container } from 'next/app'
import React, {useReducer} from 'react'


class MyApp extends App {
  render() {
  const {Component, pageProps} = this.props

    return (
      <Container>
        <Component {...pageProps} />
      </Container>
    )
  }
}