import { useState } from "react";

import AssignTicketsView from "./views/AssignTicketsView";
import MyTicketsView from "./views/MyTicketsView";

import { getSupportRole } from "../../../config/axiosConfig";

const views = ["Assign Tickets", "My Tickets"];

const TicketsPage = () => {
  const supportRole = getSupportRole();

  const [selectedView, setSelectedView] = useState(
    supportRole === "Manager" ? "Assign Tickets" : "My Tickets"
  );

  return (
    <>
      <div className="support">
        <div className="xui-d-flex xui-flex-ai-center xui-flex-jc-flex-start support__tabs">
          {views.map((view) => (
            <div
              onClick={() => setSelectedView(view)}
              className={`support__tabs-tab pointer ${
                view === selectedView ? "active" : ""
              }`}
            >
              {view}
            </div>
          ))}
        </div>

        <div>
          {selectedView === "Assign Tickets" && supportRole === "Manager" && (
            <AssignTicketsView />
          )}
          {selectedView === "My Tickets" && <MyTicketsView />}
        </div>
      </div>
    </>
  );
};

export default TicketsPage;
