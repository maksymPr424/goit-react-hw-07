import { useDispatch, useSelector } from "react-redux";
import css from "./SearchBox.module.css";
import { useId } from "react";
import { setFilter } from "../../redux/filtersSlice";
import { selectNameFilter } from "../../redux/selectors";

export default function SearchBox() {
  const searchId = useId();
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  const search = (e) => {
    const fullName = e.target.value.trim();
    dispatch(setFilter(fullName));
  };

  return (
    <div className={css.search}>
      <label className={css.label} htmlFor={searchId}>
        Find contacts by name
      </label>
      <input
        onChange={search}
        value={filter}
        className={css.input}
        type="text"
        id={searchId}
        name="searchBox"
      />
    </div>
  );
}
