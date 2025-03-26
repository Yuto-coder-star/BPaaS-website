// MF会計とバクラク請求書の連携に関する提案コンポーネント
const IntegrationProposal = () => {
  return (
    <section id="integration">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">MF会計とバクラク請求書の連携提案</h2>
          <p className="section-description">
            API連携によるシームレスな自動化ソリューション
          </p>
        </div>
        
        <div className="card">
          <h3><i className="fas fa-plug" style={{marginRight: '10px', color: 'var(--primary)'}}></i> 連携の概要</h3>
          <p>
            Money Forward会計とバクラク請求書のAPI連携により、請求書の自動取り込みから会計処理までをシームレスに行うことができます。
            これにより、手動入力作業を大幅に削減し、業務効率化とミス防止を実現します。
          </p>
          <p>
            <strong>参考情報:</strong>
            <br />
            <a href="https://biz.moneyforward.com/" target="_blank">Money Forward クラウド会計APIドキュメント</a>
            <br />
            <a href="https://bakuraku.jp/" target="_blank">バクラク請求書 公式ガイド</a>
          </p>
        </div>
        
        <div className="card">
          <h3><i className="fas fa-project-diagram" style={{marginRight: '10px', color: 'var(--primary)'}}></i> 連携イメージ・業務フロー</h3>
          <ol>
            <li><strong>請求書の受領</strong>: メールや郵送で受け取った請求書をバクラク請求書に取り込み</li>
            <li><strong>自動データ化</strong>: バクラク請求書のAI OCR機能で請求書の内容を自動でデータ化</li>
            <li><strong>API連携</strong>: バクラク請求書からMoney Forward会計へAPIを通じてデータを自動連携</li>
            <li><strong>仕訳の自動生成</strong>: 取り込まれたデータから会計仕訳を自動生成</li>
            <li><strong>承認ワークフロー</strong>: 設定したルールに基づき、承認フローを自動実行</li>
            <li><strong>支払処理</strong>: 承認された請求書の支払処理を実行</li>
            <li><strong>会計帳簿への反映</strong>: 全ての処理結果が会計帳簿に自動反映</li>
          </ol>
          
          {/* 業務フロー図 (SVG) */}
          <div className="workflow-container">
            <svg className="workflow-svg" viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg">
              {/* 背景 */}
              <rect width="800" height="400" fill="#f8fafc" rx="10" ry="10" />
              
              {/* 連携フロー線 */}
              <path
                d="M100,200 C150,100 250,100 300,200 C350,300 450,300 500,200 C550,100 650,100 700,200"
                fill="none"
                stroke="#2563eb"
                strokeWidth="3"
                strokeDasharray="10,5"
                className="flow-path"
              />
              
              {/* 矢印 */}
              <path
                d="M690,190 L700,200 L690,210"
                fill="none"
                stroke="#2563eb"
                strokeWidth="3"
                className="flow-path"
              />
              
              {/* ノード1: 請求書受領 */}
              <g className="flow-node">
                <circle cx="100" cy="200" r="40" fill="#ffffff" stroke="#2563eb" strokeWidth="2" />
                <text x="100" y="190" textAnchor="middle" fill="#1e293b" fontSize="12" fontWeight="bold">請求書</text>
                <text x="100" y="210" textAnchor="middle" fill="#1e293b" fontSize="12">受領</text>
              </g>
              
              {/* ノード2: バクラク請求書 */}
              <g className="flow-node">
                <circle cx="300" cy="200" r="50" fill="#ffffff" stroke="#0ea5e9" strokeWidth="2" />
                <text x="300" y="190" textAnchor="middle" fill="#1e293b" fontSize="14" fontWeight="bold">バクラク</text>
                <text x="300" y="210" textAnchor="middle" fill="#1e293b" fontSize="14">請求書</text>
              </g>
              
              {/* ノード3: API連携 */}
              <g className="flow-node">
                <rect x="385" y="170" width="90" height="60" rx="10" ry="10" fill="#2563eb" stroke="none" />
                <text x="430" y="205" textAnchor="middle" fill="#ffffff" fontSize="14" fontWeight="bold">API連携</text>
              </g>
              
              {/* ノード4: Money Forward会計 */}
              <g className="flow-node">
                <circle cx="500" cy="200" r="50" fill="#ffffff" stroke="#3b82f6" strokeWidth="2" />
                <text x="500" y="190" textAnchor="middle" fill="#1e293b" fontSize="14" fontWeight="bold">MF会計</text>
                <text x="500" y="210" textAnchor="middle" fill="#1e293b" fontSize="12">仕訳自動生成</text>
              </g>
              
              {/* ノード5: 帳簿反映 */}
              <g className="flow-node">
                <circle cx="700" cy="200" r="40" fill="#ffffff" stroke="#2563eb" strokeWidth="2" />
                <text x="700" y="190" textAnchor="middle" fill="#1e293b" fontSize="12" fontWeight="bold">帳簿反映</text>
                <text x="700" y="210" textAnchor="middle" fill="#1e293b" fontSize="12">完了</text>
              </g>
              
              {/* バクラク説明 */}
              <g className="flow-node">
                <rect x="240" y="90" width="120" height="60" rx="5" ry="5" fill="#f0f9ff" stroke="#0ea5e9" strokeWidth="1" strokeDasharray="5,2" />
                <text x="300" y="115" textAnchor="middle" fill="#0ea5e9" fontSize="11">AI OCR技術</text>
                <text x="300" y="135" textAnchor="middle" fill="#0ea5e9" fontSize="11">自動データ化</text>
              </g>
              
              {/* MF説明 */}
              <g className="flow-node">
                <rect x="440" y="90" width="120" height="60" rx="5" ry="5" fill="#eff6ff" stroke="#3b82f6" strokeWidth="1" strokeDasharray="5,2" />
                <text x="500" y="115" textAnchor="middle" fill="#3b82f6" fontSize="11">自動仕訳</text>
                <text x="500" y="135" textAnchor="middle" fill="#3b82f6" fontSize="11">承認ワークフロー</text>
              </g>
            </svg>
          </div>
          
          <p style={{marginTop: '1.5rem'}}>
            これにより、請求書受領から会計処理、支払いまでの一連の流れを自動化することができます。
          </p>
        </div>
        
        <div className="card">
          <h3><i className="fas fa-code" style={{marginRight: '10px', color: 'var(--primary)'}}></i> APIによる連携の技術詳細</h3>
          <ul>
            <li><strong>バクラク請求書API</strong>: 請求書のデータをJSON形式で取得</li>
            <li><strong>Money Forward会計API</strong>: 取引や仕訳データの登録・更新</li>
            <li><strong>中間連携サーバー</strong>: データ形式の変換やビジネスロジックの適用</li>
            <li><strong>バッチ処理</strong>: 定期的な同期処理の実行</li>
            <li><strong>エラーハンドリング</strong>: 例外発生時の通知と再試行メカニズム</li>
          </ul>
          <p className="source-link">
            Money Forward API仕様に基づいて設計: <a href="https://biz.moneyforward.com/" target="_blank">https://biz.moneyforward.com/</a>
          </p>
        </div>
        
        <div className="card">
          <h3><i className="fas fa-yen-sign" style={{marginRight: '10px', color: 'var(--primary)'}}></i> 導入にかかる工数・費用</h3>
          <table className="price-table">
            <thead>
              <tr>
                <th>項目</th>
                <th>内容</th>
                <th>費用（税抜）</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>初期設定費用</td>
                <td>API連携設定、カスタマイズ、データ移行</td>
                <td>150,000円〜</td>
              </tr>
              <tr>
                <td>月額利用料</td>
                <td>BPaaSサービス利用料（サポート込み）</td>
                <td>50,000円〜</td>
              </tr>
              <tr>
                <td>追加カスタマイズ</td>
                <td>特殊なビジネスロジックの実装など</td>
                <td>要見積もり</td>
              </tr>
            </tbody>
          </table>
          <p>※ Money Forward会計、バクラク請求書の利用料は別途必要です。</p>
        </div>
        
        <div className="card">
          <h3><i className="fas fa-chart-pie" style={{marginRight: '10px', color: 'var(--primary)'}}></i> 導入効果の試算例</h3>
          <div className="flex-container" style={{marginTop: '1rem'}}>
            <div className="flex-item" style={{flex: '1 1 200px'}}>
              <div style={{display: 'flex', alignItems: 'center', marginBottom: '1rem'}}>
                <i className="fas fa-clock" style={{fontSize: '1.5rem', color: 'var(--primary)', marginRight: '1rem'}}></i>
                <div>
                  <div style={{fontWeight: '700'}}>請求書処理時間</div>
                  <div>1件あたり15分→2分（約87%削減）</div>
                </div>
              </div>
            </div>
            <div className="flex-item" style={{flex: '1 1 200px'}}>
              <div style={{display: 'flex', alignItems: 'center', marginBottom: '1rem'}}>
                <i className="fas fa-calendar-alt" style={{fontSize: '1.5rem', color: 'var(--primary)', marginRight: '1rem'}}></i>
                <div>
                  <div style={{fontWeight: '700'}}>月間工数削減</div>
                  <div>月間300件の場合、約65時間の削減</div>
                </div>
              </div>
            </div>
            <div className="flex-item" style={{flex: '1 1 200px'}}>
              <div style={{display: 'flex', alignItems: 'center', marginBottom: '1rem'}}>
                <i className="fas fa-coins" style={{fontSize: '1.5rem', color: 'var(--primary)', marginRight: '1rem'}}></i>
                <div>
                  <div style={{fontWeight: '700'}}>コスト削減効果</div>
                  <div>年間約100万円（人件費削減）</div>
                </div>
              </div>
            </div>
            <div className="flex-item" style={{flex: '1 1 200px'}}>
              <div style={{display: 'flex', alignItems: 'center', marginBottom: '1rem'}}>
                <i className="fas fa-chart-line" style={{fontSize: '1.5rem', color: 'var(--primary)', marginRight: '1rem'}}></i>
                <div>
                  <div style={{fontWeight: '700'}}>ROI</div>
                  <div>約8ヶ月で初期投資回収</div>
                </div>
              </div>
            </div>
          </div>
          <p className="source-link">
            バクラク請求書の公式資料に基づく効率化効果: <a href="https://bakuraku.jp/" target="_blank">https://bakuraku.jp/</a>
          </p>
        </div>
      </div>
    </section>
  );
};
