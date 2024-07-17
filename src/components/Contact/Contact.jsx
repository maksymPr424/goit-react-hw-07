import css from "./Contact.module.css";
import { PiPhoneCallFill } from "react-icons/pi";
import { BsPeopleFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { delateContact } from "../../redux/contactsOps";

export default function Contact({ name, number, id }) {
  const dispatch = useDispatch();

  const del = () => {
    dispatch(delateContact(id));
  };

  return (
    <>
      <>
        <div>
          <h2 className={css.text}>
            <BsPeopleFill className={css.icon} /> {name}
          </h2>
          <p className={css.text}>
            <PiPhoneCallFill className={css.icon} />
            {number}
          </p>
        </div>
        <button onClick={del} className={css.delBtn}>
          Delete
        </button>
      </>
    </>
  );
}
