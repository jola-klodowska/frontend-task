import React from 'react';
import shortid from 'shortid';
import { MyColor } from '../../App';
import Color from '../Color/Color';
import styles from './Colors.module.scss';

interface Test {
    colors: MyColor[];
    onColorRemove: (colorId: string) => void;
}

const Colors = (props: Test) => {

    const colors = props.colors;
colors.sort(
        (colorA, colorB) => colorB.red - colorA.red ||
            colorB.green - colorA.green ||
            colorB.blue - colorA.blue
    )

    return (
        <article>
            <h2 className={styles.title}>Yours colors</h2>
            <div className={styles.colorContainer}>
                {colors.map(color =>
                    <Color
                        onColorRemove={props.onColorRemove}
                        key={shortid()}
                        color={color.name}
                        isDefault={color.isDefault} />
                )}
            </div>
        </article>
    );
};

export default Colors;


