import styles from './Color.module.scss';

interface Test {
    color: string;
    id: string;
    onColorRemove: (colorId:string) => void;
}

const Color = (props: Test) => {

    const colorName = props.color.toUpperCase()

    const handleSubmit = (e: any) => {
        e.preventDefault();
        props.onColorRemove(props.id);       
    }

    return (
        <div>
            <div style={{ backgroundColor: props.color }} className={styles.rectangle}></div>
            <p className={styles.colorName}>{colorName}</p>
            <p className={styles.delete} onClick={handleSubmit}>delete</p>
        </div>
    );
};

export default Color;
