export default function Home() {
  return (
    <div>
      <header style={{background:'#FAF8F5',color:'white',padding:'20px 40px',display:'flex',alignItems:'center',justifyContent:'space-between'}}>
        <span style={{fontSize:'1.5rem',fontWeight:'bold'}}>Project 1788564008901</span>
        <nav style={{display:'flex',gap:'20px'}}>
          <a href="#nav_sticky" style={{color:'white',textDecoration:'none'}}>nav_sticky</a>
          <a href="#hero_split" style={{color:'white',textDecoration:'none'}}>hero_split</a>
          <a href="#products_featured" style={{color:'white',textDecoration:'none'}}>products_featured</a>
          <a href="#products_grid" style={{color:'white',textDecoration:'none'}}>products_grid</a>
          <a href="#about_centered" style={{color:'white',textDecoration:'none'}}>about_centered</a>
        </nav>
      </header>
      <section style={{background:'#FAF8F5',color:'white',padding:'100px 40px',textAlign:'center'}}>
        <h1 style={{fontSize:'3rem',fontWeight:'800',marginBottom:'20px'}}>Project 1788564008901</h1>
        <p style={{fontSize:'1.2rem',opacity:0.85,maxWidth:'600px',margin:'0 auto 40px'}}>Bloom   Stem is a refined boutique florist ecommerce website for browsing seasonal arrangements, purchasing same-day gifts, and subscribing to recurring flower deliveries. The experience emphasizes artisanal quality, local sourcing, sustainability, and effortless gifting.</p>
        <a href="#contact" style={{background:'#E8B4C4',color:'white',padding:'16px 32px',borderRadius:'50px',textDecoration:'none',fontWeight:'bold',display:'inline-block'}}>Get In Touch</a>
      </section>
      <section id="nav_sticky" style={{padding:'80px 40px',textAlign:'center'}}>
        <h2 style={{fontSize:'2rem',fontWeight:'700',marginBottom:'16px',color:'#FAF8F5'}}>nav_sticky</h2>
        <p style={{color:'#666',maxWidth:'500px',margin:'0 auto'}}>Contact us to learn more about our nav_sticky offerings.</p>
      </section>
      <section id="hero_split" style={{padding:'80px 40px',textAlign:'center'}}>
        <h2 style={{fontSize:'2rem',fontWeight:'700',marginBottom:'16px',color:'#FAF8F5'}}>hero_split</h2>
        <p style={{color:'#666',maxWidth:'500px',margin:'0 auto'}}>Contact us to learn more about our hero_split offerings.</p>
      </section>
      <section id="products_featured" style={{padding:'80px 40px',textAlign:'center'}}>
        <h2 style={{fontSize:'2rem',fontWeight:'700',marginBottom:'16px',color:'#FAF8F5'}}>products_featured</h2>
        <p style={{color:'#666',maxWidth:'500px',margin:'0 auto'}}>Contact us to learn more about our products_featured offerings.</p>
      </section>
      <section id="products_grid" style={{padding:'80px 40px',textAlign:'center'}}>
        <h2 style={{fontSize:'2rem',fontWeight:'700',marginBottom:'16px',color:'#FAF8F5'}}>products_grid</h2>
        <p style={{color:'#666',maxWidth:'500px',margin:'0 auto'}}>Contact us to learn more about our products_grid offerings.</p>
      </section>
      <section id="about_centered" style={{padding:'80px 40px',textAlign:'center'}}>
        <h2 style={{fontSize:'2rem',fontWeight:'700',marginBottom:'16px',color:'#FAF8F5'}}>about_centered</h2>
        <p style={{color:'#666',maxWidth:'500px',margin:'0 auto'}}>Contact us to learn more about our about_centered offerings.</p>
      </section>
      <footer style={{background:'#FAF8F5',color:'white',padding:'30px',textAlign:'center'}}>
        <p>Copyright 2026 Project 1788564008901. All rights reserved.</p>
      </footer>
    </div>
  );
}