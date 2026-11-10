import React from "react";

export default function StatsCard({ title, value, icon, colorClass }) {
  return (
    <div className="col-md-4 mb-3">
      <div className={`card border-start border-4 ${colorClass} shadow-sm p-3`}>
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <h6 className="text-muted mb-1">{title}</h6>
            <h3 className="fw-bold mb-0">{value}</h3>
          </div>
          <div className={`fs-2 ${colorClass.replace("border-", "text-")}`}>
            <i className={icon}></i>
          </div>
        </div>
      </div>
    </div>
  );
}
