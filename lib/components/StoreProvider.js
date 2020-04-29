import PropTypes from 'prop-types';
import React from 'react';

const storeProvider = (extraProps = () => {}) => (Component) => {
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
  return class extends React.PureComponent {
    static displayName = `${Component.name}Container`;
    static contextTypes = {
      store: PropTypes.object
    };

    usedState = () => {
      return extraProps(this.context.store, this.props);
    }

    state = this.usedState();

    onStoreChange = () => {
      // this.setState(this.props.store.getState());
      if (this.subscriptionId) {
        // this.forceUpdate();
        this.setState(this.usedState());
      }
    }

    componentDidMount() {
      this.subscriptionId = this.context.store.subscribe(this.onStoreChange);
    }

    componentWillUnmount() {
      this.context.store.unsubscribe(this.subscriptionId);
      this.subscriptionId = null;
    }

    render() {
      return <Component
        {...this.props}
        {...this.usedState()}
        store={this.context.store} />;
    }
  };
};

export default storeProvider;
