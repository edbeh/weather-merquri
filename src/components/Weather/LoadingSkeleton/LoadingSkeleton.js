import React from "react";
import Skeleton from "react-loading-skeleton";

import Icon from "../Icon/Icon";

import "./loadingSkeleton.css";

const LoadingSkeleton = () => {
  return (
    <div className="loading-skeleton">
      <Skeleton width={150} height={25} />
      <Icon icon={null} />
      <Skeleton width={150} height={35} />
      <Skeleton width={300} height={25} />
      <Skeleton width={300} height={25} />
      <Skeleton width={300} height={25} />
      <Skeleton width={300} height={25} />
    </div>
  );
};

export default LoadingSkeleton;
