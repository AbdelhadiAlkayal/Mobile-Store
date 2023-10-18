import React from "react";
import { useRouteLoaderData, json } from "react-router-dom";
import PhoneItem from "../components/PhoneItem";
function PhonesDetailPage() {
  const dataPhone = useRouteLoaderData("phoneDetails");
  return <PhoneItem event={dataPhone.event} />;
}

export default PhonesDetailPage;
export async function loaderPhonesDetail({ request, params }) {
  const id = params.phoneId;
  const response = await fetch("http://localhost:8080/events/" + id);

  if (!response.ok) {
    throw json(
      { message: "Could not fetch details for selected phone or labtop." },
      {
        status: 500,
      }
    );
  } else {
    return response;
  }
}
