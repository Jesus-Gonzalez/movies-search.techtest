import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';

import { clear, remove } from 'core/store/actions/history';

import { HistoryList } from './__components';
import { IHook } from './HistoryListContainer.hook';

interface IPropsConnect {
  films: IFilm[];
  remove: (film: IFilm) => void;
  clear: () => void;
}

export type IProps = IPropsConnect & IHook;

const HistoryListContainer = (props: IProps) => {
  const { films } = props;

  if (!films || !films.length) {
    return <p>Empty history</p>;
  }

  return (
    <HistoryList
      {...props}
    />
  );
};

const mapStateToProps = (state: any) => ({
  films: state.history.items,
});

const mapDispatchToProps = (dispatch: any) => ({
  remove: compose(dispatch, remove),
  clear: compose(dispatch, clear),
});

const HistoryListContainerConnected = connect(mapStateToProps, mapDispatchToProps)(HistoryListContainer);

export default HistoryListContainerConnected;
