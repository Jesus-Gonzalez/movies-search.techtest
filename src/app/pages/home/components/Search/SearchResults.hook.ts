import React from 'react';
import { useHistory } from 'react-router-dom';

export interface IHook {
  handleGotoDetail: (film: IFilm) => void;
}

export default function
  useSearchResults(): IHook {
    const history = useHistory();

    const handleGotoDetail = React.useCallback((film: IFilm) => {
      history.push(`/film/${film.episode_id}`);
    }, [history]);

    return {
      handleGotoDetail,
    };
  }
