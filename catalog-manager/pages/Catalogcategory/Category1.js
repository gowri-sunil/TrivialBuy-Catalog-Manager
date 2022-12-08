import styles from '../../styles/Category.module.css'
import CategoryDrop from './CategoryDrop'

export default function Category1(){
    return(
        <div className={styles.container}>
            <div className={styles.header}>
                <div >
                    <div className={styles.p}>
                        <div className={styles.trivialbuy}>TrivialBuy</div>
                        <div className={styles.drop}> {<CategoryDrop />} </div>
                        <div className={styles.search}>search</div>
                    </div>
                </div>
                <div B></div>
            </div>
            <div content>
                <div sider></div>
                <div article></div>
            </div>
            

        </div>
    )
}