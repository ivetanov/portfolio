type DesktopMockupProps = {
  src: string;
  alt: string;
  className?: string;
};

export const DesktopMockUp = ({
  src,
  alt,
  className = "",
}: DesktopMockupProps) => {
  return (
    <div
      className={`
          isolate origin-center transform-gpu
          transition-transform duration-300 ease-out
          hover:z-20 hover:scale-105 hover:rotate-0
        ${className}
      `}
    >
      <div className="relative overflow-hidden bg-neutral-950 p-2 pb-4 shadow-[0.75rem_0.875rem_0_rgba(0,0,0,0.32)]">
        <div className="overflow-hidden bg-neutral-100">
          <img src={src} alt={alt} className="block h-auto w-full" />
        </div>

        <span
          aria-hidden="true"
          className="absolute bottom-1.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-neutral-500"
        />
      </div>

      <div aria-hidden="true" className="mx-auto h-5 w-1/5 bg-neutral-950" />
      <div aria-hidden="true" className="mx-auto h-2 w-2/5 bg-neutral-950" />
    </div>
  );
};
