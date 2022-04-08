import { FC } from 'react';
import styles from './ArrowBack.module.css';

interface ArrowBack { }

const ArrowBack: FC<ArrowBack> = () => {


    return (
        <svg xmlns="http://www.w3.org/2000/svg" className={styles.back_image} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>

    )
};

export default ArrowBack;
