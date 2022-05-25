import React from 'react';
import styles from './Button.module.scss';

interface IButtonProps {
    children: React.ReactNode;
}

const Button = (props: IButtonProps) => {
    return (
        <button className={styles.button}>{props.children}</button>
    );
};

export default Button;
