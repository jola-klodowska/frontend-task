import React from 'react';
import styles from './Button.module.scss';

interface Test {

    children: React.ReactNode;
}

const Button = (props: Test) => {
    return (
        <button className={styles.button}>{props.children}</button>
    );
};

export default Button;
