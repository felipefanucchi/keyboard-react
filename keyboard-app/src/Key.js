import React from 'react';

function Key({ note, trigger }) {
    return (
      <div className="key">
        {note} || {trigger}
      </div>
    );
  }
  export default Key;