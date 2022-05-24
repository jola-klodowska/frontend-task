import React from 'react';
import styles from './Filter.module.scss';

const Filter = () => {
    return (
        <form className={styles.form}>
            <input type="text" /><br/>
            <button>Search</button>
        </form>
    );
};

export default Filter;
