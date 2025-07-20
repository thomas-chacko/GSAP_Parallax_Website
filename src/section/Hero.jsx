import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { useMediaQuery } from "react-responsive";

const Hero = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });

  const isTablet = useMediaQuery({
    query: "(max-width: 1024px)",
  });

  useGSAP(() => {
    const titleSplit = SplitText.create(".hero-title", {
      type: "chars",
    });

    const tl = gsap.timeline({
      delay: 1,
    });

    tl.to(".hero-content", {
      opacity: 1,
      y: 0,
      ease: "power1.out",
      duration: 1.5,
    })
      .to(
        ".hero-text-scroll",
        {
          duration: 1,
          clipPath: "polygon(0% 0%,100% 0%,100% 100%,0% 100%)",
          ease: "circ.inOut",
        },
        "-0.5"
      )
      .from(titleSplit.chars, {
        yPercent: 200,
        stagger: 0.1,
        ease: "power2.out",
      });

    tl.to(".hero-button", {
      y: 20,
      repeat: -1,
      yoyo: true,
      ease: "bounce.inOut",
      duration: 0.8,
      delay: 1.2,
    });

    const heroTL = gsap.timeline({
      scrollTrigger: {
        trigger: ".hero-container",
        start: "1% top",
        end: "bottom top",
        scrub: true,
      },
    });

    heroTL.to(".hero-container", {
      rotate: 7,
      scale: 0.7,
      yPercent: 30,
      ease: "power1.inOut",
    });
  });

  return (
    <section className="bg-main-bg">
      <div className="hero-container">
        {isTablet ? (
          <>
            {isMobile && (
              <img
                src="/images/hero-bg.png"
                className="absolute bottom-40 size-full object-cover"
              />
            )}
            <img
              src="/images/hero-img.png"
              className="absolute bottom-0 left-1/2 -translate-x-1/2 object-auto"
            />
          </>
        ) : (
          <video
            src="/videos/hero-bg.mp4"
            autoPlay
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          />
        )}

        <div className="hero-content opacity-0">
          <div className="overflow-hidden">
            <h1 className="hero-title">freaking delicious</h1>
          </div>
          <div
            style={{
              clipPath: "polygon(50% 0,50% 0,50% 100%,50% 100%)",
            }}
            className="hero-text-scroll"
          >
            <div className="hero-subtitle">
              <h1>Protein + Caffine</h1>
            </div>
          </div>
          <h2>
            Live life to the fullest with SPYLT: Shatter boredom and embrace
            your inner kid with every deliciously smooth chug.
          </h2>
          <div className="hero-button cursor-pointer hover:scale-105 duration-300">
            <p className="hover:tracking-widest duration-300">Know More</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
