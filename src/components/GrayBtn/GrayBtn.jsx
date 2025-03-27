import styles from './GrayBtn.module.css' 

    export default function GrayBtn({ text}) { 
      return (
        <button  className={styles.btn} >
          {text} 
        </button>
      );
    }