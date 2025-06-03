import { useEffect, useRef } from "react";

export const useSmoothScroll = (options = {}) => {
  const rafId = useRef(null);
  const targetScroll = useRef(0);
  const currentScroll = useRef(0);
  const isScrolling = useRef(false);

  useEffect(() => {
    const { friction = 0.94, threshold = 0.1 } = options;

    const isMobile =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );
    const isTouchDevice =
      "ontouchstart" in window || navigator.maxTouchPoints > 0;

    if (isMobile || isTouchDevice) {
      return;
    }

    const hardwareConcurrency = navigator.hardwareConcurrency || 4;
    const memory = navigator.deviceMemory || 4;
    const isLowPerformance = hardwareConcurrency < 4 || memory < 4;

    if (isLowPerformance) {
      return;
    }

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) {
      console.log("Reduced motion preferred - skipping smooth scroll");
      return;
    }
    document.documentElement.style.scrollBehavior = "auto";

    currentScroll.current = window.pageYOffset;
    targetScroll.current = window.pageYOffset;

    const stopAnimation = () => {
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }
      isScrolling.current = false;
      const currentPosition = window.pageYOffset;
      currentScroll.current = currentPosition;
      targetScroll.current = currentPosition;
    };

    const handleWheel = (e) => {
      e.preventDefault();

      let delta = e.deltaY;

      if (e.deltaMode === 1) {
        delta *= 16; // Line mode
      } else if (e.deltaMode === 2) {
        delta *= 100; // Page mode
      }

      delta = Math.max(-80, Math.min(80, delta));

      targetScroll.current += delta;

      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      targetScroll.current = Math.max(
        0,
        Math.min(maxScroll, targetScroll.current)
      );

      if (!isScrolling.current) {
        startAnimation();
      }
    };

    const startAnimation = () => {
      isScrolling.current = true;
      animate();
    };

    const animate = () => {
      const diff = targetScroll.current - currentScroll.current;

      if (Math.abs(diff) < threshold) {
        window.scrollTo(0, targetScroll.current);
        currentScroll.current = targetScroll.current;
        isScrolling.current = false;
        return;
      }

      currentScroll.current += diff * (1 - friction);
      window.scrollTo(0, currentScroll.current);

      rafId.current = requestAnimationFrame(animate);
    };

    const handleKeydown = (e) => {
      const keys = [
        "ArrowUp",
        "ArrowDown",
        "PageUp",
        "PageDown",
        "Home",
        "End",
        "Space",
      ];
      if (keys.includes(e.key)) {
        e.preventDefault();

        let delta = 0;
        switch (e.key) {
          case "ArrowUp":
            delta = -60;
            break;
          case "ArrowDown":
            delta = 60;
            break;
          case "PageUp":
            delta = -window.innerHeight * 0.8;
            break;
          case "PageDown":
          case "Space":
            delta = window.innerHeight * 0.8;
            break;
          case "Home":
            targetScroll.current = 0;
            startAnimation();
            return;
          case "End":
            targetScroll.current =
              document.documentElement.scrollHeight - window.innerHeight;
            startAnimation();
            return;
        }

        targetScroll.current += delta;
        const maxScroll =
          document.documentElement.scrollHeight - window.innerHeight;
        targetScroll.current = Math.max(
          0,
          Math.min(maxScroll, targetScroll.current)
        );

        if (!isScrolling.current) {
          startAnimation();
        }
      }
    };

    let touchStartY = 0;
    let touchCurrentY = 0;
    let isTouch = false;

    const handleTouchStart = (e) => {
      touchStartY = e.touches[0].clientY;
      isTouch = true;
    };

    const handleTouchMove = (e) => {
      if (!isTouch) return;

      e.preventDefault();
      touchCurrentY = e.touches[0].clientY;
      const delta = (touchStartY - touchCurrentY) * 1.5;

      targetScroll.current += delta;
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      targetScroll.current = Math.max(
        0,
        Math.min(maxScroll, targetScroll.current)
      );

      touchStartY = touchCurrentY;

      if (!isScrolling.current) {
        startAnimation();
      }
    };

    const handleTouchEnd = () => {
      isTouch = false;
    };
    const handleResize = () => {
      currentScroll.current = window.pageYOffset;
      targetScroll.current = window.pageYOffset;
    };
    const handleScroll = () => {
      if (!isScrolling.current) {
        const currentPosition = window.pageYOffset;
        currentScroll.current = currentPosition;
        targetScroll.current = currentPosition;
      }
    };

    const handleClick = (e) => {
      const clickedElement = e.target.closest('a[href^="#"], header, nav');
      if (clickedElement) {
        stopAnimation();
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("keydown", handleKeydown, { passive: false });
    window.addEventListener("touchstart", handleTouchStart, { passive: false });
    window.addEventListener("touchmove", handleTouchMove, { passive: false });
    window.addEventListener("touchend", handleTouchEnd);
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("click", handleClick, { passive: true });
    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("keydown", handleKeydown);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("click", handleClick);

      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }

      document.documentElement.style.scrollBehavior = "smooth";
      isScrolling.current = false;
    };
  }, []);
};
