import styles from './BlueBtn.module.css' 

    export default function BlueBtn({ text }) { 
      return (
        <button  className={styles.btn} >
          {text} 
        </button>
      );
    }