type SectionProps = {
  title: string;
  description: string;
};

export const Section = ({ title, description }: SectionProps) => {
  return (
    <section>
      <h3>{title}</h3>
      <p>{description}</p>
    </section>
  );
};
