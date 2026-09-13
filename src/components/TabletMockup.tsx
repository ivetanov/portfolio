type TabletMockupProps = {
  src: string;
  alt: string;
  className?: string;
};

export const TabletMockup = ({
  src,
  alt,
  className = "",
}: TabletMockupProps) => {
  return (
    <div
      className={`
          isolate origin-center transform-gpu
          transition-transform duration-300 ease-out
          hover:z-20 hover:scale-105 hover:rotate-0
        ${className}
      `}
    >
      <div className="relative aspect-7/10 overflow-hidden rounded-[1.1rem] bg-neutral-950 p-2 pt-6 shadow-[0.75rem_0.875rem_0_rgba(0,0,0,0.3)]">
        <div
          aria-hidden="true"
          className="absolute left-3 top-3 z-10 flex gap-1"
        >
          <span className="h-1 w-1 rounded-full bg-neutral-400" />
          <span className="h-1 w-1 rounded-full bg-neutral-400" />
          <span className="h-1 w-1 rounded-full bg-neutral-400" />
        </div>

        <div className="h-full overflow-hidden rounded-[0.65rem] bg-neutral-100">
          <img
            src={src}
            alt={alt}
            className="block h-full w-full object-cover object-top"
          />
        </div>
      </div>
    </div>
  );
};
