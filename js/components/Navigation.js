// ナビゲーションコンポーネント
const Navigation = () => {
  const [scrolled, setScrolled] = React.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [activeLink, setActiveLink] = React.useState('overview');
  
  // モバイルメニューの開閉を切り替える関数
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  
  // メニューを閉じる関数
  const closeMenu = () => {
    setMobileMenuOpen(false);
  };
  
  React.useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const scrollPosition = window.scrollY + 100;
      
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveLink(sectionId);
        }
      });
      
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    // スクロール外のクリックでもメニューを閉じる
    const handleClickOutside = (event) => {
      const navLinks = document.querySelector('.nav-links');
      const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
      
      if (
        mobileMenuOpen && 
        navLinks && 
        !navLinks.contains(event.target) && 
        !mobileMenuBtn.contains(event.target)
      ) {
        closeMenu();
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    document.addEventListener('click', handleClickOutside);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('click', handleClickOutside);
    };
  }, [mobileMenuOpen]);
  
  // コンテンツ領域にpadding-topを追加するためのコンポーネント
  React.useEffect(() => {
    // ナビゲーションの高さを取得してページコンテンツにpadding-topを適用
    const nav = document.querySelector('nav');
    if (nav) {
      const navHeight = nav.offsetHeight;
      document.body.style.paddingTop = `${navHeight}px`;
    }
    
    return () => {
      document.body.style.paddingTop = '0';
    };
  }, []);
  
  return (
    <nav className={`fixed-nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <a href="#top" className="nav-logo">
          <i className="fas fa-layer-group"></i> BPaaS
        </a>
        <button className="mobile-menu-btn" onClick={toggleMobileMenu}>
          <i className={mobileMenuOpen ? "fas fa-times" : "fas fa-bars"}></i>
        </button>
        <ul className={`nav-links ${mobileMenuOpen ? 'open' : ''}`}>
          <li><a href="#overview" className={`nav-link ${activeLink === 'overview' ? 'active' : ''}`} onClick={closeMenu}>企業概要</a></li>
          <li><a href="#features" className={`nav-link ${activeLink === 'features' ? 'active' : ''}`} onClick={closeMenu}>特徴・メリット</a></li>
          <li><a href="#pricing" className={`nav-link ${activeLink === 'pricing' ? 'active' : ''}`} onClick={closeMenu}>料金・導入</a></li>
          <li><a href="#cases" className={`nav-link ${activeLink === 'cases' ? 'active' : ''}`} onClick={closeMenu}>導入事例</a></li>
          <li><a href="#integration" className={`nav-link ${activeLink === 'integration' ? 'active' : ''}`} onClick={closeMenu}>MF連携</a></li>
          <li><a href="#dx" className={`nav-link ${activeLink === 'dx' ? 'active' : ''}`} onClick={closeMenu}>DXへの取り組み</a></li>
          <li><a href="#faq" className={`nav-link ${activeLink === 'faq' ? 'active' : ''}`} onClick={closeMenu}>FAQ</a></li>
          <li><a href="#contact" className="nav-cta" onClick={closeMenu}>お問い合わせ</a></li>
        </ul>
      </div>
    </nav>
  );
};

/* CSS追加部分 */
/* 
以下のCSSをスタイルシートに追加してください

.fixed-nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  background-color: #fff; /* または任意の背景色 */
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.fixed-nav.scrolled {
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  /* 他のスクロール時のスタイル変更 */
}

/* モバイルメニューの調整 */
@media (max-width: 768px) {
  .nav-links {
    position: fixed;
    top: 60px; /* ナビゲーションバーの高さに応じて調整 */
    left: 0;
    width: 100%;
    background-color: #fff;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  }
}
*/
