// 特徴・メリット一覧コンポーネント
const Features = () => {
    return (
      <section id="features">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">特徴・メリット</h2>
            <p className="section-description">
              Money Forward会計とバクラク請求書の連携がもたらす業務効率化とコスト削減
            </p>
          </div>
          
          <div className="flex-container">
            <div className="flex-item">
              <div className="card feature-card">
                <div className="feature-icon">
                  <i className="fas fa-tachometer-alt"></i>
                </div>
                <div className="feature-content">
                  <h3 className="feature-title">業務効率化</h3>
                  <p className="feature-description">請求書の自動取り込みと会計処理の連携により、入力作業を最大90%削減します。</p>
                </div>
              </div>
            </div>
            
            <div className="flex-item">
              <div className="card feature-card">
                <div className="feature-icon">
                  <i className="fas fa-check-circle"></i>
                </div>
                <div className="feature-content">
                  <h3 className="feature-title">ミス削減</h3>
                  <p className="feature-description">手動入力によるミスを防ぎ、データの正確性を向上させます。平均して入力ミスを95%削減しています。</p>
                </div>
              </div>
            </div>
            
            <div className="flex-item">
              <div className="card feature-card">
                <div className="feature-icon">
                  <i className="fas fa-coins"></i>
                </div>
                <div className="feature-content">
                  <h3 className="feature-title">コスト削減</h3>
                  <p className="feature-description">バックオフィス業務の工数削減により、人件費を平均30%削減できます。</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex-container">
            <div className="flex-item">
              <div className="card feature-card">
                <div className="feature-icon">
                  <i className="fas fa-sync-alt"></i>
                </div>
                <div className="feature-content">
                  <h3 className="feature-title">リアルタイム連携</h3>
                  <p className="feature-description">Money Forward会計とバクラク請求書のAPIを活用し、リアルタイムでのデータ連携を実現します。</p>
                  <p className="source-link">
                    参考: <a href="https://biz.moneyforward.com/" target="_blank">Money Forward クラウド会計APIドキュメント</a>
                  </p>
                </div>
              </div>
            </div>
            
            <div className="flex-item">
              <div className="card feature-card">
                <div className="feature-icon">
                  <i className="fas fa-sliders-h"></i>
                </div>
                <div className="feature-content">
                  <h3 className="feature-title">カスタマイズ性</h3>
                  <p className="feature-description">お客様の業務フローに合わせた柔軟なカスタマイズが可能です。バクラク請求書のAPI連携機能を活用し、様々なビジネスニーズに対応します。</p>
                  <p className="source-link">
                    参考: <a href="https://bakuraku.jp/" target="_blank">バクラク請求書 公式ガイド</a>
                  </p>
                </div>
              </div>
            </div>
            
            <div className="flex-item">
              <div className="card feature-card">
                <div className="feature-icon">
                  <i className="fas fa-cloud"></i>
                </div>
                <div className="feature-content">
                  <h3 className="feature-title">クラウド連携</h3>
                  <p className="feature-description">クラウドベースのサービスにより、場所を選ばず業務が可能です。リモートワークにも最適なソリューションです。</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="stats-container">
            <div className="stats-grid">
              <div className="stat-item">
                <div className="stat-value">70%</div>
                <div className="stat-label">請求書処理時間削減</div>
              </div>
              <div className="stat-item">
                <div className="stat-value">95%</div>
                <div className="stat-label">入力ミス削減</div>
              </div>
              <div className="stat-item">
                <div className="stat-value">50%</div>
                <div className="stat-label">経理部門の業務工数削減</div>
              </div>
              <div className="stat-item">
                <div className="stat-value">40%</div>
                <div className="stat-label">月次決算所要時間短縮</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
