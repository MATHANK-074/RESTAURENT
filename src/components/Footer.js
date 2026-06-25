function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h2 className="footer-title">Food</h2>
        </div>

        <div className="footer-section">
          <h3>Company</h3>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#careers">Carrers</a></li>
            <li><a href="#team">Team</a></li>
            <li><a href="#foodone">Food One</a></li>
            <li><a href="#foodinstant">Food Instant</a></li>
            <li><a href="#foodgenie">Food Genie</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact us</h3>
          <ul>
            <li><a href="#help">Help & Support</a></li>
            <li><a href="#partner">Partner with us</a></li>
            <li><a href="#ride">Ride with us</a></li>
          </ul>
          <h3 style={{ marginTop: 24 }}>Legal</h3>
          <ul>
            <li><a href="#terms">Terms & Conditions</a></li>
            <li><a href="#cookie">Cookie Policy</a></li>
            <li><a href="#privacy">Privacy Policy</a></li>
            <li><a href="#investor">Investor Relations</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>We deliver to:</h3>
          <ul>
            <li><a href="#bangalore">Bangalore</a></li>
            <li><a href="#gurgaon">Gurgaon</a></li>
            <li><a href="#hyderabad">Hyderabad</a></li>
            <li><a href="#delhi">Delhi</a></li>
            <li><a href="#mumbai">Mumbai</a></li>
            <li><a href="#pune">Pune</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
