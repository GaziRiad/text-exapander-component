import { useState } from "react";
import "./style.css";

export default function App() {
  return (
    <div>
      <TextExpander>
        Space travel is the ultimate adventure! Imagine soaring past the stars
        and exploring new worlds. It's the stuff of dreams and science fiction,
        but believe it or not, space travel is a real thing. Humans and robots
        are constantly venturing out into the cosmos to uncover its secrets and
        push the boundaries of what's possible.
      </TextExpander>

      <TextExpander
        collapsedNumWords={20}
        expandButtonText="Show text"
        collapseButtonText="Collapse text"
        buttonColor="#ff6622"
      >
        Space travel requires some seriously amazing technology and
        collaboration between countries, private companies, and international
        space organizations. And while it's not always easy (or cheap), the
        results are out of this world. Think about the first time humans stepped
        foot on the moon or when rovers were sent to roam around on Mars.
      </TextExpander>

      <TextExpander expanded={true} className="box">
        Space missions have given us incredible insights into our universe and
        have inspired future generations to keep reaching for the stars. Space
        travel is a pretty cool thing to think about. Who knows what we'll
        discover next!
      </TextExpander>
    </div>
  );
}

function TextExpander({
  children,
  className = "",
  collapsedNumWords = 10,
  expandButtonText = "Show more",
  collapseButtonText = "Show less",
  expanded = false,
  buttonColor = "#323232",
}) {
  const [isOpen, setIsOpen] = useState(expanded);

  const displayText = isOpen
    ? children
    : children
        .split("")
        .filter((letter, i) => i + 1 <= collapsedNumWords)
        .join("") + "...";

  const btnStyling = {
    color: buttonColor,
  };

  return (
    <div className={className}>
      <span>{displayText}</span>
      <button style={btnStyling} onClick={() => setIsOpen((isOpen) => !isOpen)}>
        {isOpen ? collapseButtonText : expandButtonText}
      </button>
    </div>
  );
}
