import "./App.css";
import allContacts from "./contacts.json";
import React, { useState } from "react";

function App() {
  const [contacts, setContacts] = useState(allContacts.slice(0, 5));
  console.log(contacts);

  function AddRandomContact() {
    const randomContact =
      allContacts[Math.floor(Math.random() * allContacts.length)];

    if (contacts.includes(randomContact)) {
      AddRandomContact();
    } else {
      setContacts([...contacts, randomContact]);
    }
  }

  function SortByName() {
    setContacts(
      [...contacts].sort((a, b) => {
        return a.name.localeCompare(b.name);
      })
    );
  }

  function SortByPopularity() {
    setContacts(
      [...contacts].sort((a, b) => {
        return b.popularity - a.popularity;
      })
    );
  }

  function DeleteContact(id) {
    setContacts(
      [...contacts].filter((contact) => {
        return contact.id !== id;
      })
    );
  }

  return (
    <div className="App">
      <h1>IronContacts</h1>
      <button onClick={() => AddRandomContact()}>Add Random Contact</button>
      <button onClick={() => SortByName()}>Sort by name</button>
      <button onClick={() => SortByPopularity()}>Sort by popularity</button>
      <div className="AllContacts">
        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Won an Oscar</th>
              <th>Won an Emmy</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <tr key={contact.id}>
                <td>
                  <img src={contact.pictureUrl} width={60} alt="" />
                </td>
                <td>{contact.name}</td>
                <td>{contact.popularity}</td>
                <td>{contact.wonOscar && "🏆"}</td>
                <td>{contact.wonEmmy && "🏆"}</td>
                <td>
                  <button
                    id={contact.id}
                    onClick={() => DeleteContact(contact.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default App;
