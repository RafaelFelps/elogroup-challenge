// @src/components/Modal.jsx
import { useState, useEffect } from "react";
import styles from "./ModalComponent.module.css";
import { RiCloseLine } from "react-icons/ri";
import Checkbox from "./Checkbox/CheckboxComponent";

const Modal = ({ setIsOpen }: any) => {

    const [checkAll, setCheckAll] = useState(false);
    const [RPA, setRPA] = useState(false);
    const [produtoDigital, setProdutoDigital] = useState(false);
    const [analytics, setAnalytics] = useState(false);
    const [BPM, setBPM] = useState(false);

    useEffect(() => {
        // If all checkboxes are checked, then the checkAll checkbox will
        // check automatically
        const isAllChecked = RPA && produtoDigital && analytics && BPM;
        setCheckAll(isAllChecked);
      }, [RPA, produtoDigital, analytics, BPM])

    // function handleChange(e: any) {
    //     if (e.target.value === "RPA")
    //         setRPA(!RPA);
    //     else if (e.target.value === "Produto Digital")
    //         setProdutoDigital(!produtoDigital);
    //     else if (e.target.value === "Analytics")
    //         setAnalytics(!analytics);
    //     else if (e.target.value === "BPM")
    //         setBPM(!BPM);
    // }

    function checkAllCheckboxes() {
        console.log("TESTE")
        const isAllChecked = RPA && produtoDigital && analytics && BPM;
        setCheckAll(!isAllChecked);
        setRPA(!isAllChecked);
        setProdutoDigital(!isAllChecked);
        setAnalytics(!isAllChecked);
        setBPM(!isAllChecked);
    }

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
                            <table className={styles.oportunityTable}>
                                <thead>
                                    <Checkbox checked={checkAll} checkValue="All" checkText="" onChange={checkAllCheckboxes}/>
                                    <Checkbox checked={RPA} checkValue="RPA" checkText="RPA" onChange={() => setRPA(!RPA)} />
                                    <Checkbox checked={produtoDigital} checkValue="Produto Digital" checkText="Produto Digital" onChange={() => setProdutoDigital(!produtoDigital)} />
                                    <Checkbox checked={analytics} checkValue="Analytics" checkText="Analytics" onChange={() => setAnalytics(!analytics)} />
                                    <Checkbox checked={BPM} checkValue="BPM" checkText="BPM" onChange={() => setBPM(!BPM)} />
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