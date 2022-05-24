import React, { useState } from 'react';
import { MyColor } from '../../App';
import styles from './FormAdd.module.scss';
import shortid from 'shortid';

export interface Colors {
    colors: MyColor[]
}

const FormAdd = (props: Colors) => {

    const [colorName, setColorName] = useState('');

    const handleSubmit = (e: any) => {
        e.preventDefault();
        const colorObject = {
            name: colorName,
            id: shortid()
        }
        const colors = props.colors;
        colors.push(colorObject);
        window.localStorage.setItem('myColors', JSON.stringify(colors));
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <label>Please write color in HEX RGB form</label><br />
            <input type="text" onChange={e => setColorName(e.target.value)} /><br />
            <button>Add color</button>
        </form>
    );
};

export default FormAdd;


