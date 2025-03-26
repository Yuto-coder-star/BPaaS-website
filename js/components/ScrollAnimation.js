// スクロールアニメーション効果
const ScrollAnimation = () => {
  React.useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const windowHeight = window.innerHeight;
      
      sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < windowHeight * 0.75) {
          section.classList.add('visible');
        }
      });
    };
    
    // 初回実行
    handleScroll();
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return null;
};
