'use client';

import styles from './page.module.scss';
import Spreadsheet from '@/components/Spreadsheet';
import VariableList from '@/components/VariableList';

import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Landing() {
  const searchParams = useSearchParams();
  const isAnalysed = searchParams.get('isAnalysed') === 'yes' ? true : false;

  const router = useRouter();

  useEffect(() => {
    const $html = document.querySelector('html');
    if (isAnalysed) {
      $html?.classList.add('html-background-blackboard');
    } else {
      $html?.classList.remove('html-background-blackboard');
    }
  }, [isAnalysed]);

  return (
    <>
      {isAnalysed && (
        <>
          <header>
            <div>비교 대상</div>
            <div>측정 지표</div>
            <div>back BTN</div>
          </header>
          <main>
            <article>
              <h3>
                <div>1. 개선 상태</div>
                <button>▲</button>
              </h3>
              {/* 기술 통계 */}
              <div>
                <div>
                  <button>기술 통계 ▲</button>-<button>대상 수준</button>-
                  <button>측정 지표</button>
                </div>
                <div>
                  <div>
                    <div>Before / 과업 완료 시간</div>
                    <div>
                      <div>
                        <div>표본 수</div>
                        <div>107 (결측치 : 7)</div>
                      </div>
                      <div>
                        <div>평균</div>
                        <div>11.2</div>
                      </div>
                      <div>
                        <div>표준 편차</div>
                        <div>3.1</div>
                      </div>
                    </div>
                    <figure>
                      <figcaption>추후 미표시</figcaption>
                      <div>Graph</div>
                    </figure>
                  </div>
                </div>
              </div>
              {/* 평균 비교 */}
              <div>평균 비교</div>
            </article>
          </main>
        </>
      )}
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
                  <VariableList variableType="comparison" />
                </div>
                <div className={styles['divider-variable']} />
                <div
                  className={`${styles.variable} ${styles['variable-measurement']}`}
                >
                  <div>측정 지표</div>
                  <VariableList variableType="measurement" />
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
