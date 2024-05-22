import React from "react";
import { useParams } from "react-router-dom";
import { useCartoonDetail2D } from "./cartoons.loader";
import { Cartoons2dDescription } from "./components/cartoons-description";

export const Cartoons2DDetailPage: React.FC = () => {
  let { cartoonId } = useParams();
  const { data, isLoading } = useCartoonDetail2D(cartoonId!);

  return (
    <div>
      <Cartoons2dDescription cartoon={data?.cartoon} isLoading={isLoading} />
    </div>
  );
};
