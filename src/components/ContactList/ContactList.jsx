import { useDispatch, useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { useEffect } from "react";
import { getContacts } from "../../redux/contactsOps";
import {
  selectError,
  selectFilteredContacts,
  selectLoading,
} from "../../redux/selectors";
import toast, { Toaster } from "react-hot-toast";

export default function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectFilteredContacts);
  const isError = useSelector(selectError);
  const isLoading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  useEffect(() => {
    if (isLoading) {
      const notifyPromise = new Promise((resolve, reject) => {
        !isError ? resolve() : reject();
      });

      toast.promise(notifyPromise, {
        loading: "Loading",
        success: () => `Successfully action!`,
        error: () => `Ooops, please reload page!`,
      });
    }
  }, [isLoading, isError]);

  return (
    <>
      <ul className={css.list}>
        {contacts.map(({ id, name, number }) => {
          return (
            <li key={id} className={css.listItem}>
              <Contact name={name} number={number} id={id} />
            </li>
          );
        })}
      </ul>
      <Toaster />
    </>
  );
}
