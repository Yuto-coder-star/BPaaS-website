// 利用料金・導入プロセスコンポーネント
const PricingAndProcess = () => {
  return (
    <section id="pricing">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">利用料金・導入プロセス</h2>
          <p className="section-description">
            お客様のニーズに合わせた柔軟な料金プランと、スムーズな導入プロセス
          </p>
        </div>
        
        <div className="flex-container">
          <div className="flex-item">
            <div className="card price-card">
              <h3 className="price-name">スタンダード</h3>
              <div className="price-amount">¥50,000</div>
              <div className="price-period">月額（税抜）</div>
              <ul className="price-features">
                <li><i className="fas fa-check" style={{color: 'var(--success)', marginRight: '8px'}}></i> 基本API連携</li>
                <li><i className="fas fa-check" style={{color: 'var(--success)', marginRight: '8px'}}></i> 月次レポート</li>
                <li><i className="fas fa-check" style={{color: 'var(--success)', marginRight: '8px'}}></i> 標準サポート（平日9-18時）</li>
                <li><i className="fas fa-check" style={{color: 'var(--success)', marginRight: '8px'}}></i> 小〜中規模企業向け</li>
              </ul>
              <button className="price-button">お問い合わせ</button>
            </div>
          </div>
          
          <div className="flex-item">
            <div className="card price-card popular">
              <h3 className="price-name">プロフェッショナル</h3>
              <div className="price-amount">¥100,000</div>
              <div className="price-period">月額（税抜）</div>
              <ul className="price-features">
                <li><i className="fas fa-check" style={{color: 'var(--success)', marginRight: '8px'}}></i> 高度API連携</li>
                <li><i className="fas fa-check" style={{color: 'var(--success)', marginRight: '8px'}}></i> リアルタイムダッシュボード</li>
                <li><i className="fas fa-check" style={{color: 'var(--success)', marginRight: '8px'}}></i> 優先サポート（平日9-20時）</li>
                <li><i className="fas fa-check" style={{color: 'var(--success)', marginRight: '8px'}}></i> 中〜大規模企業向け</li>
              </ul>
              <button className="price-button">お問い合わせ</button>
            </div>
          </div>
          
          <div className="flex-item">
            <div className="card price-card">
              <h3 className="price-name">エンタープライズ</h3>
              <div className="price-amount">要問合せ</div>
              <div className="price-period">カスタムプラン</div>
              <ul className="price-features">
                <li><i className="fas fa-check" style={{color: 'var(--success)', marginRight: '8px'}}></i> フルカスタマイズ</li>
                <li><i className="fas fa-check" style={{color: 'var(--success)', marginRight: '8px'}}></i> 専任サポート</li>
                <li><i className="fas fa-check" style={{color: 'var(--success)', marginRight: '8px'}}></i> SLA保証</li>
                <li><i className="fas fa-check" style={{color: 'var(--success)', marginRight: '8px'}}></i> 大規模企業向け</li>
              </ul>
              <button className="price-button">お問い合わせ</button>
            </div>
          </div>
        </div>
        
        <div className="card">
          <h3><i className="fas fa-info-circle" style={{marginRight: '10px', color: 'var(--primary)'}}></i> 初期設定費用</h3>
          <p>初期設定費用: 100,000円〜（規模・カスタマイズ内容により変動）</p>
        </div>
        
        <div className="section-header" style={{marginTop: '4rem'}}>
          <h3 className="section-title" style={{fontSize: '1.75rem'}}>導入プロセス</h3>
          <p className="section-description">
            お客様のビジネスに最適なソリューションを、スムーズに導入するためのステップ
          </p>
        </div>
        
        <div className="process">
          <div className="process-item">
            <div className="process-number"></div>
            <div className="process-content">
              <h4 className="process-title">お問い合わせ・ご相談</h4>
              <p className="process-description">Webフォームまたはお電話でお気軽にご連絡ください。現在の業務課題や目標について共有いただきます。</p>
            </div>
          </div>
          
          <div className="process-item">
            <div className="process-number"></div>
            <div className="process-content">
              <h4 className="process-title">要件ヒアリング</h4>
              <p className="process-description">現状の業務フローや課題をお伺いし、最適なソリューションをご提案します。具体的なニーズや目標を明確にします。</p>
            </div>
          </div>
          
          <div className="process-item">
            <div className="process-number"></div>
            <div className="process-content">
              <h4 className="process-title">お見積り・ご契約</h4>
              <p className="process-description">具体的な導入範囲と費用をご提示し、ご契約いただきます。お客様のニーズに合わせたカスタマイズプランを提案します。</p>
            </div>
          </div>
          
          <div className="process-item">
            <div className="process-number"></div>
            <div className="process-content">
              <h4 className="process-title">システム構築・設定</h4>
              <p className="process-description">Money Forward会計とバクラク請求書のAPI連携設定を行います。お客様の業務フローに合わせたカスタマイズを実施します。</p>
            </div>
          </div>
          
          <div className="process-item">
            <div className="process-number"></div>
            <div className="process-content">
              <h4 className="process-title">テスト運用</h4>
              <p className="process-description">実際のデータを使って動作確認を行います。不具合や改善点があれば調整します。</p>
            </div>
          </div>
          
          <div className="process-item">
            <div className="process-number"></div>
            <div className="process-content">
              <h4 className="process-title">本番運用開始</h4>
              <p className="process-description">問題なく動作することを確認後、本番環境での運用を開始します。スムーズな移行をサポートします。</p>
            </div>
          </div>
          
          <div className="process-item">
            <div className="process-number"></div>
            <div className="process-content">
              <h4 className="process-title">アフターサポート</h4>
              <p className="process-description">導入後も継続的にサポートいたします。定期的なレビューや改善提案を行い、常に最適な状態を維持します。</p>
            </div>
          </div>
        </div>
        
        <div className="card">
          <h3><i className="fas fa-clock" style={{marginRight: '10px', color: 'var(--primary)'}}></i> 導入に必要な工数</h3>
          <ul>
            <li><strong>初期設定期間:</strong> 約2〜4週間</li>
            <li><strong>お客様側の必要工数:</strong> 週1〜2時間程度（ヒアリング・テスト対応）</li>
            <li><strong>トレーニング:</strong> 1〜2日程度</li>
          </ul>
          <p className="source-link">
            参考: Money Forward・バクラク請求書の導入フローに基づいて設計しています。
          </p>
        </div>
      </div>
    </section>
  );
};
