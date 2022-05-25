import clsx from 'clsx';
import React from 'react';
import styles from './Color.module.scss';

interface IColorProps {
    color: string;
    isDefault: boolean;
    onColorRemove: (colorId: string) => void;
}

const Color = (props: IColorProps) => {

    const colorName = props.color.toUpperCase()

    const handleSubmit = (e: any) => {
        e.preventDefault();
        props.onColorRemove(props.color);
    }

    return (
        <div>
            <div style={{ backgroundColor: props.color }} className={styles.rectangle}></div>
            <p className={styles.colorName}>{colorName}</p>
            <p className={clsx(props.isDefault === true && styles.noActive, styles.delete)} onClick={handleSubmit}>delete</p>
        </div>
    );
};

export default Color;
