// 実績や事例コンポーネント
const CaseStudies = () => {
    return (
      <section id="cases">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">導入事例</h2>
            <p className="section-description">
              様々な業界のお客様が実現した業務効率化と成果事例
            </p>
          </div>
          
          <div className="flex-container">
            <div className="flex-item">
              <div className="card case-card">
                <div className="case-tag">製造業</div>
                <h3 className="case-title">製造業 A社</h3>
                <p className="case-detail">
                  <span className="case-label">課題:</span>
                  月間500件以上の請求書処理に多くの工数を費やしていた
                </p>
                <p className="case-detail">
                  <span className="case-label">導入効果:</span>
                  請求書処理時間を80%削減、経理部門の残業時間を月40時間削減
                </p>
              </div>
            </div>
            
            <div className="flex-item">
              <div className="card case-card">
                <div className="case-tag">サービス業</div>
                <h3 className="case-title">サービス業 B社</h3>
                <p className="case-detail">
                  <span className="case-label">課題:</span>
                  複数拠点からの経費精算処理が煩雑で時間がかかっていた
                </p>
                <p className="case-detail">
                  <span className="case-label">導入効果:</span>
                  処理時間を70%削減、入力ミスによる差戻しが98%減少
                </p>
              </div>
            </div>
            
            <div className="flex-item">
              <div className="card case-card">
                <div className="case-tag">IT企業</div>
                <h3 className="case-title">IT企業 C社</h3>
                <p className="case-detail">
                  <span className="case-label">課題:</span>
                  急速な事業拡大に伴い、経理処理が追いつかなくなっていた
                </p>
                <p className="case-detail">
                  <span className="case-label">導入効果:</span>
                  追加の人員採用なしで処理能力を3倍に拡大
                </p>
              </div>
            </div>
          </div>
          
          <div className="card">
            <h3><i className="fas fa-chart-line" style={{marginRight: '10px', color: 'var(--primary)'}}></i> 導入実績</h3>
            <div className="flex-container" style={{marginTop: '1rem'}}>
              <div className="flex-item" style={{flex: '1 1 200px'}}>
                <div style={{display: 'flex', alignItems: 'center', marginBottom: '1rem'}}>
                  <i className="fas fa-industry" style={{fontSize: '1.5rem', color: 'var(--primary)', marginRight: '1rem'}}></i>
                  <div>
                    <div style={{fontWeight: '700'}}>製造業</div>
                    <div>35社</div>
                  </div>
                </div>
              </div>
              <div className="flex-item" style={{flex: '1 1 200px'}}>
                <div style={{display: 'flex', alignItems: 'center', marginBottom: '1rem'}}>
                  <i className="fas fa-concierge-bell" style={{fontSize: '1.5rem', color: 'var(--primary)', marginRight: '1rem'}}></i>
                  <div>
                    <div style={{fontWeight: '700'}}>サービス業</div>
                    <div>42社</div>
                  </div>
                </div>
              </div>
              <div className="flex-item" style={{flex: '1 1 200px'}}>
                <div style={{display: 'flex', alignItems: 'center', marginBottom: '1rem'}}>
                  <i className="fas fa-laptop-code" style={{fontSize: '1.5rem', color: 'var(--primary)', marginRight: '1rem'}}></i>
                  <div>
                    <div style={{fontWeight: '700'}}>IT・通信業</div>
                    <div>28社</div>
                  </div>
                </div>
              </div>
              <div className="flex-item" style={{flex: '1 1 200px'}}>
                <div style={{display: 'flex', alignItems: 'center', marginBottom: '1rem'}}>
                  <i className="fas fa-store" style={{fontSize: '1.5rem', color: 'var(--primary)', marginRight: '1rem'}}></i>
                  <div>
                    <div style={{fontWeight: '700'}}>小売・卸売業</div>
                    <div>20社</div>
                  </div>
                </div>
              </div>
              <div className="flex-item" style={{flex: '1 1 200px'}}>
                <div style={{display: 'flex', alignItems: 'center', marginBottom: '1rem'}}>
                  <i className="fas fa-building" style={{fontSize: '1.5rem', color: 'var(--primary)', marginRight: '1rem'}}></i>
                  <div>
                    <div style={{fontWeight: '700'}}>その他</div>
                    <div>15社</div>
                  </div>
                </div>
              </div>
            </div>
            <p>※ 2023年12月現在</p>
          </div>
        </div>
      </section>
    );
  };
