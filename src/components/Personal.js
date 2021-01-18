import React, { useState, useEffect } from 'react';

// Starting on rewrite of class components into functions with hooks
export default function Personal(props) {
  const [firstName, setFirstName] = useState('');
  document.title = firstName;
}
