import { useState, useEffect } from "react";

const useScrollFade = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    const observeElements = () => {
      document.querySelectorAll(".scroll-fade:not(.observed)").forEach((el) => {
        observer.observe(el);
        el.classList.add("observed");
      });
    };

    // Initial observation
    observeElements();

    // Observe future dynamically added elements (Lazy Load)
    const mutationObserver = new MutationObserver((mutations) => {
      let shouldRecheck = false;
      for (const mutation of mutations) {
        if (mutation.addedNodes.length > 0) {
          shouldRecheck = true;
          break;
        }
      }
      if (shouldRecheck) {
        observeElements();
      }
    });

    if (document.body) {
      mutationObserver.observe(document.body, { childList: true, subtree: true });
    }

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);
};

export default useScrollFade;