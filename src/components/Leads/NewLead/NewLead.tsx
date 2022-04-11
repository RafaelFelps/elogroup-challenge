import { useState } from 'react';
import Modal from './Modal/ModalComponent';
import styles from './NewLead.module.css';


function NewLead() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className={styles.newLead}>
            <button className={styles.newLeadButton} onClick={() => setIsOpen(true)} >
                + Novo Lead
            </button>
            {isOpen && <Modal setIsOpen={setIsOpen} />}
        </div>

    );
}


export default NewLead;