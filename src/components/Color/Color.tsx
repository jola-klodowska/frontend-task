import clsx from 'clsx';
import styles from './Color.module.scss';

interface Test {
    color: string;
    isDefault: boolean;
    onColorRemove: (colorId:string) => void;
}

const Color = (props: Test) => {

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
