 const appearOptions = {
    threshold: 0,
    rootMargin: "0px 0px -300px 0px",
  };
  const appearOnScroll = new IntersectionObserver(function (
    entries,
    appearOnScroll
  ) {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      } else {

        const classList = entry.target.classList;

          if( classList.contains("fadeup"))
          {
            classList.add("show--fadeup");
          }
         else if(classList.contains("fadedown"))
          {
            classList.add("show--fadedown");
          }
         else if( classList.contains("fadein"))
          {
            classList.add("show--fadein");
          }
        else{
          return
        }
        appearOnScroll.unobserve(entry.target);
      }
    });
  },
  appearOptions);

  

  export  {appearOnScroll}