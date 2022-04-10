// @src/components/Modal.jsx

import { React, useState, useEffect } from "react";
import styles from "./ModalComponent.module.css";
import { RiCloseLine } from "react-icons/ri";
import { Catalogues } from "./TableMock";
import Checkbox from "./CheckboxComponent"

const Modal = ({ setIsOpen }) => {


    return (
        <>
            <div className={styles.darkBG} onClick={() => setIsOpen(false)} />
            <div className={styles.centered}>
                <div className={styles.modal}>
                    {/* MODAL HEADER */}
                    <div className={styles.modalHeader}>
                        <h5 className={styles.heading}>Novo Lead</h5>
                    </div>

                    {/* MODAL CLOSE BUTTON */}
                    <button className={styles.closeBtn} onClick={() => setIsOpen(false)}>
                        <RiCloseLine style={{ marginBottom: "-3px" }} />
                    </button>

                    {/* MODAL CONTENT */}
                    <div className={styles.modalContent}>
                        <form action="" className={styles.modalForm}>
                            <input placeholder="Nome" name="name" type="text" />
                            <input placeholder="Telefone" name="phone" type="text" />
                            <input placeholder="E-mail" name="email" type="text" />
                            <table name="leadsTable" className={styles.oportunityTable}>
                                <thead>
                                </thead>
                                <tbody>

                                </tbody>
                            </table>
                        </form>
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