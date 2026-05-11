import { useEffect, useState } from "react";
import "./Home.css";

const text = "HELLO WORLD!\nMINJEONG KIM PORTFOLIO ✌";

function HeroTyping() {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const speed = isDeleting ? 40 : 80;

    const timeout = setTimeout(() => {
      if (!isDeleting && index < text.length) {
        setDisplayedText((prev) => prev + text[index]);
        setIndex(index + 1);
      } 
      else if (isDeleting && index > 0) {
        setDisplayedText((prev) => prev.slice(0, -1));
        setIndex(index - 1);
      } 
      else if (index === text.length) {
        setTimeout(() => setIsDeleting(true), 1000);
      } 
      else if (index === 0 && isDeleting) {
        setIsDeleting(false);
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [index, isDeleting]);

  return (
    <section className="hero">
      <pre className="hero-text">
        {displayedText}
        <span className="cursor">_</span>
      </pre>
    </section>
  );
}

export default HeroTyping;
