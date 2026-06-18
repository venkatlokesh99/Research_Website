import './OurWorkCard.css';

interface OurWorkCardProps {
  title: string;
  bgPattern: string;
  textColor: string;
  link?: string;
}

export default function OurWorkCard({ title, bgPattern, textColor, link }: OurWorkCardProps) {
  const isTitleSplit = title.includes('\n');
  
  const cardContent = (
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

  if (link) {
    return (
      <a href={link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
        {cardContent}
      </a>
    );
  }

  return cardContent;
}
