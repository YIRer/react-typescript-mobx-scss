import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Provider } from 'mobx-react';
import stores from './stores';
import { hot } from 'react-hot-loader/root';
import App from 'components/App';
const RenderComp = hot(App);
ReactDom.render(
  <Provider {...stores}>
    <RenderComp />
  </Provider>,

  document.getElementById('root')
);
