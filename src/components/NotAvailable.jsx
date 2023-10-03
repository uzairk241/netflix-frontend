import React from "react";

export default function NotAvailable({title}) {
  return (
    <h1 className="not-available">
      {title ? title :"No Movies avaialble for the selected genre. Please select a different genre."}
    </h1>
  );
}
