import PropTypes from 'prop-types';
import React from 'react';

const storeProvider = (extraProps) => (Component) => {
  // const withStore = (props, {store}) => {
  //   return <Component {...props} store={store} />;
  // };
  //
  // withStore.contextTypes = {
  //   store: PropTypes.object
  // };
  //
  // withStore.displayName = `${Component.name}Container`;
  // return withStore;
  return class extends React.Component {
    static displayName = `${Component.name}Container`;
    static contextTypes = {
      store: PropTypes.object
    };

    render() {
      return <Component
        {...this.props}
        {...extraProps(this.context.store, this.props)}
        store={this.context.store} />;
    }
  };
};

export default storeProvider;
