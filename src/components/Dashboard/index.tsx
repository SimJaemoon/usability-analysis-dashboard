import styles from './index.module.scss';
import ReplyAllIcon from '@mui/icons-material/ReplyAll';

import { useAppSelector, useAppDispatch } from '@/lib/hooks';
import { useRouter } from 'next/navigation';

import { selectData } from '@/lib/features/spreadsheet/spreadsheetSlice';
import {
  selectComparisonVariableIndex,
  selectMeasurementVariableIndex,
  toggleComparisonVariableIndex,
  toggleMeasurementVariableIndex,
} from '@/lib/features/spreadsheet/variableListSlice';
import { useState } from 'react';

export default function Dashboard() {
  const dispatch = useAppDispatch();
  const data = useAppSelector(selectData);
  const comparisonVariableIndex = useAppSelector(selectComparisonVariableIndex);
  const measurementVariableIndex = useAppSelector(
    selectMeasurementVariableIndex,
  );
  const router = useRouter();

  const variables = data[0].filter(
    (v) => !['(예시)', null].includes(v),
  ) as string[];

  const [isFolded, setIsFolded] = useState(false);

  return (
    <>
      <header className={styles['header-content']}>
        <div>
          <div>비교 대상</div>
          <div>
            <div>
              {variables.map((v, i) => (
                <button
                  key={i}
                  data-content={v}
                  className={
                    comparisonVariableIndex.includes(i)
                      ? styles['selected-variable']
                      : ''
                  }
                  onClick={() => dispatch(toggleComparisonVariableIndex(i))}
                >
                  {v}
                </button>
              ))}
            </div>
          </div>
        </div>
        <div>
          <div>측정 지표</div>
          <div>
            <div>
              {variables.map((v, i) => (
                <button
                  key={i}
                  data-content={v}
                  className={
                    measurementVariableIndex.includes(i)
                      ? styles['selected-variable']
                      : ''
                  }
                  onClick={() => dispatch(toggleMeasurementVariableIndex(i))}
                >
                  {v}
                </button>
              ))}
            </div>
          </div>
        </div>
        <button onClick={() => router.back()}>
          <ReplyAllIcon fontSize="large" />
        </button>
      </header>
      <main className={styles['main-content']}>
        <article>
          <h3>
            <button>1. 개선 상태 ▲</button>
          </h3>
          {/* 기술 통계 */}
          <div className={styles['analysis-carousel']}>
            <div>
              <button onClick={() => setIsFolded((prev) => !prev)}>
                기술 통계 ▲
              </button>
              -<button>대상 수준</button>-<button>측정 지표</button>
            </div>
            <div className={isFolded ? styles.folded : ''}>
              {Array.from({ length: 5 }, (_, i) => (
                <button
                  key={i}
                  className={styles['descriptive-statistic-card']}
                >
                  <div>Before / 과업 완료 시간</div>
                  <div>
                    <div>
                      <div>표본 수</div>
                      <div>
                        107&nbsp;<span>(결측치 : 7)</span>
                      </div>
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
                    <div>Graph</div>
                    <figcaption>
                      {/* A11Y 고려한 숨김 처리 */}
                      Before - 과업 완료 시간의 빈도 그래프
                    </figcaption>
                  </figure>
                </button>
              ))}
            </div>
          </div>
          {/* 평균 비교 */}
          <div className={styles['analysis-carousel']}>
            <div>
              <button onClick={() => setIsFolded((prev) => !prev)}>
                평균 비교 ▲
              </button>
              -<button>대상 수준</button>-<button>측정 지표</button>
            </div>
            <div>
              {Array.from({ length: 5 }, (_, i) => (
                <button key={i} className={styles['average-comparison-card']}>
                  <div>Before / 과업 완료 시간</div>
                  <div>
                    <div>
                      비교 대상 수준 간&nbsp;&nbsp;
                      <span>차이가 있다</span>
                    </div>
                  </div>
                  <figure>
                    <div>Graph</div>
                    <figcaption>
                      {/* A11Y 고려한 숨김 처리 */}
                      Before - 과업 완료 시간의 빈도 그래프
                    </figcaption>
                  </figure>
                </button>
              ))}
            </div>
          </div>
        </article>
        <article>
          <h3>
            <button>2. 평가 시간 ▲</button>
          </h3>
          {/* 기술 통계 */}
          <div className={styles['analysis-carousel']}>
            <div>
              <button onClick={() => setIsFolded((prev) => !prev)}>
                기술 통계 ▲
              </button>
              -<button>대상 수준</button>-<button>측정 지표</button>
            </div>
            <div className={isFolded ? styles.folded : ''}>
              {Array.from({ length: 5 }, (_, i) => (
                <button
                  key={i}
                  className={styles['descriptive-statistic-card']}
                >
                  <div>Before / 과업 완료 시간</div>
                  <div>
                    <div>
                      <div>표본 수</div>
                      <div>
                        107&nbsp;<span>(결측치 : 7)</span>
                      </div>
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
                    <div>Graph</div>
                    <figcaption>
                      {/* A11Y 고려한 숨김 처리 */}
                      Before - 과업 완료 시간의 빈도 그래프
                    </figcaption>
                  </figure>
                </button>
              ))}
            </div>
          </div>
          {/* 평균 비교 */}
          <div className={styles['analysis-carousel']}>
            <div>
              <button onClick={() => setIsFolded((prev) => !prev)}>
                평균 비교 ▲
              </button>
              -<button>대상 수준</button>-<button>측정 지표</button>
            </div>
            <div>
              {Array.from({ length: 5 }, (_, i) => (
                <button key={i} className={styles['average-comparison-card']}>
                  <div>Before / 과업 완료 시간</div>
                  <div>
                    <div>
                      비교 대상 수준 간&nbsp;&nbsp;
                      <span>차이가 있다</span>
                    </div>
                  </div>
                  <figure>
                    <div>Graph</div>
                    <figcaption>
                      {/* A11Y 고려한 숨김 처리 */}
                      Before - 과업 완료 시간의 빈도 그래프
                    </figcaption>
                  </figure>
                </button>
              ))}
            </div>
          </div>
        </article>
      </main>
    </>
  );
}
