import { useDispatch, useSelector } from "react-redux";

import {
  changeFilter,
  filterValue,
} from "redux/contact-reducer/contact-reducer";

export const useFilter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(filterValue);
  const onUseFilter = (value) => dispatch(changeFilter(value));

  return {
    filter,
    onChangeFilter: onUseFilter,
  };
};
