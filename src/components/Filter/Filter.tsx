import React from 'react';
import Button from '../Button/Button';
import styles from './Filter.module.scss';

const Filter = () => {
    return (
        <form className={styles.form}>
            <input className={styles.input} type="text" /><br/>
            <Button>SEARCH</Button>
        </form>
    );
};

export default Filter;
