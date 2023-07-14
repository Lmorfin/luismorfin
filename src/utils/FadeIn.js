import React from 'react'

export const FadeIn = (props) => {

      const [isVisible, setVisible] = React.useState(false);
      const domRef = React.useRef();
      React.useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisible(entry.isIntersecting);
            }
          });
        });
        observer.observe(domRef.current);
        return () => observer.unobserve(domRef.current);
      }, []);
  return (
    <div
      className={`fade-in ${isVisible ? "is-visible" : ""}`}
      style={{ transitionDelay: `${props.delay}` }}
      ref={domRef}
    >
      {props.children}
    </div>
  );
}

