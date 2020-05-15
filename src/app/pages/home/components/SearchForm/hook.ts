import React from 'react';

interface IHookConfiguration {}

export interface IHook {
  inputSearchValue: string;
  handleChangeInputSearch: (event: React.FormEvent<EventTarget>) => void;
  handleSubmitForm: () => void;
}

export default function
  useSearchForm(configuration: IHookConfiguration): IHook {
    const [inputSearchValue, setInputSearchValue] = React.useState('');

    const handleChangeInputSearch = React.useCallback(
      (event: React.FormEvent<EventTarget>) => {
        const target = event.target as HTMLInputElement;
        setInputSearchValue(target.value);
      }, [setInputSearchValue]);

    React.useEffect(() => {
      console.log('value', inputSearchValue);
    }, [inputSearchValue]);

    return {
      inputSearchValue,
      handleChangeInputSearch,
      handleSubmitForm: () => void 0,
    };
  }
