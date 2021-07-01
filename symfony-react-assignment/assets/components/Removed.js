import React from "react";

const Removed = (props) => {
  return (
    <div className="RemovedProducts">
      <h3>Removed products</h3>
      <div className="ProductRemovedTitle">
        <label className="RemovedNameTitle">Product</label>
        <label className="RemovedCountTitle">Count</label>
      </div>
      {props.productCount &&
        props.productCount.length > 0 &&
        props.productCount.map((item) => (
          <div className="ProductRemoved" key={`product${item.name}2`}>
            <label className="RemovedName" key={`name${item.name}2`}>
              {item.name}
            </label>
            <label className="RemovedCount" key={`count${item.count}2`}>
              {item.count}
            </label>
          </div>
        ))}
    </div>
  );
};

export default Removed;
