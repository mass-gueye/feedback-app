import React from "react";
import { Link } from "react-router-dom";
import Card from "../components/shared/Card";

export default function AboutPage() {
  return (
    <Card>
      <div className="about">
        <h1>About page</h1>
        <p>This is a React app to leave feedback for a product or a service.</p>
        <p>Version: 1.0.0</p>
        <Link to={{ pathname: "/" }}>Go back home</Link>
      </div>
    </Card>
  );
}
