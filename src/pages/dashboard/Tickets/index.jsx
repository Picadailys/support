import { useState } from "react";

import AssignTicketsView from "./views/AssignTicketsView";
import MyTicketsView from "./views/MyTicketsView";

const views = ["Assign Tickets", "My Tickets"];

const TicketsPage = () => {
  const role = localStorage.getItem("testRole");

  const [selectedView, setSelectedView] = useState(
    role === "Manager" ? "Assign Tickets" : "My Tickets"
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
          {selectedView === "Assign Tickets" && role === "Manager" && (
            <AssignTicketsView />
          )}
          {selectedView === "My Tickets" && <MyTicketsView />}
        </div>
      </div>
    </>
  );
};

export default TicketsPage;
