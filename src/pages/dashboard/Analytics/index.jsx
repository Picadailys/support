import { Filter } from "@carbon/icons-react";
import Search from "../../../components/custom-icons/Search";

import Card from "../../../components/Card";
import StackedColumnChart from "../../../components/charts/StackedColumnChart";
import TopAgentTable from "./components/TopAgentTable";
import CustomerFeedbackCard from "./components/CustomerFeedbackCard";
import TicketStatusCard from "./components/TicketStatusCard";
import AllAgentsCard from "./components/AllAgentsCard";
import { useState } from "react";
import AddAgentModal from "./modals/AddAgentModal";

const analyticsColumnChartOptions = {
  chart: {
    type: "bar",
    height: 350,
    stacked: true,
    toolbar: {
      show: true,
    },
    zoom: {
      enabled: true,
    },
  },
  responsive: [
    {
      breakpoint: 480,
      options: {
        legend: {
          position: "bottom",
          offsetX: -10,
          offsetY: 0,
        },
      },
    },
  ],
  plotOptions: {
    bar: {
      horizontal: false,
      borderRadius: 10,
      borderRadiusApplication: "end", // 'around', 'end'
      borderRadiusWhenStacked: "last", // 'all', 'last'
      dataLabels: {
        total: {
          enabled: true,
          style: {
            fontSize: "13px",
            fontWeight: 900,
          },
        },
      },
    },
  },
  series: [
    {
      name: "App",
      data: [44, 55, 41, 67, 22, 43],
    },
    {
      name: "Email",
      data: [13, 23, 20, 8, 13, 27],
    },
    {
      name: "Call",
      data: [11, 17, 15, 15, 21, 14],
    },
    {
      name: "Website",
      data: [21, 7, 25, 13, 22, 8],
    },
  ],
  xaxis: {
    // type: "datetime",
    // categories: [
    //   "01/01/2011 GMT",
    //   "01/02/2011 GMT",
    //   "01/03/2011 GMT",
    //   "01/04/2011 GMT",
    //   "01/05/2011 GMT",
    //   "01/06/2011 GMT",
    // ],
    categories: ["January", "February", "March", "April", "May", "June"],
  },
  legend: {
    position: "top",
    // offsetY: 40,
  },
  fill: {
    opacity: 1,
  },
};

const AnalyticsPage = () => {
  const [showAddAgentModal, setShowAddAgentModal] = useState(false);

  const openAddAgentModal = () => setShowAddAgentModal(true);
  const closeAddAgentModal = () => setShowAddAgentModal(false);

  return (
    <>
      <div className="analytics xui-d-grid xui-grid-gap-1 xui-pt-1">
        <div className="xui-d-grid xui-grid-col-1 xui-md-grid-col-2 xui-grid-gap-1">
          <Card cardColor="#FFFFFF">
            <div className="analytics__ticket--stats-options">
              <select className="fs-18 fw-700">
                <option>All Tickets</option>
                <option>My Tickets</option>
              </select>
              <div className="xui-d-flex xui-flex-jc-center xui-flex-ai-center">
                <Filter />
                <select>
                  <option>Monthly</option>
                  <option>Yearly</option>
                </select>
              </div>
            </div>
            <div className="xui-d-flex xui-flex-jc-center xui-flex-ai-center xui-mt-4 fullwidth">
              <div>
                <div className="xui-mb-3 text-center">
                  <p className="fs-12">Total Tickets Created</p>
                  <p className="fs-20 fw-800">50,000</p>
                </div>
                <div className="text-center">
                  <p className="fs-12">Total Tickets Resolved</p>
                  <p className="fs-20 fw-800">50,000</p>
                </div>
              </div>
              <StackedColumnChart
                options={analyticsColumnChartOptions}
                style={{ width: "75%" }}
              />
            </div>
          </Card>

          <TopAgentTable />
        </div>

        <div className="xui-d-grid xui-grid-col-1 xui-md-grid-col-3 xui-grid-gap-1">
          <CustomerFeedbackCard />

          <TicketStatusCard />

          <div className="xui-d-grid xui-grid-row-3 xui-grid-gap-1">
            <Card cardColor="#FB5E5A">
              <div className="xui-d-flex xui-flex-dir-column xui-flex-jc-center xui-flex-ai-center">
                <h4 className="xui-text-white xui-mb-1">High Priority</h4>
                <h2 className="xui-text-white">500</h2>
              </div>
            </Card>

            <Card cardColor="#DFB25A">
              <div className="xui-d-flex xui-flex-dir-column xui-flex-jc-center xui-flex-ai-center">
                <h4 className="xui-text-white xui-mb-1">Low Priority</h4>
                <h2 className="xui-text-white">1,200</h2>
              </div>
            </Card>

            <Card cardColor="#5D7CAF">
              <div className="xui-d-flex xui-flex-dir-column xui-flex-jc-center xui-flex-ai-center">
                <h4 className="xui-text-white xui-mb-1">Unopened Tickets</h4>
                <h2 className="xui-text-white">109</h2>
              </div>
            </Card>
          </div>
        </div>

        <div
          className="xui-md-d-flex xui-grid-gap-1"
          style={{ flexWrap: "nowrap" }}
        >
          <div className="ticket-search xui-pos-relative xui-mb-1 xui-md-mb-none xui-w-fluid-100 xui-md-w-fluid-70">
            <input
              className="xui-w-fluid-100 xui-h-fluid-100"
              type="text"
              placeholder="Search ticket ID, agent name, priority etc."
            />
            <span className="xui-d-inline-block search-icon">
              <Search />
            </span>
          </div>

          <button
            onClick={openAddAgentModal}
            className="xui-btn primary-bg-100 xui-bdr-rad-1 xui-text-white xui-w-fluid-100 xui-md-w-fluid-30"
          >
            Add Agent
          </button>
        </div>

        <AllAgentsCard />
      </div>

      {showAddAgentModal && <AddAgentModal closeModal={closeAddAgentModal} />}
    </>
  );
};

export default AnalyticsPage;
