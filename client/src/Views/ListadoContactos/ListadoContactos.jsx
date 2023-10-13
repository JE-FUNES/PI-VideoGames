import React, {useEffect} from "react";
import styles from "./ListadoContactos.module.css";
import { getContacts, deleteContacts } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";


const ListadoContactos = ({logOut}) => {

    const contacts = useSelector((state) => state.contacts);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getContacts());
    }, [dispatch]);

    
    const deleteContact = (id) => {
        const isConfirmed = window.confirm("Are you sure you want to delete this contact? This action cannot be undone.");
        
        if (isConfirmed) {
          // Si el usuario confirma la acción, ejecuta la acción de eliminar
          dispatch(deleteContacts(id))
          .then(() => {
            dispatch(getContacts()); // vuelve a hacer get para qe se actualice la lista
          });
        }
        };

   

    return (
        <div className={styles.container}>
        <div className={styles.container} 
             style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h2>Contacts to reply</h2>
            <button className={styles.boton} onClick={() => logOut()}>Log Out</button>
        </div>

        <table className={styles.table}>
            <thead>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Email</th>
                <th>Stars</th>
                <th>Reason</th>
                <th>Reply</th>
            </tr>
            </thead>
            <tbody>
             {contacts.map((contact) => (
                <tr key={contact.id}>
                <td>{contact.id}</td>
                <td>{contact.name}</td>
                <td>
                    <a href={`mailto:${contact.email}?subject=Contacto desde Videogames Info`}>{contact.email}</a>
                </td>
                <td>{contact.likedPage}</td>
                <td>{contact.reason}</td>
                <td><button className={styles.botonDelete} onClick={() => deleteContact(contact.id)}>Delete</button></td>
                </tr>
            ))} 
            </tbody>
        </table>
        
        </div>
    );


}

export default ListadoContactos;