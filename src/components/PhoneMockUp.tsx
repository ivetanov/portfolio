type PhoneMockupProps = {
  src: string;
  alt: string;
  className?: string;
};

export const PhoneMockup = ({ src, alt, className = "" }: PhoneMockupProps) => {
  return (
    <div
      className={`
          overflow-hidden
          rounded-[2.5rem]
          border-8
          border-neutral-950
          bg-neutral-950
          shadow-2xl

          origin-center
          transform-gpu
        
          transition-transform
          duration-300
          ease-out

          hover:z-20
          hover:scale-110
          hover:rotate-0
        ${className}
      `}
    >
      <img src={src} alt={alt} className="block h-auto w-full" />
    </div>
  );
};
