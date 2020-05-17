// every action type has the same pattern

import { addToHistory, remove, clear } from 'core/store/actions/history'
import historyReducer from '../history';

it('processes actions with a processing label', () => {
  const a = { id: 123, name: 'hello world', url: 'a' };
  const b = { id: 321, name: 'hello world', url: 'b' };
  let state = { items: [] };

  state = historyReducer(state, addToHistory(a));
  expect(state).toMatchSnapshot();

  state = historyReducer(state, addToHistory(b));
  expect(state).toMatchSnapshot();

  state = historyReducer(state, remove(a));
  expect(state).toMatchSnapshot();

  state = historyReducer(state, clear());
  expect(state).toMatchSnapshot();
});
