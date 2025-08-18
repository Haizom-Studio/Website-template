import ServiceData from "../../../data/service/ServiceMain.json";

interface Props {
  params: {
    slug: string;
  };
}

export default function ServiceDetailsPage({ params }: Props) {
  const { slug } = params;

  const service = ServiceData.find(
    (item) =>
      item &&
      item.title &&
      slug === item.title.toLowerCase().replace(/\s+/g, "-")
  );

  if (!service) {
    return <div>Service not found</div>;
  }

  return (
    <div>
      <h1>{service.title}</h1>
      <p>{service.description}</p>
      {/* render more fields here */}
    </div>
  );
}
