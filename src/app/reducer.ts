import * as Actions from './actions';
import { Post } from './models';

export type Action = Actions.ALL;

const defaultState: Post = {
    likes: 0,
};

const newState = (state: any, newData: any) => {
    return Object.assign({}, state, newData);
};

export function postReducer (state: Post = defaultState, action: Action) {
    switch (action.type) {
    case Actions.UPVOTE:
      return newState(state, { likes: state.likes + 1 });

    case Actions.DOWNVOTE:
      return newState(state, { likes: state.likes - 1 });

    case Actions.RESET:
      return defaultState;

    default:
      return state;
}
}