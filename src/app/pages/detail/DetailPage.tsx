import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const DetailPage = ({ dispatch }: any) => {
  dispatch({
    type: 'SALUDAR',
    payload: {
      content: 'Hola mundo'
    }
  });

  return (
    <>
      <p>detail</p>
      <Link to="/">Back Home</Link>
    </>
  );
}

const DetailPageConnected = connect(null, (dispatch: any) => ({ dispatch }))(DetailPage);

export default DetailPageConnected;
