import React from 'react';
import './MyComponent.css'; // Import the CSS file

const MyComponent: React.FC = () => {
  return (
    <div className="my-component">
      <h1>Hello from MyComponent!</h1>
      <p>This is a paragraph of text within my component.</p>
    </div>
  );
};

export default MyComponent;