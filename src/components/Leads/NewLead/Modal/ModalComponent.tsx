// @src/components/Modal.jsx
import { useState, useEffect } from "react";
import styles from "./ModalComponent.module.css";
import { RiCloseLine } from "react-icons/ri";
import Checkbox from "./Checkbox/CheckboxComponent";

const Swal = require('sweetalert2');

// Show modal
function ShowModal(type: string, message?: string) {
    let title;
    type === "success" ? title = "Operação concluída com sucesso" : title = "Ooops";

    Swal.fire({
        icon: type,
        title: title,
        showConfirmButton: false,
        html: message,
    })
}


const Modal = ({ setIsOpen }: any) => {

    const [checkAll, setCheckAll] = useState(false);
    const [RPA, setRPA] = useState(false);
    const [produtoDigital, setProdutoDigital] = useState(false);
    const [analytics, setAnalytics] = useState(false);
    const [BPM, setBPM] = useState(false);

    // Form fields
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");


    useEffect(() => {
        // If all checkboxes are checked, then the checkAll checkbox will
        // check automatically
        const isAllChecked = RPA && produtoDigital && analytics && BPM;
        setCheckAll(isAllChecked);
    }, [RPA, produtoDigital, analytics, BPM])


    function handleForm(event: React.FormEvent<HTMLFormElement>) {
        // Preventing the page from reloading
        event.preventDefault();
        let hasErrors = false;

        if (name === "" || phone === "" || email === "") {
            ShowModal("error", "Preencha todos os campos, tente novamente.");
            hasErrors = true;
            return hasErrors;
        }

        if (!RPA && !produtoDigital && !analytics && !BPM) {
            ShowModal("error", "Selecione pelo menos 1 item, tente novamente.");
            hasErrors = true;
            return hasErrors;
        }

        if (!hasErrors) {
            saveLead();
        }
    }


    function saveLead() {

        let leadTypes = [];
        leadTypes.push(RPA ? "RPA" : null);
        leadTypes.push(produtoDigital ? "Produto Digital" : null);
        leadTypes.push(analytics ? "Analytics" : null);
        leadTypes.push(BPM ? "BPM" : null);

        const loggedUser = localStorage.getItem("LoggedUser");
        // Get list of all leads
        let allLeads = JSON.parse(localStorage.getItem("Leads") || '[]');
        const leadsQuantity = allLeads.length;

        const leadObject = {
            username: loggedUser,
            name: name,
            telephone: phone,
            email: email,
            oportunities: leadTypes,
            id: "task-"+(leadsQuantity + 1)
        } || {};

        localStorage.setItem("Leads", JSON.stringify([...allLeads, leadObject]));
        setIsOpen(false);
        ShowModal("success", "Operação concluída com sucesso!");

    }

    function checkAllCheckboxes() {
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
                    <form action="" className={styles.modalForm} onSubmit={handleForm}>
                        <div className={styles.modalContent}>
                            <input placeholder="Nome *" autoComplete="off" name="name" type="text" onChange={e => setName(e.target.value)} value={name} />
                            <input placeholder="Telefone *" autoComplete="off" name="phone" type="number" onChange={e => setPhone(e.target.value)} value={phone}/>
                            <input placeholder="E-mail *" autoComplete="off" name="email" type="email" onChange={e => setEmail(e.target.value)} value={email} />
                            <span className={styles.oportunitySpan} >Oportunidades *</span>
                            <table className={styles.oportunityTable}>
                                <thead>
                                    <Checkbox checked={checkAll} checkValue="All" checkText="" onChange={checkAllCheckboxes} />
                                </thead>
                                <tbody>
                                    <Checkbox checked={RPA} checkValue="RPA" checkText="RPA" onChange={() => setRPA(!RPA)} />
                                    <Checkbox checked={produtoDigital} checkValue="Produto Digital" checkText="Produto Digital" onChange={() => setProdutoDigital(!produtoDigital)} />
                                    <Checkbox checked={analytics} checkValue="Analytics" checkText="Analytics" onChange={() => setAnalytics(!analytics)} />
                                    <Checkbox checked={BPM} checkValue="BPM" checkText="BPM" onChange={() => setBPM(!BPM)} />
                                </tbody>
                            </table>
                        </div>

                        {/* MODAL FOOTER */}
                        <div className={styles.modalActions}>
                            <div className={styles.actionsContainer}>
                                <button
                                    type="submit"
                                    className={styles.submitBtn}
                                >
                                    Salvar
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Modal;