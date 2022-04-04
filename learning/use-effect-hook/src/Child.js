import React from 'react';

function Child(props) {
  console.log('Child is re-rendered.');

  return <div>Child</div>;
}

export default React.memo(Child);
