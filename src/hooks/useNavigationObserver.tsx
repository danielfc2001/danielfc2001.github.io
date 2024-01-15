import { useEffect, useState } from "react";

const useNavigationObserver = () => {
  const [objectObserved, setObjectObserved] = useState<string>("about");

  const fn = (entries: any, _observer: any) => {
    entries.forEach((entrie: any) => {
      if (entrie.isIntersecting) {
        setObjectObserved(entrie.target.id);
      }
    });
  };

  const observer = new IntersectionObserver(fn, {
    threshold: 0.5,
  });

  useEffect(() => {
    const observeAbout = document.getElementById("about");
    const observeLearned = document.getElementById("learned");
    const observeProjects = document.getElementById("projects");
    if (observeAbout && observeLearned && observeProjects) {
      observer.observe(observeAbout);
      observer.observe(observeLearned);
      observer.observe(observeProjects);
    }
  }, [onscrollend]);

  return {
    objectObserved,
  };
};

export default useNavigationObserver;
