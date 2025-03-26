import React, { useState, useEffect } from 'react';

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('overview');
  
  // モバイルメニューの開閉を切り替える関数
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  
  // メニューを閉じる関数
  const closeMenu = () => {
    setMobileMenuOpen(false);
  };
  
  useEffect(() => {
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
  
  // ナビゲーションのスタイル
  const navStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    zIndex: 1000,
    backgroundColor: scrolled ? '#ffffff' : 'transparent',
    boxShadow: scrolled ? '0 2px 10px rgba(0, 0, 0, 0.1)' : 'none',
    transition: 'all 0.3s ease',
    padding: scrolled ? '10px 0' : '20px 0',
  };
  
  const navContainerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px',
  };
  
  const navLinksStyle = {
    display: 'flex',
    listStyle: 'none',
    margin: 0,
    padding: 0,
  };
  
  // モバイル用のスタイル
  const mobileNavLinksStyle = {
    ...navLinksStyle,
    position: 'absolute',
    top: '100%',
    left: 0,
    width: '100%',
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    maxHeight: mobileMenuOpen ? '500px' : '0',
    overflow: 'hidden',
    transition: 'max-height 0.3s ease',
    zIndex: 999,
  };
  
  const mobileMenuBtnStyle = {
    display: 'none',
    background: 'none',
    border: 'none',
    fontSize: '24px',
    cursor: 'pointer',
    '@media (max-width: 768px)': {
      display: 'block',
    }
  };
  
  return (
    <nav style={navStyle} className={scrolled ? 'scrolled' : ''}>
      <div style={navContainerStyle} className="nav-container">
        <a href="#top" className="nav-logo">
          <i className="fas fa-layer-group"></i> BPaaS
        </a>
        <button 
          className="mobile-menu-btn" 
          onClick={toggleMobileMenu}
          style={mobileMenuBtnStyle}
        >
          <i className={mobileMenuOpen ? "fas fa-times" : "fas fa-bars"}></i>
        </button>
        <ul 
          className={`nav-links ${mobileMenuOpen ? 'open' : ''}`}
          style={window.innerWidth <= 768 ? mobileNavLinksStyle : navLinksStyle}
        >
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
      
      {/* ナビゲーションの高さ分のスペースを確保するためのダミー要素 */}
      <div style={{ height: '60px' }}></div>
      
      <style jsx>{`
        @media (max-width: 768px) {
          .nav-links {
            position: absolute;
            top: 100%;
            left: 0;
            width: 100%;
            flex-direction: column;
            background-color: #ffffff;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.3s ease;
          }
          
          .nav-links.open {
            max-height: 500px;
          }
          
          .nav-links li {
            margin: 0;
            width: 100%;
            text-align: center;
          }
          
          .nav-links li a {
            display: block;
            padding: 15px;
            border-bottom: 1px solid #eee;
          }
          
          .mobile-menu-btn {
            display: block;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navigation;
