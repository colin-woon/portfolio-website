type CardProps = {
  title: string;
  description: string;
  link: string;
};

function projectCard({ title, description, link }: CardProps) {
  const handleClick = () => {
    window.open(link);
  };

  return (
    <div className="card card-border bg-base-100">
        <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p className="text-justify">{description}</p>
        <div className="card-actions justify-end">
            <button className="btn btn-primary" onClick={handleClick}>View</button>
        </div>
        </div>
    </div>
  );
}

export default projectCard;