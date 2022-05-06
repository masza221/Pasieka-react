 const appearOptions = {
    threshold: 0,
    rootMargin: "0px 0px -170px 0px",
  };
  const appearOnScroll = new IntersectionObserver(function (
    entries,
    appearOnScroll
  ) {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      } else {
          if( entry.target.classList.contains("fadeup"))
          {
            entry.target.classList.add("show--fadeup");
          }
          if(entry.target.classList.contains("fadedown"))
          {
            entry.target.classList.add("show--fadedown");
          }
        appearOnScroll.unobserve(entry.target);
      }
    });
  },
  appearOptions);

  

  export  {appearOnScroll}