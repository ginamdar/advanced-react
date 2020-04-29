import React from 'react';
import storeProvider from './StoreProvider';
class TimeStamp extends React.Component {
  render() {
    return (
      <div>
        {this.props.timestamp.toLocaleString([], { hour: '2-digit', minute: '2-digit'})}
      </div>
    );
  }

  timeDisplay = timestamp => timestamp.toLocaleString([], { hour: '2-digit', minute: '2-digit'});

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    return (
      this.timeDisplay(this.props.timestamp) !== this.timeDisplay(nextProps.timestamp)
    );
  }
}

function extraProps(store) {
  return {
    timestamp: store.getState().timestamp
  };
}

export default storeProvider(extraProps)(TimeStamp);
