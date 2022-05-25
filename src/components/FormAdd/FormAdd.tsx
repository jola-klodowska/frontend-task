import React, { useState } from 'react';
import { MyColor } from '../../App';
import styles from './FormAdd.module.scss';

export interface Colors {
    onColorAdd: any
}

const FormAdd = (props: Colors) => {

    const [colorName, setColorName] = useState('');

    const hexToRgb = (hex: string) => {
        const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
          } : null;
    }

    const handleSubmit = (e: any) => {
        e.preventDefault();
        if (colorName.length === 7 && colorName.charAt(0) === "#" && hexToRgb(colorName) !== null) {
            const colorObject: MyColor = {
                name: colorName,
                red: 1,
                green: 2, 
                blue: 3,
                isDefault: false
            }
            console.log(colorObject.red)
            props.onColorAdd(colorObject);
        } else if (colorName.length === 6 && colorName.charAt(0) !== "#") {
            const newColorName = "#".concat(colorName);
            const colorObject: MyColor = {
                name: newColorName,
                red: 1,
                green: 2, 
                blue: 3,
                isDefault: false
            }
            props.onColorAdd(colorObject);
        } else {
            alert("Please, write color name in HEX RGB form: 7 characters with '#' (#123456) or 6 characters without '#' (123456)")
        }
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <label>Please write color in HEX RGB form</label><br />
            <input className={styles.input} type="text" maxLength={7} pattern="(^|^#)[a-fA-F0-9]{6}$" placeholder='#123456' onChange={e => setColorName(e.target.value)} /><br />
            <button>Add color</button>
        </form>
    );
};

export default FormAdd;


