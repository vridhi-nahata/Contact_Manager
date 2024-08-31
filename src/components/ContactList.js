import React,{useRef} from 'react';
import ContactCard from './ContactCard';
import { Link } from 'react-router-dom';

const ContactList = (props) => {
    const inputElement= useRef(""); //Initialize the useRef
    const deleteContactHandler = (id) => {
        props.removeContactHandler(id);
    };

    const renderContactList = props.contacts.map((contact) => {
        return (
            <ContactCard contact={contact} clickHandler={deleteContactHandler} key={contact.id} />
        );
    });

    const getSearchTerm= () => {
        props.searchKeyword(inputElement.current.value);
    };

    return (
        <div className="ui celled list">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '40px 0 0 0' }}>
                <h2>Contact List</h2>
                <Link to="/add">
                    <button className="ui button blue" style={{margin:"10px"}}>Add contact</button>
                </Link>
            </div>
            <div className="ui search" style={{ marginBottom: "10px", width: '100%' }}>
                <div className="ui icon input" style={{ width: '100%' }}>
                    <input ref={inputElement} type="text" placeholder="Search Contact" className="prompt" value={props.term} onChange={getSearchTerm} style={{ width: '100%' }} />
                    <i className="search icon"></i>
                </div>
            </div>
            {renderContactList.length < 1 ? <div className="noData">No Result Found!</div> : renderContactList}
        </div>
    );
};

export default ContactList;
