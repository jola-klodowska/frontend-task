import styles from './Color.module.scss';

interface Test {
    color: string;
    id: string;
}

const Color = (props: Test) => {

    const handleSubmit = (e: any) => {
        e.preventDefault();
        window.localStorage.removeItem('myColors')
    }

    return (
        <div>
            <div style={{ backgroundColor: props.color }} className={styles.rectangle}></div>
            <p className={styles.colorName}>{props.color}</p>
            <p onClick={handleSubmit}>delete</p>
        </div>
    );
};

export default Color;
