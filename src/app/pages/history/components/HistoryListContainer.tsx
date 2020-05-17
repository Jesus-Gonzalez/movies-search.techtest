import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';

import { setLoading } from 'core/store/actions/films';
import { clear, remove } from 'core/store/actions/history';

import { HistoryList } from './__components';
import useHistoryList, { IHook } from './HistoryListContainer.hook';

interface IPropsConnect {
  films: IFilmObject[];
  clear: () => void;
  remove: (film: IFilmObject) => void;
  setLoading: (loading: boolean) => void;
}

export type IProps = IPropsConnect & IHook;

const HistoryListContainer = (props: IProps) => {
  const hook = useHistoryList(props);

  const { films } = props;

  if (!films || !films.length) {
    return <p>Empty history</p>;
  }

  return (
    <HistoryList
      {...props}
      {...hook}
    />
  );
};

const mapStateToProps = (state: any) => ({
  films: state.history.items,
});

const mapDispatchToProps = (dispatch: any) => ({
  clear: compose(dispatch, clear),
  remove: compose(dispatch, remove),
  setLoading: compose(dispatch, setLoading),
});

const HistoryListContainerConnected = connect(mapStateToProps, mapDispatchToProps)(HistoryListContainer);

export default HistoryListContainerConnected;
