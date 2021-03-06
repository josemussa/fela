/* @flow */
import { createElement } from 'inferno-create-element'

import RendererProvider from './RendererProvider'

import deprecate from './_deprecate'

export default function Provider(props: Object): Object {
  deprecate(
    'Importing `Provider` from inferno-fela is deprecated. Import `RendererProvider` instead.\nSee http://fela.js.org/docs/api/bindings/renderer-provider'
  )

  return createElement(RendererProvider, props)
}
