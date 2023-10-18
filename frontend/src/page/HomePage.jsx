import React from "react";
import HomeCenter from "../components/HomeCenter";
import OurDevices from "../components/OurDevices";
function HomePage() {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <section>
        <HomeCenter />
      </section>
      <section style={{ backgroundColor: " #a7a7a7" }}>
        <OurDevices />
      </section>
    </div>
  );
}

export default HomePage;
