import './LiteratureCard.css';

interface LiteratureCardProps {
  title: string;
  bgPattern: string; // CSS class for background pattern
  textColor: string;
}

export default function LiteratureCard({ title, bgPattern, textColor }: LiteratureCardProps) {
  const isTitleSplit = title.includes('\n');
  const lines = isTitleSplit ? title.split('\n') : [title];
  const maxLength = Math.max(...lines.map(line => line.length));
  
  let fontSize = '2.2rem';
  if (maxLength > 12) {
    fontSize = '1.5rem';
  } else if (maxLength > 9) {
    fontSize = '1.8rem';
  } else if (maxLength > 7) {
    fontSize = '2.0rem';
  }
  
  return (
    <div className={`lit-card ${bgPattern}`}>
      <h3 className="lit-card-text staatliches-tags" style={{ color: textColor, fontSize: fontSize }}>
        {isTitleSplit ? (
          lines.map((line, i) => (
            <span key={i} style={{ display: 'block' }}>{line}</span>
          ))
        ) : (
          title
        )}
      </h3>
    </div>
  );
}
