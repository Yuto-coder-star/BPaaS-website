// フッターコンポーネント
const Footer = () => {
    return (
      <footer>
        <div className="container">
          <div className="footer-grid">
            <div>
              <div className="footer-logo">
                <i className="fas fa-layer-group"></i> BPaaS
              </div>
              <p className="footer-description">
                BPaaS株式会社は、Money Forward会計とバクラク請求書の連携ソリューションを提供する企業です。バックオフィス業務の効率化を通じて、お客様のビジネス成長をサポートします。
              </p>
              <div className="footer-social">
                <a href="#" className="social-link">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="social-link">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="social-link">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="footer-title">サービス</h4>
              <ul className="footer-links">
                <li><a href="#overview">企業概要</a></li>
                <li><a href="#features">特徴・メリット</a></li>
                <li><a href="#pricing">料金プラン</a></li>
                <li><a href="#integration">API連携</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="footer-title">サポート</h4>
              <ul className="footer-links">
                <li><a href="#faq">よくある質問</a></li>
                <li><a href="#contact">お問い合わせ</a></li>
                <li><a href="#">サポートデスク</a></li>
                <li><a href="#">導入マニュアル</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="footer-title">関連リンク</h4>
              <ul className="footer-links">
                <li><a href="https://biz.moneyforward.com/" target="_blank">Money Forward クラウド</a></li>
                <li><a href="https://bakuraku.jp/" target="_blank">バクラク請求書</a></li>
                <li><a href="#">企業ブログ</a></li>
                <li><a href="#dx">DXへの取り組み</a></li>
                <li><a href="#">採用情報</a></li>
              </ul>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>&copy; 2023 BPaaS株式会社 All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
  };
