
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import * as TestUtils from 'react-dom/test-utils'
import App from '../src/components/app'

it('app is rendered', () => {
  // Render App in the document
  const appElement: any = TestUtils.renderIntoDocument(<App/>)

  const appNode = ReactDOM.findDOMNode(appElement)

  // Verify text content
  expect(appNode.textContent).toEqual('Hello World!Foo to the barz')
})