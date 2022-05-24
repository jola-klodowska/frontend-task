import React from 'react';
import { MyColor } from '../../App';
import Color from '../Color/Color';
import styles from './Colors.module.scss';

interface Test {
    colors: MyColor[];
}

const Colors = (props: Test) => {
    const colors = props.colors;

    return (
        <article>
            <h2 className={styles.title}>Yours colors</h2>
            <div className={styles.colorContainer}>
                {colors.map(color =>
                    <Color
                        key={color.id}
                        id={color.id}
                        color={color.name} />
                )}
            </div>
        </article>
    );
};

export default Colors;


