import { useLanguage } from "../i18n/useLanguage";

const MarqueeContent = ({ items }: { items: string[] }) => (
  <div className="flex shrink-0 items-center gap-6 pr-6">
    {items.map((item) => (
      <span key={item} className="flex items-center gap-6">
        {item}
        <span aria-hidden="true">✳</span>
      </span>
    ))}
  </div>
);

export const MarqueeBanner = () => {
  const { texts } = useLanguage();
  const items = texts.marqueeBanner.items;

  return (
    <div
      aria-hidden="true"
      className="overflow-hidden bg-primary py-3 text-background"
    >
      <div className="marquee-track flex w-max font-mono text-sm uppercase tracking-widest">
        <MarqueeContent items={items}/>
        <MarqueeContent items={items}/>
      </div>
    </div>
  );
};
