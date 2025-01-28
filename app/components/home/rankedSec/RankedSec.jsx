import styles from './RankedSec.module.css';

export const RankedSec = () => {
  const cards = [
    {
      rank: "2",
      supp:"nd",
      text: "Top Prominent College in India. List by CSR-GHRDC Engg. College Survey",
      source: "The Week",
    },
    {
      rank: "3",
      supp:"rd",
      text: "Amongst Top Universities of India.",
      source: "Outlook",
    },
    {
      rank: "6",
      supp:"th",
      text: "Among North India's Emerging Multi-Disciplinary Universities.",
      source: "The Week",
    },
    {
      rank: "8",
      supp:"th",
      text: "Among All India's Emerging Multi-Disciplinary Universities.",
      source: "The Week",
    },
    {
      rank: "16",
      supp:"th",
      text: "India's Best B-School",
      source: "Outlook",
    },
  ];

  return (
    <div className="d-flex flex-wrap justify-content-center">
      {cards.map((card, index) => (
        <div
          key={index}
          className={`${styles.cardContent} text-center rounded`}
          style={{ width: '250px' }}
        >
          <h1 className={`${styles.heading} display-4`}>
            {card.rank}<sup>{card.supp}</sup>
          </h1>
          <p className="mt-1" style={{ color: '#091e5f', fontWeight: 'bold', fontSize: '1rem' }}>Ranked</p>
          <h5 className={`${styles.source} mt-3 fw-bold`} style={{ backgroundColor: '#091e5f', color: '#ffffff', padding: '5px', borderRadius: '5px' }}>
            {card.source}
          </h5>
          <p className={`${styles.text} mt-2`} style={{ wordWrap: 'break-word' }}>
            {card.text}
          </p>
        </div>
      ))}
    </div>
  );
};
