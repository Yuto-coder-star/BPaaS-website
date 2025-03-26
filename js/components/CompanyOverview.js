// 企業概要・サービス概要コンポーネント
const CompanyOverview = () => {
    return (
      <section id="overview">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">企業概要・サービス概要</h2>
            <p className="section-description">
              お客様のビジネスプロセス効率化をサポートするBPaaSソリューション
            </p>
          </div>
          
          <p>
            当社は、BPaaS（Business Process as a Service）を提供する企業として、お客様のビジネスプロセス効率化をサポートしています。
            特に、バックオフィス業務の自動化、効率化を得意としており、Money Forward会計とバクラク請求書を連携させた統合ソリューションを提供しています。
          </p>
          
          <div className="highlight">
            <p>
              <i className="fas fa-lightbulb" style={{marginRight: '10px', color: 'var(--secondary)'}}></i>
              クラウドベースのサービスにより、場所を選ばず業務を遂行でき、リモートワークにも最適な環境を構築します。
              APIを活用した柔軟な連携により、既存のシステムとのシームレスな統合も実現します。
            </p>
          </div>
          
          <div className="card">
            <h3><i className="fas fa-server" style={{marginRight: '10px', color: 'var(--primary)'}}></i> BPaaSとは</h3>
            <p>
              Business Process as a Serviceの略で、ビジネスプロセス全体をクラウドサービスとして提供するモデルです。
              従来のBPO（ビジネスプロセスアウトソーシング）とは異なり、クラウド技術とAIを活用して、より柔軟かつスケーラブルなサービスを実現しています。
            </p>
            <p className="source-link">
              参考: <a href="https://biz.moneyforward.com/" target="_blank">Money Forward クラウド</a>
            </p>
          </div>
        </div>
      </section>
    );
  };
