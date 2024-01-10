import { useEffect, useState } from "react";

const useNavigationObserver = () => {
  const [objectObserved, setObjectObserved] = useState<string>("about");

  const fn = (entries: any, _observer: any) => {
    console.log(entries);
    entries.forEach((entrie: any) => {
      if (entrie.isIntersecting) {
        setObjectObserved(entrie.target.id);
      }
    });
  };

  const observer = new IntersectionObserver(fn, {
    threshold: 0.8,
  });

  useEffect(() => {
    const observeAbout = document.getElementById("about");
    const observeLearned = document.getElementById("learned");
    const observeProjects = document.getElementById("projects");
    const observeCertificates = document.getElementById("certificates");
    if (
      observeAbout &&
      observeLearned &&
      observeProjects &&
      observeCertificates
    ) {
      observer.observe(observeAbout);
      observer.observe(observeLearned);
      observer.observe(observeProjects);
      observer.observe(observeCertificates);
    }
  }, [onscrollend]);

  return {
    objectObserved,
  };
};

export default useNavigationObserver;
