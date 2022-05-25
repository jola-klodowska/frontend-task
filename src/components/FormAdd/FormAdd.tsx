import React, { useState } from 'react';
import { MyColor } from '../../App';
import Button from '../Button/Button';
import styles from './FormAdd.module.scss';

export interface Colors {
    onColorAdd: any
}

const FormAdd = (props: Colors) => {

    const [colorName, setColorName] = useState('');

    const handleSubmit = (e: any) => {
        e.preventDefault();

        let colorValue;
        if (colorName.length === 6) {
            colorValue = colorName
        }
        else {
            colorValue = colorName.substring(1);
        }

        const colorObject: MyColor = {
            name: `#${colorValue}`,
            red: parseInt(colorValue.substring(0,2), 16),
            green: parseInt(colorValue.substring(2,4), 16), 
            blue: parseInt(colorValue.substring(4,6), 16),
            isDefault: false
        }
        props.onColorAdd(colorObject);
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <label className={styles.label} >Please write color in HEX RGB form</label><br />
            <input className={styles.input} type="text" maxLength={7} pattern="(^|^#)[a-fA-F0-9]{6}$" placeholder='#123456' onChange={e => setColorName(e.target.value)} /><br />
            <Button>ADD COLOR</Button>
        </form>
    );
};

export default FormAdd;


