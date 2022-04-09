// @src/components/Modal.jsx

import React from "react";
import styles from "./ModalComponent.module.css";
import { RiCloseLine } from "react-icons/ri";

const Modal = ({ setIsOpen }) => {
    return (
        <>
            <div className={styles.darkBG} onClick={() => setIsOpen(false)} />
            <div className={styles.centered}>
                <div className={styles.modal}>
                    {/* MODAL HEADER */}
                    <div className={styles.modalHeader}>
                        <h5 className={styles.heading}>Dialog</h5>
                    </div>

                    {/* MODAL CLOSE BUTTON */}
                    <button className={styles.closeBtn} onClick={() => setIsOpen(false)}>
                        <RiCloseLine style={{ marginBottom: "-3px" }} />
                    </button>

                    {/* MODAL CONTENT */}
                    <div className={styles.modalContent}>
                        Are you sure you want to delete the item?
                    </div>
                    
                    {/* MODAL FOOTER */}
                    <div className={styles.modalActions}>
                        <div className={styles.actionsContainer}>
                            <button className={styles.deleteBtn} onClick={() => setIsOpen(false)}>
                                Delete
                            </button>
                            <button
                                className={styles.cancelBtn}
                                onClick={() => setIsOpen(false)}
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Modal;