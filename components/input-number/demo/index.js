/**
 * @Author:  GinaLu <ljq>
 * @Date:   2017-05-16 14:49:49
 * @Last modified by:   ljq
 * @Last modified time: 2017-05-16 18:33:09
 */

/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';

const MOUNT_NODE = document.getElementById('app');
function onChange(value) {
  console.log('changed', value);
}
let render = () => {
  /* eslint-disable no-unused-vars */
  let InputNumber = require('../index').default;

  /* eslint-disable no-unused-vars */
  function Demo() {
    return (
      <div className="td">
      正常demo
        <InputNumber step={0.011} min={1} max={123} defaultValue={3} size="large" placeholder="dsds" />
      </div>
    );
  }

  ReactDOM.render(<Demo />, MOUNT_NODE);
};

try {
  render();
} catch (e) {
  console.log(e);
}

if (module.hot) {
  module.hot.accept(['../index'], () => {
    setTimeout(() => {
      ReactDOM.unmountComponentAtNode(MOUNT_NODE);
      render();
    });
  });
}