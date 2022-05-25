import React, { useState } from 'react';
import { MyColor } from '../../App';
import styles from './FormAdd.module.scss';
import shortid from 'shortid';

export interface Colors {
    onColorAdd: any
}

const FormAdd = (props: Colors) => {

    const [colorName, setColorName] = useState('');

    const handleSubmit = (e: any) => {
        e.preventDefault();
        if (colorName.length === 7 && colorName.charAt(0) === "#") {
            const colorObject: MyColor = {
                name: colorName,
                id: shortid()
            }
            props.onColorAdd(colorObject);
        } else if (colorName.length === 6 && colorName.charAt(0) !== "#") {
            const hastag = "#"
            const newColorName = hastag.concat(colorName);
            const colorObject: MyColor = {
                name: newColorName,
                id: shortid()
            }
            props.onColorAdd(colorObject);
        } else {
            alert("Please, write color name in HEX RGB form: 7 characters with '#' (#123456) or 6 characters without '#' (123456)")
        }
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <label>Please write color in HEX RGB form</label><br />
            <input type="text" maxLength={7} pattern="[A-Za-Z0-9{3}]" onChange={e => setColorName(e.target.value)} /><br />
            <button>Add color</button>
        </form>
    );
};

export default FormAdd;


