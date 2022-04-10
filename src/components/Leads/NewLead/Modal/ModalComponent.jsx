// @src/components/Modal.jsx

import { React, useState, useEffect } from "react";
import styles from "./ModalComponent.module.css";
import { RiCloseLine } from "react-icons/ri";
import { Catalogues } from "./TableMock";
import Checkbox from "./CheckboxComponent"

const Modal = ({ setIsOpen }) => {

    const [isCheckAll, setIsCheckAll] = useState(false);
    const [isCheck, setIsCheck] = useState([]);
    const [list, setList] = useState([]);
    useEffect(() => {
        setList(Catalogues);
    }, [list]);

    const handleSelectAll = e => {
        setIsCheckAll(!isCheckAll);
        setIsCheck(list.map(li => li.id));
        if (isCheckAll) {
            setIsCheck([]);
        }
    };

    const handleClick = e => {
        const { id, checked } = e.target;
        setIsCheck([...isCheck, id]);
        if (!checked) {
            setIsCheck(isCheck.filter(item => item !== id));
        }
    };

    console.log(isCheck);

    const catalog = list.map(({ id, name }) => {
        return (
            <>
                <Checkbox
                    key={id}
                    type="checkbox"
                    name={name}
                    id={id}
                    handleClick={handleClick}
                    isChecked={isCheck.includes(id)}
                />
                {name}
            </>
        );
    });

    const seletcAllCheck = () => {
        return (
            <div>
                <Checkbox
                    type="checkbox"
                    name="selectAll"
                    id="selectAll"
                    handleClick={handleSelectAll}
                    isChecked={isCheckAll}
                />
            </div>
        );
    };


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
                                    {seletcAllCheck()}
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