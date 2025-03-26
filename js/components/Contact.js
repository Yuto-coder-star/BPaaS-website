// お問い合わせコンポーネント
const Contact = () => {
    return (
      <section id="contact">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">お問い合わせ</h2>
            <p className="section-description">
              ご質問やデモのご依頼など、お気軽にお問い合わせください
            </p>
          </div>
          
          <div className="contact-grid">
            <div className="contact-info">
              <h3 className="contact-info-title">お問い合わせ方法</h3>
              <div className="contact-item">
                <div className="contact-icon">
                  <i className="fas fa-phone-alt"></i>
                </div>
                <div className="contact-text">
                  <div className="contact-label">電話</div>
                  <div>03-1234-5678</div>
                  <div>平日 9:00〜18:00</div>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">
                  <i className="fas fa-envelope"></i>
                </div>
                <div className="contact-text">
                  <div className="contact-label">メール</div>
                  <div>info@bpaas-example.jp</div>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div className="contact-text">
                  <div className="contact-label">所在地</div>
                  <div>〒100-0001</div>
                  <div>東京都千代田区1-1-1</div>
                  <div>サンプルビル8F</div>
                </div>
              </div>
            </div>
            
            <div className="card">
              <h3><i className="fas fa-paper-plane" style={{marginRight: '10px', color: 'var(--primary)'}}></i> お問い合わせフォーム</h3>
              <p style={{marginBottom: '1.5rem'}}>
                デモのご希望やより詳しい資料をご希望の方は、その旨をお問い合わせ内容にご記入ください。
              </p>
              <button className="button" style={{width: '100%'}}>お問い合わせフォームへ</button>
              <div style={{textAlign: 'center', marginTop: '1rem'}}>
                <button className="button secondary">
                  <i className="fas fa-download" style={{marginRight: '5px'}}></i> 
                  資料ダウンロード
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
