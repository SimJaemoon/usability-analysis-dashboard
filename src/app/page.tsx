'use client';

import styles from './page.module.scss';
import Spreadsheet from '@/components/Spreadsheet';
import VariableList from '@/components/VariableList';

import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';

export default function Landing() {
  const searchParams = useSearchParams();
  const isAnalysed = searchParams.get('isAnalysed') === 'yes' ? true : false;

  const router = useRouter();

  const $html = document.querySelector('html');
  if ($html !== null) {
    if (isAnalysed) {
      $html.classList.add('html-background-blackboard');
    } else {
      $html.classList.remove('html-background-blackboard');
    }
  }

  return (
    <>
      {!isAnalysed && (
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
            <div className={styles['form-content']}>
              <div className={styles.content}>
                <div className={styles.spreadsheet}>
                  <Spreadsheet />
                </div>
                <div className={styles['divider-spreadsheet']} />
                <div
                  className={`${styles.variable} ${styles['variable-comparison']}`}
                >
                  <div>비교 대상</div>
                  <VariableList />
                </div>
                <div className={styles['divider-variable']} />
                <div
                  className={`${styles.variable} ${styles['variable-measurement']}`}
                >
                  <div>측정 지표</div>
                  <VariableList />
                </div>
              </div>
              <div className={styles['sticky-button-placeholder']}></div>
              <div className={styles['sticky-button-container']}>
                <button className={styles['sticky-button-more']}>▼</button>
                <button
                  onClick={() => {
                    router.push('/?isAnalysed=yes');
                  }}
                  className={styles['sticky-button-analysis']}
                >
                  분석하기
                </button>
              </div>
            </div>
          </main>
          <footer></footer>
        </>
      )}
    </>
  );
}
