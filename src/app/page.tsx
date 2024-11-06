import styles from './page.module.scss';
import Spreadsheet from '@/components/Spreadsheet';

export default function Home() {
  return (
    <>
      <header className={styles['header-content']}>
        <span>Usability</span>
        <br />
        <span>Analysis</span>
        <br />
        <span>Dashboard</span>
      </header>
      <main className={styles['main-content']}>
        <div className={styles.description}>
          데이터를 복사해 붙여넣어 주세요
        </div>
        <form className={styles['form-content']}>
          <div className={styles.content}>
            <div className={styles.spreadsheet}>
              <Spreadsheet />
            </div>
            <div className={styles['divider-spreadsheet']} />
            <div
              className={`${styles.variable} ${styles['variable-comparison']}`}
            >
              <div>비교 대상</div>
              <ul>
                {Array.from({ length: 5 }, (_, i) => (
                  <li key={i}>
                    <button>{'item ' + i}</button>
                  </li>
                ))}
              </ul>
              <button className={styles['variable-more']}>▼</button>
            </div>
            <div className={styles['divider-variable']} />
            <div
              className={`${styles.variable} ${styles['variable-measurement']}`}
            >
              <div>측정 지표</div>
              <ul>
                {Array.from({ length: 5 }, (_, i) => (
                  <li key={i}>
                    <button>{'item ' + i}</button>
                  </li>
                ))}
              </ul>
              <button className={styles['variable-more']}>▼</button>
            </div>
          </div>
          <div className={styles['sticky-button-placeholder']}></div>
          <div className={styles['sticky-button-container']}>
            <button className={styles['sticky-button-more']}>▼</button>
            <button className={styles['sticky-button-analysis']}>
              분석하기
            </button>
          </div>
        </form>
      </main>
      <footer></footer>
    </>
  );
}
