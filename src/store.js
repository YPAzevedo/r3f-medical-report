import React from "react";

const StoreStateContext = React.createContext(null);
const StoreDispatchContext = React.createContext(null);

function getRandomColor() {
  return "#" + (((1 << 24) * Math.random()) | 0).toString(16);
}

export const actionTypes = {
  addDot: "ADD_DOT",
  removeDot: "REMOVE_DOT",
  upadteTitle: "UPDATE_TITLE",
  updateDescription: "UPDATE_DESCRIPTION",
};

function storeReducer(state, action) {
  switch (action.type) {
    case actionTypes.addDot: {
      const randomColor = getRandomColor();
      return {
        ...state,
        dots: [
          ...state.dots,
          {
            title: `Point ${randomColor}`,
            position: [action.x, action.y, action.z],
            color: randomColor,
            description: "",
          },
        ],
      };
    }
    case actionTypes.removeDot: {
      return {
        ...state,
        dots: state.dots.filter((dot) => dot.color !== action.color),
      };
    }
    case actionTypes.upadteTitle: {
      return {
        ...state,
        dots: state.dots.map((dot) =>
          dot.color === action.color ? { ...dot, title: action.title } : dot
        ),
      };
    }
    case actionTypes.updateDescription: {
      return {
        ...state,
        dots: state.dots.map((dot) =>
          dot.color === action.color
            ? { ...dot, description: action.description }
            : dot
        ),
      };
    }
    default:
      throw new Error(`Unknown action type: ${action.type}`);
  }
}

export default function StoreProvider({ children }) {
  const [store, dispatch] = React.useReducer(storeReducer, { dots: [] });

  return (
    <StoreDispatchContext.Provider value={dispatch}>
      <StoreStateContext.Provider value={store}>
        {children}
      </StoreStateContext.Provider>
    </StoreDispatchContext.Provider>
  );
}

export function useStoreState() {
  const state = React.useContext(StoreStateContext);
  return state;
}

export function useStoreDispatch() {
  const dispatch = React.useContext(StoreDispatchContext);
  return dispatch;
}
