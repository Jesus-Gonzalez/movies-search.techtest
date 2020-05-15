import React from 'react';

export interface IHookConfiguration {
  films: IFilm[];
  filterFilms: (term: string) => void;
  handleSubmit: () => void;
}

export interface IHook {
  handleChangeInputSearch: (event: React.FormEvent<EventTarget>) => void;
  handleSubmitForm: (event: React.FormEvent) => void;
  inputSearchValue: string;
  inputRef: React.RefObject<HTMLInputElement>;
}

export default function
  useSearchForm(configuration: IHookConfiguration): IHook {
    const { filterFilms, handleSubmit } = configuration;
    const [inputSearchValue, setInputSearchValue] = React.useState('');

    const inputRef = React.useRef() as React.RefObject<HTMLInputElement>;

    const handleChangeInputSearch = React.useCallback(
      (event: React.FormEvent<EventTarget>) => {
        const target = event.target as HTMLInputElement;
        setInputSearchValue(target.value);
        filterFilms(target.value);
      }, [setInputSearchValue, filterFilms]);

    const handleSubmitForm = (event: React.FormEvent) => {
      event.preventDefault();
      handleSubmit();
      inputRef.current?.blur();
    };

    return {
      handleChangeInputSearch,
      handleSubmitForm,
      inputRef,
      inputSearchValue,
    };
  }
