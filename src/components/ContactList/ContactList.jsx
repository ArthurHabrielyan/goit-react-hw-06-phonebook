import { ContactListItem } from "./ContactListItem";
import { useContacts } from "../../reduxHooks/contactsHook";
import { useFilter } from "../../reduxHooks/filterHook";

export const ContactList = () => {
  const { contacts, deleteContact } = useContacts();
  const { filter } = useFilter();

  const getVisibleContacts = () => {
    const toLowerCaseContacts = filter.toLocaleLowerCase();
    if (!contacts) {
      return;
    }

    return contacts.filter((contact) =>
      contact.name.toLocaleLowerCase().includes(toLowerCaseContacts)
    );
  };

  const filterContacts = getVisibleContacts();

  return (
    <div>
      <ul>
        {filterContacts.length > 0 &&
          filterContacts.map(({ name, number, id }) => {
            return (
              <ContactListItem
                name={name}
                number={number}
                key={id}
                id={id}
                deleteContact={deleteContact}
              />
            );
          })}
      </ul>
    </div>
  );
};
