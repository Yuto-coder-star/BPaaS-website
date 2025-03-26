// メイン App コンポーネント
const App = () => {
  return (
    <React.Fragment>
      <ScrollAnimation />
      <Header />
      <Navigation />
      <CompanyOverview />
      <Features />
      <PricingAndProcess />
      <CaseStudies />
      <IntegrationProposal />
      <DXInitiatives />
      <FAQ />
      <Contact />
      <Footer />
    </React.Fragment>
  );
};

// レンダリング
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App />);
