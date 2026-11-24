import './Leaderboard.css';
import PunkHeader from '../components/PunkHeader';

interface AuthorRow {
  rank: number;
  author: string;
  badge: string;
  oracleScore: number;
  hitRate: number;
  totalPredictions: number;
  trueCount: number;
  partialCount: number;
  falseCount: number;
  hedgePct: number;
  articles: number;
}

const leaderboardData: AuthorRow[] = [
  { rank: 1,  author: 'Gail Collins & Bret Stephens', badge: 'The Oracle',          oracleScore: 68.4, hitRate: 66.8, totalPredictions: 498, trueCount: 131, partialCount: 64, falseCount: 49, hedgePct: 50.0, articles: 44 },
  { rank: 2,  author: 'Ross Douthat',                 badge: 'Column Veteran',       oracleScore: 66.8, hitRate: 69.0, totalPredictions: 450, trueCount: 143, partialCount: 73, falseCount: 44, hedgePct: 40.0, articles: 71 },
  { rank: 3,  author: 'Michelle Goldberg',             badge: 'Steady Forecaster',    oracleScore: 64.9, hitRate: 68.4, totalPredictions: 345, trueCount: 126, partialCount: 56, falseCount: 43, hedgePct: 34.5, articles: 77 },
  { rank: 4,  author: 'Jamelle Bouie',                 badge: 'Wild Card',            oracleScore: 64.6, hitRate: 68.1, totalPredictions: 359, trueCount: 122, partialCount: 42, falseCount: 46, hedgePct: 40.7, articles: 70 },
  { rank: 5,  author: 'Thomas L. Friedman',            badge: 'Prediction Machine',   oracleScore: 63.4, hitRate: 57.8, totalPredictions: 510, trueCount: 114, partialCount: 77, falseCount: 73, hedgePct: 47.1, articles: 58 },
  { rank: 6,  author: 'Gail Collins',                  badge: 'Long-Game Player',     oracleScore: 62.4, hitRate: 74.4, totalPredictions: 216, trueCount: 86,  partialCount: 17, falseCount: 24, hedgePct: 40.3, articles: 48 },
  { rank: 6,  author: 'Jesse Wegman',                  badge: 'Straight Shooter',     oracleScore: 62.4, hitRate: 85.5, totalPredictions: 55,  trueCount: 32,  partialCount: 1,  falseCount: 5,  hedgePct: 30.9, articles: 16 },
  { rank: 8,  author: 'Nicholas Kristof',              badge: 'Master Hedger',        oracleScore: 60.7, hitRate: 75.8, totalPredictions: 337, trueCount: 83,  partialCount: 28, falseCount: 17, hedgePct: 61.4, articles: 78 },
  { rank: 9,  author: 'Mara Gay',                      badge: 'Sharpshooter',         oracleScore: 58.1, hitRate: 86.3, totalPredictions: 73,  trueCount: 33,  partialCount: 3,  falseCount: 4,  hedgePct: 45.2, articles: 20 },
  { rank: 10, author: 'Bret Stephens',                 badge: 'Measured Voice',       oracleScore: 56.2, hitRate: 61.3, totalPredictions: 282, trueCount: 71,  partialCount: 31, falseCount: 39, hedgePct: 47.9, articles: 59 },
  { rank: 11, author: 'Maureen Dowd',                  badge: 'Puzzle Solver',        oracleScore: 54.6, hitRate: 63.3, totalPredictions: 127, trueCount: 37,  partialCount: 26, falseCount: 16, hedgePct: 36.2, articles: 38 },
  { rank: 12, author: 'Farah Stockman',                badge: 'Rising Voice',         oracleScore: 53.9, hitRate: 68.0, totalPredictions: 36,  trueCount: 14,  partialCount: 6,  falseCount: 5,  hedgePct: 27.8, articles: 7 },
  { rank: 12, author: 'Zeynep Tufekci',                badge: 'Balanced Caller',      oracleScore: 53.9, hitRate: 73.0, totalPredictions: 52,  trueCount: 25,  partialCount: 4,  falseCount: 8,  hedgePct: 28.8, articles: 5 },
  { rank: 14, author: 'David Brooks',                  badge: 'Risk Taker',           oracleScore: 52.8, hitRate: 57.0, totalPredictions: 271, trueCount: 57,  partialCount: 41, falseCount: 38, hedgePct: 49.4, articles: 52 },
  { rank: 15, author: 'Ezra Klein',                    badge: 'Supreme Confidence',   oracleScore: 52.4, hitRate: 100,  totalPredictions: 7,   trueCount: 2,   partialCount: 0,  falseCount: 0,  hedgePct: 28.6, articles: 1 },
];

const totalArticles = 647;
const totalPredictions = 4228;
const totalSentences = 32533;

function getRankMedal(rank: number): string {
  if (rank === 1) return '\u{1F947}';
  if (rank === 2) return '\u{1F948}';
  if (rank === 3) return '\u{1F949}';
  return `#${rank}`;
}

function getScoreColor(score: number): string {
  if (score >= 65) return '#00ff88';
  if (score >= 60) return '#ffcc00';
  if (score >= 55) return '#ff9944';
  return '#ff5555';
}

function getHitRateBar(rate: number): string {
  if (rate >= 80) return '#00ff88';
  if (rate >= 65) return '#ffcc00';
  return '#ff9944';
}

export default function Leaderboard() {
  return (
    <div className="about-page-real">
      <PunkHeader />

      <h1 className="halftone-title about-page-title">PREDICTION LEADERBOARD</h1>

      <div className="leaderboard-subtitle">
        <p className="pagella-body">
          Who actually sees the future? We used a fine-tuned BERT model to detect predictions
          in NYT Opinion columns, then graded each prediction for accuracy.
        </p>
      </div>

      {/* Summary stats */}
      <div className="lb-stats-row">
        <div className="lb-stat-card">
          <span className="lb-stat-number">{totalArticles}</span>
          <span className="lb-stat-label">Articles Analyzed</span>
        </div>
        <div className="lb-stat-card">
          <span className="lb-stat-number">{totalPredictions.toLocaleString()}</span>
          <span className="lb-stat-label">Predictions Found</span>
        </div>
        <div className="lb-stat-card">
          <span className="lb-stat-number">{totalSentences.toLocaleString()}</span>
          <span className="lb-stat-label">Sentences Scanned</span>
        </div>
        <div className="lb-stat-card">
          <span className="lb-stat-number">15</span>
          <span className="lb-stat-label">Columnists Ranked</span>
        </div>
      </div>

      {/* Scoring explainer */}
      <div className="lb-score-explainer">
        <span className="lb-explainer-label nav-font">ORACLE SCORE</span>
        <span className="lb-explainer-text">
          45% hit-rate (shrunk toward field avg) + 20% verifiability + 20% volume + 15% hedge penalty
        </span>
      </div>

      {/* Leaderboard table */}
      <div className="lb-table-wrapper">
        <table className="lb-table">
          <thead>
            <tr>
              <th className="lb-th lb-th-rank">Rank</th>
              <th className="lb-th lb-th-author">Author</th>
              <th className="lb-th lb-th-score">Oracle Score</th>
              <th className="lb-th lb-th-hit">Hit Rate</th>
              <th className="lb-th lb-th-preds">Predictions</th>
              <th className="lb-th lb-th-breakdown">Outcome Breakdown</th>
              <th className="lb-th lb-th-hedge">Hedge %</th>
              <th className="lb-th lb-th-articles">Articles</th>
            </tr>
          </thead>
          <tbody>
            {leaderboardData.map((row, i) => {
              const resolved = row.trueCount + row.partialCount + row.falseCount;
              const truePct = resolved > 0 ? (row.trueCount / resolved) * 100 : 0;
              const partialPct = resolved > 0 ? (row.partialCount / resolved) * 100 : 0;
              const falsePct = resolved > 0 ? (row.falseCount / resolved) * 100 : 0;

              return (
                <tr key={i} className={`lb-row ${row.rank <= 3 ? 'lb-row-top3' : ''}`}>
                  <td className="lb-td lb-td-rank">
                    <span className="lb-rank-medal">{getRankMedal(row.rank)}</span>
                  </td>
                  <td className="lb-td lb-td-author">
                    <div className="lb-author-cell">
                      <span className="lb-author-name">{row.author}</span>
                      <span className="lb-badge">{row.badge}</span>
                    </div>
                  </td>
                  <td className="lb-td lb-td-score">
                    <span className="lb-score" style={{ color: getScoreColor(row.oracleScore) }}>
                      {row.oracleScore}
                    </span>
                  </td>
                  <td className="lb-td lb-td-hit">
                    <div className="lb-hit-cell">
                      <span className="lb-hit-value">{row.hitRate}%</span>
                      <div className="lb-hit-bar-bg">
                        <div
                          className="lb-hit-bar-fill"
                          style={{ width: `${row.hitRate}%`, backgroundColor: getHitRateBar(row.hitRate) }}
                        />
                      </div>
                    </div>
                  </td>
                  <td className="lb-td lb-td-preds">{row.totalPredictions}</td>
                  <td className="lb-td lb-td-breakdown">
                    <div className="lb-breakdown-bar">
                      <div className="lb-bar-segment lb-bar-true" style={{ width: `${truePct}%` }} title={`True: ${row.trueCount}`} />
                      <div className="lb-bar-segment lb-bar-partial" style={{ width: `${partialPct}%` }} title={`Partial: ${row.partialCount}`} />
                      <div className="lb-bar-segment lb-bar-false" style={{ width: `${falsePct}%` }} title={`False: ${row.falseCount}`} />
                    </div>
                    <div className="lb-breakdown-labels">
                      <span className="lb-bl-true">{row.trueCount}</span>
                      <span className="lb-bl-partial">{row.partialCount}</span>
                      <span className="lb-bl-false">{row.falseCount}</span>
                    </div>
                  </td>
                  <td className="lb-td lb-td-hedge">{row.hedgePct}%</td>
                  <td className="lb-td lb-td-articles">{row.articles}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Legend */}
      <div className="lb-legend">
        <span className="lb-legend-item"><span className="lb-dot lb-dot-true" /> True</span>
        <span className="lb-legend-item"><span className="lb-dot lb-dot-partial" /> Partially True</span>
        <span className="lb-legend-item"><span className="lb-dot lb-dot-false" /> False</span>
      </div>

      {/* Footer note */}
      <div className="lb-footer-note pagella-body">
        <p>
          <strong>Methodology:</strong> Predictions were detected using a fine-tuned BERT classifier (F1 &gt; 0.76 on positive class).
          Each prediction was then graded for accuracy against real-world outcomes using LLM-assisted evidence retrieval.
          Hit rates are computed on resolved predictions only (excluding unverifiable hedges).
          Small-sample authors are shrunk toward the field average to avoid inflated scores.
        </p>
        <p className="lb-checkpoint-note">
          Data checkpoint: Phase 1 — 647 articles across 15 NYT Opinion columnists. More authors and updated grades coming soon.
        </p>
      </div>
    </div>
  );
}
