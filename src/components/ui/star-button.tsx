import { Star } from "lucide-react";
import { Link } from "react-router-dom";

interface StarButtonProps {
  to?: string;
  href?: string;
  children: React.ReactNode;
  className?: string;
}

const starPositions = [
  { top: "-6px", left: "10%", rotate: "15deg", tx: "-20px", ty: "-18px" },
  { top: "-4px", right: "10%", rotate: "-20deg", tx: "20px", ty: "-18px" },
  { bottom: "-6px", left: "15%", rotate: "30deg", tx: "-18px", ty: "18px" },
  { bottom: "-4px", right: "15%", rotate: "-10deg", tx: "18px", ty: "18px" },
  { top: "50%", left: "-8px", rotate: "45deg", tx: "-16px", ty: "0px" },
  { top: "50%", right: "-8px", rotate: "-45deg", tx: "16px", ty: "0px" },
];

const StarButton = ({ to, href, children, className = "" }: StarButtonProps) => {
  const baseClasses = `group relative inline-flex items-center justify-center gap-2 bg-accent text-white border-2 border-accent px-10 py-4 rounded-full font-bold uppercase text-xs tracking-widest transition-all duration-300 hover:bg-transparent hover:text-accent hover:shadow-[0_0_30px_rgba(232,119,34,0.3)] ${className}`;

  const starsMarkup = starPositions.map((pos, i) => (
    <Star
      key={i}
      size={10}
      className="absolute opacity-0 group-hover:opacity-100 transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] text-accent fill-accent"
      style={{
        top: pos.top,
        bottom: pos.bottom,
        left: pos.left,
        right: pos.right,
        transform: `rotate(${pos.rotate}) translate(0, 0)`,
        transitionDelay: `${i * 40}ms`,
      }}
      data-tx={pos.tx}
      data-ty={pos.ty}
    />
  ));

  // Use CSS for the scatter effect via group-hover
  const starsWithHover = starPositions.map((pos, i) => (
    <span
      key={i}
      className="absolute opacity-0 group-hover:opacity-100 transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] pointer-events-none"
      style={{
        top: pos.top,
        bottom: pos.bottom,
        left: pos.left,
        right: pos.right,
        transitionDelay: `${i * 40}ms`,
        // @ts-ignore
        "--tw-translate-x": "0px",
        "--tw-translate-y": "0px",
      }}
    >
      <Star
        size={10}
        className="text-accent fill-accent group-hover:scale-150 transition-transform duration-500"
        style={{
          transform: `rotate(${pos.rotate})`,
        }}
      />
    </span>
  ));

  const content = (
    <>
      {starsWithHover}
      {children}
    </>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={baseClasses}>
        {content}
      </a>
    );
  }

  return (
    <Link to={to || "#"} className={baseClasses}>
      {content}
    </Link>
  );
};

export default StarButton;
