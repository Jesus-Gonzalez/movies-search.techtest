import React from 'react';
import { useHistory } from 'react-router-dom';

export interface IHookConfiguration {
  setLoading: (loading: boolean) => void;
}

export interface IHook {
  handleGotoDetail: (film: IFilm) => void;
}

export default function
  useSearchResults(configuration: IHookConfiguration): IHook {
    const { setLoading } = configuration;

    const history = useHistory();

    const handleGotoDetail = React.useCallback((film: IFilm) => {
      setLoading(true);
      const frags = film.url.split('/');
      const idIndex = frags.length - 2;
      history.push(`/film/${frags[idIndex]}`);
    }, [history, setLoading]);

    return {
      handleGotoDetail,
    };
  }
