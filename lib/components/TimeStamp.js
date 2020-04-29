import React from 'react';
import storeProvider from './StoreProvider';
class TimeStamp extends React.Component {
  render() {
    return (
      <div>
        {this.props.timestampDisplay}
      </div>
    );
  }

  static timeDisplay = timestamp => timestamp.toLocaleString([], { hour: '2-digit', minute: '2-digit'});
}

function extraProps(store) {
  return {
    timestampDisplay: TimeStamp.timeDisplay(store.getState().timestamp)
  };
}

export default storeProvider(extraProps)(TimeStamp);
