import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../styles/footer.css";

gsap.registerPlugin(ScrollTrigger);

const columns = [
  {
    heading: "Personal Banking",
    links: [
      "Explore Personal",
      "Send Money",
      "Investments",
      "Ethly Card",
      "Ethly Premium",
      "Savings",
      "Transfers",
    ],
  },
  {
    heading: "Business Banking",
    links: [
      "Explore Business",
      "POS Machine",
      "Business API",
      "Business Registration",
      "Cashback",
      "Expense Accounts",
      "Ethly Payroll",
    ],
  },
  {
    heading: "Help",
    links: [
      "Contact Us",
      "FAQs",
      "Help Center",
      "Scam Awareness",
      "Security",
      "Self Help",
    ],
  },
  {
    heading: "Company",
    links: ["About Us", "Blog", "Careers", "Press"],
  },
  {
    heading: "Transparency",
    links: [
      "Cookie Policy",
      "Disclaimers",
      "Information Security Policy",
      "Privacy Policy",
      "Terms & Conditions",
      "Whistleblowing Policy",
    ],
  },
  {
    heading: "Social Media",
    links: ["Facebook", "Instagram", "LinkedIn", "Twitter", "YouTube"],
  },
];

const wordmark = ["E", "T", "H", "L", "Y"];

function Footer() {
  const footerRef = useRef(null);

  useGSAP(
    () => {
      gsap.from(".footer-col", {
        opacity: 0,
        y: 20,
        duration: 0.7,
        stagger: 0.08,
        ease: "power3.out",
        scrollTrigger: { trigger: footerRef.current, start: "top 85%" },
      });

      // Loop: letters rise from below, one after another, then reset and repeat
      const tl = gsap.timeline({
        repeat: -1,
        repeatDelay: 0.8,
        scrollTrigger: { trigger: ".footer-wordmark", start: "top 90%" },
      });

      tl.from(".wordmark-letter", {
        y: "110%",
        opacity: 0,
        duration: 0.7,
        stagger: 0.12,
        ease: "power3.out",
      }).to(".wordmark-letter", {
        y: "-110%",
        opacity: 0,
        duration: 0.6,
        stagger: 0.08,
        ease: "power2.in",
        delay: 1,
      });
    },
    { scope: footerRef },
  );

  return (
    <footer className="footer" ref={footerRef}>
      <div className="footer-container">
        <div className="footer-grid">
          {columns.map((col, i) => (
            <div className="footer-col" key={i}>
              <span className="footer-col-heading">{col.heading}</span>
              {col.links.map((link, j) => (
                <a href="#" className="footer-link" key={j}>
                  {link}
                </a>
              ))}
            </div>
          ))}

          <div className="footer-col">
            <span className="footer-col-heading">Email Us</span>
            <a
              href="mailto:help@ethlybank.com"
              className="footer-link footer-link-gold"
            >
              help@ethlybank.com
            </a>

            <span className="footer-col-heading footer-col-heading-spaced">
              Visit Us
            </span>
            <p className="footer-address">
              <strong>Lagos</strong>
              <br />
              1-11 Commercial Avenue
              <br />
              Yaba, Lagos
            </p>
          </div>
        </div>

        {/* GIANT FULL-WIDTH WORDMARK */}
        <div className="footer-wordmark-wrap">
          <h2 className="footer-wordmark">
            {wordmark.map((letter, i) => (
              <span className="wordmark-letter-mask" key={i}>
                <span className="wordmark-letter">{letter}</span>
              </span>
            ))}
          </h2>
        </div>

        <p className="footer-legal">
          Ethly is a student portfolio project and demo banking interface. It is
          not a licensed financial institution and does not process real
          transactions.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
