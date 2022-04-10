import styles from './Checkbox.module.css'

interface CheckboxProps{
    checkText: string;
    checkValue: string;
    onChange?: (e:any) =>(void);
    checked: boolean;
}

const Checkbox = (props: CheckboxProps) => {
    return (
        <tr>
            <td className={styles.checkBoxComlumn}>
                <input className={styles.checkboxRound} value={props.checkValue} type="checkbox" checked={props.checked} onChange={props.onChange}/>
            </td>
            <td>
                {props.checkText}
            </td>
        </tr>
    );
};

export default Checkbox;
