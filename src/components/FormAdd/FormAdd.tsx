import React, { useState } from 'react';
import { MyColor } from '../../App';
import './FormAdd.module.scss';

export interface Colors {
    colors: MyColor[]
}

const FormAdd = (props: Colors) => {

    const [colorName, setColorName] = useState('');

    const handleSubmit = (e: any) => {
        e.preventDefault();
        const colorObject = {
            name: colorName
        }
        const colors = props.colors;
        colors.push(colorObject)
        window.localStorage.setItem('myColors', JSON.stringify(colors));
        console.log(colors)
        

        //customColors.push(colorObject)
       // window.localStorage.setItem('myColors', JSON.stringify(customColors));
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Please write color in HEX RGB form</label><br />
            <input type="text" onChange={e => setColorName(e.target.value)} /><br />
            <button>Add color</button>
        </form>
    );
};

export default FormAdd;
