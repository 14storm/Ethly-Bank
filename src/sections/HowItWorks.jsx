import "../styles/howItWorks.css";

const HowItWorks = () => {
  return (
    <section className="how-it-works">
      <div className="how-it-works-container">

        <div className="how-it-works-heading">
          <span className="how-it-works-label">
            HOW ETHLY WORKS
          </span>

          <h2>
            Simple banking,
            <br />
            <span>from start to finish.</span>
          </h2>

          <p>
            Getting started with ETHLY is simple. Create your account,
            fund it, and enjoy everything modern banking has to offer.
          </p>
        </div>


        <div className="how-it-works-cards">

          {/* CARD 01 */}
          <article className="how-card">
            <div className="how-card-top">
              <span className="how-card-number">
                01
              </span>

              <span className="how-card-arrow">
                ↗
              </span>
            </div>

            <div className="how-card-visual account-visual">
              <div className="account-circle">
                E
              </div>

              <div className="account-line"></div>
              <div className="account-line short"></div>
            </div>

            <div className="how-card-content">
              <h3>Create your account</h3>

              <p>
                Get started with ETHLY in a few simple steps
                and set up your account securely.
              </p>
            </div>
          </article>


          {/* CARD 02 */}
          <article className="how-card">
            <div className="how-card-top">
              <span className="how-card-number">
                02
              </span>

              <span className="how-card-arrow">
                ↗
              </span>
            </div>

            <div className="how-card-visual fund-visual">
              <div className="fund-card">
                <span>ETHLY</span>

                <strong>₦50,000</strong>

                <small>Added to balance</small>
              </div>
            </div>

            <div className="how-card-content">
              <h3>Fund your account</h3>

              <p>
                Add money to your ETHLY account and get ready
                to send, spend, save, and pay.
              </p>
            </div>
          </article>


          {/* CARD 03 */}
          <article className="how-card how-card-dark">
            <div className="how-card-top">
              <span className="how-card-number">
                03
              </span>

              <span className="how-card-arrow">
                ↗
              </span>
            </div>

            <div className="how-card-visual banking-visual">
              <div className="mini-card">
                <span>ETHLY</span>

                <div className="mini-card-chip"></div>

                <small>•••• 4821</small>
              </div>

              <div className="payment-check">
                ✓
              </div>
            </div>

            <div className="how-card-content">
              <h3>Start banking</h3>

              <p>
                Send money, pay bills, manage your cards,
                and stay on top of your finances from one place.
              </p>
            </div>
          </article>

        </div>
      </div>
    </section>
  );
};

export default HowItWorks;