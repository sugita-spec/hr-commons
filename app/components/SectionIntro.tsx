export function SectionIntro({
  number,
  label,
  title,
  copy,
}: {
  number: string;
  label: string;
  title: React.ReactNode;
  copy?: React.ReactNode;
}) {
  return (
    <div className="section-intro">
      <div className="section-kicker"><span>{number}</span>{label}</div>
      <div>
        <h2>{title}</h2>
        {copy && <p>{copy}</p>}
      </div>
    </div>
  );
}
