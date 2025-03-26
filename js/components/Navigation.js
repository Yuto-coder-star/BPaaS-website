// ナビゲーションコンポーネント
const Navigation = () => {
  const [scrolled, setScrolled] = React.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [activeLink, setActiveLink] = React.useState('overview');
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // メニュー項目クリック時の処理を追加
  const handleMenuItemClick = () => {
    // モバイルメニューを閉じる
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
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <nav className={scrolled ? 'scrolled' : ''}>
      <div className="container nav-container">
        <a href="#top" className="nav-logo">
          <i className="fas fa-layer-group"></i> BPaaS
        </a>
        <button className="mobile-menu-btn" onClick={toggleMobileMenu}>
          <i className={mobileMenuOpen ? "fas fa-times" : "fas fa-bars"}></i>
        </button>
        <ul className={`nav-links ${mobileMenuOpen ? 'open' : ''}`}>
          <li><a href="#overview" className={`nav-link ${activeLink === 'overview' ? 'active' : ''}`} onClick={handleMenuItemClick}>企業概要</a></li>
          <li><a href="#features" className={`nav-link ${activeLink === 'features' ? 'active' : ''}`} onClick={handleMenuItemClick}>特徴・メリット</a></li>
          <li><a href="#pricing" className={`nav-link ${activeLink === 'pricing' ? 'active' : ''}`} onClick={handleMenuItemClick}>料金・導入</a></li>
          <li><a href="#cases" className={`nav-link ${activeLink === 'cases' ? 'active' : ''}`} onClick={handleMenuItemClick}>導入事例</a></li>
          <li><a href="#integration" className={`nav-link ${activeLink === 'integration' ? 'active' : ''}`} onClick={handleMenuItemClick}>MF連携</a></li>
          <li><a href="#dx" className={`nav-link ${activeLink === 'dx' ? 'active' : ''}`} onClick={handleMenuItemClick}>DXへの取り組み</a></li>
          <li><a href="#faq" className={`nav-link ${activeLink === 'faq' ? 'active' : ''}`} onClick={handleMenuItemClick}>FAQ</a></li>
          <li><a href="#contact" className="nav-cta" onClick={handleMenuItemClick}>お問い合わせ</a></li>
        </ul>
      </div>
    </nav>
  );
};
