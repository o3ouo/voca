import styles from "./css/ModuleCss.module.css";

export default function ModuleCss() {
    return (
        <div className="moduleApp">
            <h1>ModuleCss</h1>
            <div className={styles.box}>App</div>
        </div>
    );
}

/*********************************************************************************************
** CSS 작성법 (module css)**
: css 파일명을 > 파일명.module.css로 생성한다.
: css를 import 할 때 > import styles from "./파일명.module.css"로 작성한다.
: 해당하는 className에는 > <div className={styles.box}>App</div>로 작성한다.
*********************************************************************************************/
