// FAQ（よくある質問と回答）コンポーネント
const FAQ = () => {
    // FAQの状態管理
    const [openFaq, setOpenFaq] = React.useState(null);
    
    // FAQ項目をトグルする関数
    const toggleFaq = (index) => {
      if (openFaq === index) {
        setOpenFaq(null);
      } else {
        setOpenFaq(index);
      }
    };
    
    // FAQ項目
    const faqItems = [
      {
        question: "Money Forward会計とバクラク請求書の両方を契約する必要がありますか？",
        answer: "はい、両サービスの契約が必要です。ただし、当社を通じてご契約いただくと割引特典がございます。Money Forwardクラウド会計とバクラク請求書は別々のサービスですが、API連携によって統合されたソリューションを提供しています。"
      },
      {
        question: "既存の会計ソフトからの移行は可能ですか？",
        answer: "可能です。既存の会計データの移行サポートも行っております。Money Forward会計はCSVインポート機能を備えており、様々な形式のデータを取り込むことができます。移行に関する詳細は個別にご相談ください。"
      },
      {
        question: "カスタマイズの範囲はどこまで対応可能ですか？",
        answer: "基本的には、Money Forward会計APIとバクラク請求書APIの範囲内でのカスタマイズとなりますが、特殊な要件にも可能な限り対応いたします。API連携以外の部分でのカスタマイズについては個別にご相談ください。"
      },
      {
        question: "導入後のサポート体制はどうなっていますか？",
        answer: "平日9:00〜18:00のサポートデスク対応と、月次での定期レビューを標準で提供しています。プロフェッショナルプラン以上では、優先サポートや休日対応なども可能です。"
      },
      {
        question: "セキュリティ面は大丈夫ですか？",
        answer: "Money Forward会計およびバクラク請求書は、それぞれ高度なセキュリティ基準を満たしています。Money Forwardはクラウドセキュリティの国際認証であるISO27001を取得しています。当社の連携システムも、SSL通信の採用やデータの暗号化など、セキュリティに配慮した設計となっています。"
      },
      {
        question: "小規模な会社でも導入するメリットはありますか？",
        answer: "はい、あります。特に経理担当者が少ない小規模企業では、業務効率化の効果が大きく、本業に集中するための時間を確保できます。スタンダードプランは小規模企業向けに設計されています。バクラク請求書のAI OCR技術により、少ない投資で大きなリターンを得ることができます。"
      }
    ];
    
    return (
      <section id="faq">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">よくある質問</h2>
            <p className="section-description">
              お客様からよくいただくご質問と回答をまとめました
            </p>
          </div>
          
          <div>
            {faqItems.map((item, index) => (
              <div key={index} className="faq-item">
                <div 
                  className="faq-question" 
                  onClick={() => toggleFaq(index)}
                >
                  {item.question}
                  <i className={`fas fa-chevron-down ${openFaq === index ? 'open' : ''}`}></i>
                </div>
                <div className={`faq-answer ${openFaq === index ? 'open' : ''}`}>
                  {item.answer}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
