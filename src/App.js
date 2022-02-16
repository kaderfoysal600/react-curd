import { useEffect, useState } from "react";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { db } from "./firebase.config";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "users");

  const createUser = async () => {
    await addDoc(usersCollectionRef, { name: name, age: Number(age) });
  };
  const updateUser = async (id, age) => {
    const userDoc = doc(db, "users", id);
    const newFields = { age: age + 1 };
    updateDoc(userDoc, newFields);
  };
  const deleteUser = async (id) => {
    const userDoc = doc(db, "users", id);
    deleteDoc(userDoc)
  }
  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    console.log(users);
    getUsers();
  }, []);
  return (
    <div className="App">
      <input
        type="name"
        placeholder="name.."
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="age.."
        onChange={(e) => setAge(e.target.value)}
      />
      <button onClick={createUser}>Create user</button>
      {users.map((user) => (
        <div>
          <h1>{user.name}</h1>
          <h1>{user.age}</h1>
          <button
            onClick={() => {
              updateUser(user.id, user.age);
            }}
          >
            Increase Age
          </button>
          <button onClick = {() => {deleteUser(user.id)}}>Delete User</button>
        </div>
      ))}
    </div>
  );
}

export default App;
