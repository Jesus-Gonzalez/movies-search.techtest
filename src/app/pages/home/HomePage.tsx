import React from 'react';
import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <>
      <p>home</p>
      <Link to="/detail">Open Detail</Link>
    </>
  );
}
