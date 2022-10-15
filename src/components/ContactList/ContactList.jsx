export const ContactList = ({ contacts }) => {
  return (
    <div>
      <ul>
        {contacts.map(item => {
          return (
            <li key={item.id}>
              <span>{item.name}</span>
              <span>{item.number}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
