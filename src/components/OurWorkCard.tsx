import './OurWorkCard.css';

interface OurWorkCardProps {
  title: string;
  bgPattern: string;
  textColor: string;
}

export default function OurWorkCard({ title, bgPattern, textColor }: OurWorkCardProps) {
  const isTitleSplit = title.includes('\n');
  
  return (
    <div className={`work-card ${bgPattern}`}>
      <h3 className="work-card-text staatliches-tags" style={{ color: textColor }}>
        {isTitleSplit ? (
          title.split('\n').map((line, i) => (
            <span key={i} style={{ display: 'block' }}>{line}</span>
          ))
        ) : (
          title
        )}
      </h3>
    </div>
  );
}
