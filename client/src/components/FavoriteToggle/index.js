import React, {useMemo} from "react";
import * as S from "./StyledFavoriteToggle.js";

import { useStore } from "../../contexts/StoreContext";
import useLocalStorage from '../../hooks/useLocalStorage';
import Icon from "../Icon";

function FavoriteToggle({ product }) {
  const [state, dispatch] = useStore();
  const [storedValue, setStoredValue] = useLocalStorage('favorites')

  const memoizedIndex = useMemo(() => {
    return state.favorites.findIndex(cur => cur.id === product.id)
  }, [state.favorites, product.id])

  const handleClick = () => {
    if (memoizedIndex !== -1) {
      dispatch({type: useStore.types.REMOVE_FAVORITE, payload: memoizedIndex })
    } else {
      dispatch({type: useStore.types.ADD_FAVORITE, payload: product})
      setStoredValue([...storedValue, 'test'])
    }
  };

  return (
    <S.Button onClick={handleClick}>
      {memoizedIndex !== -1 ? <Icon favoriteSolid /> : <Icon favoriteOutline />}
    </S.Button>
  );
}


export default FavoriteToggle;
