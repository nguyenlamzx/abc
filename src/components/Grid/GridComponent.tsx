import React from "react";

export interface IGridProps {
  id?: number,
  header: string,
  title?: string,
  image?: any,
  description: string,
  shortDescription?: string,
}

export default function GridComponent(props: IGridProps) {
  const { image, header, description } = props;
  return (
    <div className="col-md-4 col-sm-12 p-5">
      <img src={image} alt="Default Grey Box" className="mb-3" />
      <h3>{header}</h3>
      <p>{description}</p>
    </div>
  );
}
