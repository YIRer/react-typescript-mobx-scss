import * as React from 'react';
import { inject, observer } from 'mobx-react';
import loadable from '@loadable/component';
import { ICommonStore } from 'stores/commons';

interface AppProps {
  commonStore?: ICommonStore;
}

const LazyComponent = loadable(() => import('./Children'));

@observer
export class App extends React.Component<AppProps> {
  render() {
    const { title } = this.props.commonStore;
    return (
      <div>
        {title}
        hels!lo!
        <LazyComponent />
      </div>
    );
  }
}

export default inject('commonStore')(App);
