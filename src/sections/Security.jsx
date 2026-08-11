import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "../styles/security.css";
import securityLock from "../assets/security-lock.png";

gsap.registerPlugin(ScrollTrigger);

const Security = () => {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });

      timeline
        .from(".security-label", {
          y: 25,
          opacity: 0,
          duration: 0.7,
          ease: "power3.out",
        })

        .from(
          ".security-title",
          {
            y: 50,
            opacity: 0,
            duration: 0.9,
            ease: "power3.out",
          },
          "-=0.35"
        )

        .from(
          ".security-description",
          {
            y: 25,
            opacity: 0,
            duration: 0.7,
            ease: "power3.out",
          },
          "-=0.5"
        )

        .from(
          ".security-visual",
          {
            scale: 0.8,
            opacity: 0,
            rotate: -8,
            duration: 1,
            ease: "power3.out",
          },
          "-=0.6"
        )

        .from(
          ".security-item",
          {
            y: 25,
            opacity: 0,
            duration: 0.6,
            stagger: 0.15,
            ease: "power3.out",
          },
          "-=0.4"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="security" ref={sectionRef} id="security">
      <div className="security-container">

        {/* MAIN SECURITY CONTENT */}
        <div className="security-main">

          {/* LEFT — TEXT */}
          <div className="security-content">

            <span className="security-label">
              SECURITY AT ETHLY
            </span>

            <h2 className="security-title">
              Your money deserves
              <br />
              a <span>higher level</span> of security.
            </h2>

            <p className="security-description">
              We build every part of ETHLY with your security in mind,
              giving you the confidence to send, spend, and manage
              your money with peace of mind.
            </p>

          </div>

          {/* RIGHT — PADLOCK */}
          <div className="security-visual">
            <img
              src={securityLock}
              alt="ETHLY security lock"
              className="security-lock"
            />
          </div>

        </div>


        {/* SECURITY FEATURES */}
        <div className="security-items">

          <div className="security-item">
            <span className="security-item-number">
              01
            </span>

            <div>
              <h3>Account protection</h3>

              <p>
                Your account and personal information are
                protected with security measures designed
                for everyday banking.
              </p>
            </div>
          </div>


          <div className="security-item">
            <span className="security-item-number">
              02
            </span>

            <div>
              <h3>Secure transactions</h3>

              <p>
                Important transactions are protected with
                secure verification, keeping you in control
                of your money.
              </p>
            </div>
          </div>


          <div className="security-item">
            <span className="security-item-number">
              03
            </span>

            <div>
              <h3>Clear activity</h3>

              <p>
                Keep track of your transactions and account
                activity so you always know what is happening
                with your money.
              </p>
            </div>
          </div>

        </div>

      </div>


      {/* CURVED TRANSITION */}
      <div className="security-curve"></div>
    </section>
  );
};

export default Security;