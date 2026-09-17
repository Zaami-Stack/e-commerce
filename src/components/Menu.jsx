import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import "./Menu.css";
import categories from "../data/categories";

function Menu({ open, onClose }) {
  const rootRef = useRef(null);
  const navRef = useRef(null);
  const timelineRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const links = gsap.utils.toArray(".menu__link", navRef.current);
      const subs = gsap.utils.toArray(".menu__sub", navRef.current);
      const brand = gsap.utils.toArray(".menu__brand-text", navRef.current);

      links.forEach((link) => {
        let arrow = link.querySelector(".menu__arrow");
        if (!arrow) {
          arrow = document.createElement("span");
          arrow.className = "menu__arrow";
          arrow.textContent = "→";
          arrow.setAttribute("aria-hidden", "true");
          link.appendChild(arrow);
        }

        let underline = link.querySelector(".menu__underline");
        if (!underline) {
          underline = document.createElement("span");
          underline.className = "menu__underline";
          underline.setAttribute("aria-hidden", "true");
          link.appendChild(underline);
        }

        gsap.set(arrow, { opacity: 0, x: 8, rotate: 0 });
        gsap.set(underline, { scaleX: 0 });

        link.addEventListener("mouseenter", () => {
          gsap.to(link, {
            x: 10,
            letterSpacing: "0.06em",
            color: "#757575",
            duration: 0.45,
            ease: "power3.out",
          });
          gsap.to(underline, {
            scaleX: 1,
            duration: 0.5,
            ease: "power3.out",
          });
          gsap.to(arrow, {
            opacity: 1,
            x: 0,
            rotate: 45,
            duration: 0.35,
            ease: "power3.out",
          });
        });
        link.addEventListener("mouseleave", () => {
          gsap.to(link, {
            x: 0,
            letterSpacing: "0.02em",
            color: "#000",
            duration: 0.4,
            ease: "power2.out",
          });
          gsap.to(underline, {
            scaleX: 0,
            duration: 0.4,
            ease: "power2.out",
          });
          gsap.to(arrow, {
            opacity: 0,
            x: 8,
            rotate: 0,
            duration: 0.35,
            ease: "power2.out",
          });
        });
      });

      subs.forEach((sub) => {
        let underline = sub.querySelector(".menu__underline");
        if (!underline) {
          underline = document.createElement("span");
          underline.className = "menu__underline";
          underline.setAttribute("aria-hidden", "true");
          sub.appendChild(underline);
        }

        gsap.set(underline, { scaleX: 0 });

        sub.addEventListener("mouseenter", () => {
          gsap.to(sub, {
            x: 6,
            color: "#757575",
            duration: 0.35,
            ease: "power3.out",
          });
          gsap.to(underline, {
            scaleX: 1,
            duration: 0.4,
            ease: "power3.out",
          });
        });
        sub.addEventListener("mouseleave", () => {
          gsap.to(sub, {
            x: 0,
            color: "#000",
            duration: 0.3,
            ease: "power2.out",
          });
          gsap.to(underline, {
            scaleX: 0,
            duration: 0.3,
            ease: "power2.out",
          });
        });
      });

      gsap.set([...links, ...subs, ...brand], { opacity: 0, y: 24 });

      timelineRef.current = gsap
        .timeline({ paused: true, defaults: { ease: "power2.out" } })
        .fromTo(
          links,
          { opacity: 0, y: 28 },
          { opacity: 1, y: 0, duration: 0.5, stagger: 0.1 },
          0.25
        )
        .fromTo(
          subs,
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.4, stagger: 0.06 },
          0.6
        )
        .fromTo(
          brand,
          { opacity: 0, y: 40, clipPath: "inset(0 0 100% 0)" },
          {
            opacity: 1,
            y: 0,
            clipPath: "inset(0 0 0% 0)",
            duration: 0.7,
            ease: "power3.out",
          },
          0.7
        );
    }, rootRef);

    return () => ctx.revert();
  }, []);

  useLayoutEffect(() => {
    if (open) {
      timelineRef.current?.play();
    } else {
      timelineRef.current?.reverse();
    }
  }, [open]);

  return (
    <div
      ref={rootRef}
      className={`menu ${open ? "menu--open" : ""}`}
      aria-hidden={!open}
    >
      <div className="menu__bar">
        <button className="menu__close" onClick={onClose} aria-label="Close menu">
          <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1">
            <path d="M4 4l16 16M20 4L4 20" />
          </svg>
        </button>
      </div>

      <nav ref={navRef} className="menu__nav">
        <div className="menu__categories">
          {categories.map((category) => (
            <a key={category.id} href="#" className="menu__link" onClick={onClose}>
              {category.name}
            </a>
          ))}
        </div>

        <div className="menu__aside">
          <div className="menu__group">
            <span className="menu__group-title">Account</span>
            <a href="#" className="menu__sub" onClick={onClose}>
              Log in
            </a>
            <a href="#" className="menu__sub" onClick={onClose}>
              Register
            </a>
            <a href="#" className="menu__sub" onClick={onClose}>
              My orders
            </a>
          </div>

          <div className="menu__group">
            <span className="menu__group-title">Help</span>
            <a href="#" className="menu__sub" onClick={onClose}>
              Track order
            </a>
            <a href="#" className="menu__sub" onClick={onClose}>
              Returns
            </a>
            <a href="#" className="menu__sub" onClick={onClose}>
              Stores
            </a>
          </div>
        </div>

        <div className="menu__brand">
          <h2 className="menu__brand-text">
            <span>i</span>Planet
          </h2>
        </div>
      </nav>

      <div className="menu__footer">
        <span>iPlanet © 2026</span>
        <span>All Rights Reserved</span>
      </div>
    </div>
  );
}

export default Menu;