import { useLoaderData, json } from "react-router-dom";
import PhonesList from "../components/PhonesList";
function PhonesPage() {
  const phones = useLoaderData();

  return <PhonesList events={phones} />;
}

export default PhonesPage;
export async function phonesLoader() {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    return json(
      { message: "Could not fetch any phone or laptop" },
      {
        status: 500,
      }
    );
  } else {
    const resData = await response.json();
    return resData.events;
  }
}
