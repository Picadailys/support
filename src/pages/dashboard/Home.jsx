import TicketStatusChart from "../../components/charts/TicketStatusChart";
import TicketChannelChart from "../../components/charts/TicketChannelChart";
import Search from "../../components/custom-icons/Search";
import TicketTable from "../../components/TicketTable";
import ThumbsUpIcon from "../../components/custom-icons/ThumbsUpIcon";
import FluentIcon from "../../components/custom-icons/FluentIcon";
import ThumbsDownIcon from "../../components/custom-icons/ThumbsDownIcon";

import { getSupportRole } from "../../config/axiosConfig";

const Home = () => {
  const supportRole = getSupportRole();

  return (
    <>
      <section className="xui-pt-1">
        <div className="xui-d-grid xui-lg-grid-col-2 xui-grid-col-1 xui-grid-gap-1">
          <div className="overview-left xui-p-1">
            <h3 className="xui-font-sz-100 xui-font-w-600">
              Customer Feedback
            </h3>
            <div className="xui-d-grid xui-lg-grid-col-2 xui-grid-col-1">
              <div className="feedback xui-p-1-half">
                <p className="xui-font-sz-70 xui-opacity-8">Total Responses</p>
                <h3 className="xui-font-sz-90 xui-mt-half">
                  200,0000 Customers
                </h3>
                <p className="xui-font-sz-70 xui-font-w-600 xui-mt-half response-time">
                  Average Responds Time: 30Mins
                </p>
              </div>
              <div className="feedback xui-p-1-half">
                <div className="xui-d-flex">
                  <span>
                    <ThumbsUpIcon />
                  </span>
                  <div className="xui-pl-1">
                    <p className="xui-font-sz-70 xui-opacity-8">Positive</p>
                    <h3 className="xui-font-sz-90 xui-mt-half">80%</h3>
                  </div>
                </div>
                <div className="xui-mt-1 progress-bar">
                  <div className="progress color1 xui-w-fluid-80 xui-h-fluid-100"></div>
                </div>
              </div>
              <div className="feedback xui-p-1-half">
                <div className="xui-d-flex">
                  <span>
                    <FluentIcon />
                  </span>
                  <div className="xui-pl-1">
                    <p className="xui-font-sz-70 xui-opacity-8">Neutral</p>
                    <h3 className="xui-font-sz-90 xui-mt-half">5%</h3>
                  </div>
                </div>
                <div className="xui-mt-1 progress-bar">
                  <div className="progress color2 xui-w-fluid-10 xui-h-fluid-100"></div>
                </div>
              </div>
              <div className="feedback xui-p-1-half">
                <div className="xui-d-flex">
                  <span>
                    <ThumbsDownIcon />
                  </span>
                  <div className="xui-pl-1">
                    <p className="xui-font-sz-70 xui-opacity-8">Negative</p>
                    <h3 className="xui-font-sz-90 xui-mt-half">15%</h3>
                  </div>
                </div>
                <div className="xui-mt-1 progress-bar">
                  <div className="progress color3 xui-w-fluid-15 xui-h-fluid-100"></div>
                </div>
              </div>
            </div>
            <div className="response xui-p-1">
              <div className="xui-d-flex">
                <img
                  className="xui-w-30 xui-h-30 xui-bdr-rad-circle"
                  src={`https://img.freepik.com/free-photo/portrait-handsome-young-man-with-arms-crossed-holding-white-headphone-around-his-neck_23-2148096439.jpg?semt=ais_hybrid`}
                  alt=""
                />
                <div
                  className="xui-pl-half"
                  style={{ width: "calc(100% - 50px)" }}
                >
                  <h3 className="xui-font-sz-75 xui-font-w-600">
                    Great Service. Responded quickly and helped rectify my
                    issues.
                  </h3>
                  <p className="xui-opacity-9 xui-mt-half xui-font-sz-65 xui-d-flex xui-flex-ai-center xui-grid-gap-half">
                    Princess Salem
                    <span
                      style={{
                        width: "3px",
                        height: "3px",
                        background: "#808080",
                      }}
                      className="xui-d-inline-block xui-bg-white xui-bdr-rad-circle"
                    ></span>
                    TCK01010
                    <span
                      style={{
                        width: "3px",
                        height: "3px",
                        background: "#808080",
                      }}
                      className="xui-d-inline-block xui-bg-white xui-bdr-rad-circle"
                    ></span>
                    <span className="xui-font-sz-80 response-time xui-font-w-600">
                      Ave response time : 30min
                    </span>
                    <span
                      style={{
                        width: "3px",
                        height: "3px",
                        background: "#808080",
                      }}
                      className="xui-d-inline-block xui-bg-white xui-bdr-rad-circle"
                    ></span>
                    9-08-2024
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="overview-right">
            <div className="xui-d-grid xui-grid-col-2 xui-grid-gap-1">
              <div className="xui-d-flex xui-flex-dir-column xui-flex-jc-space-between">
                <div className="ticket-status xui-p-1">
                  <h3 className="xui-font-sz-100 xui-font-w-600">
                    Ticket Status
                  </h3>
                  <div className="xui-d-grid xui-grid-col-2 xui-flex-ai-center xui-mt-2">
                    <div>
                      <TicketStatusChart />
                    </div>
                    <div className="xui-pl-1">
                      <div className="xui-d-flex xui-flex-ai-center xui-grid-gap-1 xui-mb-half status">
                        <span className="xui-w-10 xui-h-10 xui-bdr-rad-circle xui-bg-black xui-d-inline-block status-circle"></span>
                        <p
                          className="xui-font-sz-70 xui-font-w-500"
                          style={{ width: "calc(100% - 30px)" }}
                        >
                          In Progress
                        </p>
                      </div>
                      <div className="xui-d-flex xui-flex-ai-center xui-grid-gap-1 xui-mb-half status">
                        <span className="xui-w-10 xui-h-10 xui-bdr-rad-circle xui-bg-black xui-d-inline-block status-circle"></span>
                        <p
                          className="xui-font-sz-70 xui-font-w-500"
                          style={{ width: "calc(100% - 30px)" }}
                        >
                          Unopened
                        </p>
                      </div>
                      <div className="xui-d-flex xui-flex-ai-center xui-grid-gap-1 xui-mb-half status">
                        <span className="xui-w-10 xui-h-10 xui-bdr-rad-circle xui-bg-black xui-d-inline-block status-circle"></span>
                        <p
                          className="xui-font-sz-70 xui-font-w-500"
                          style={{ width: "calc(100% - 30px)" }}
                        >
                          Escalated
                        </p>
                      </div>
                      <div className="xui-d-flex xui-flex-ai-center xui-grid-gap-1 xui-mb-half status">
                        <span className="xui-w-10 xui-h-10 xui-bdr-rad-circle xui-bg-black xui-d-inline-block status-circle"></span>
                        <p
                          className="xui-font-sz-70 xui-font-w-500"
                          style={{ width: "calc(100% - 30px)" }}
                        >
                          Reassigned
                        </p>
                      </div>
                      <div className="xui-d-flex xui-flex-ai-center xui-grid-gap-1 xui-mb-half status">
                        <span className="xui-w-10 xui-h-10 xui-bdr-rad-circle xui-bg-black xui-d-inline-block status-circle"></span>
                        <p
                          className="xui-font-sz-70 xui-font-w-500"
                          style={{ width: "calc(100% - 30px)" }}
                        >
                          Overdue
                        </p>
                      </div>
                      <div className="xui-d-flex xui-flex-ai-center xui-grid-gap-1 xui-mb-half status">
                        <span className="xui-w-10 xui-h-10 xui-bdr-rad-circle xui-bg-black xui-d-inline-block status-circle"></span>
                        <p
                          className="xui-font-sz-70 xui-font-w-500"
                          style={{ width: "calc(100% - 30px)" }}
                        >
                          Closed
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ticket-level-holder xui-d-flex xui-grid-gap-half xui-mt-1">
                  <div className="ticket-level xui-text-white xui-text-center">
                    <h3 className="xui-font-sz-70 xui-font-w-500">
                      High Priority
                    </h3>
                    <h2 className="xui-font-sz-120 xui-mt-1">06</h2>
                  </div>
                  <div className="ticket-level xui-text-white xui-text-center">
                    <h3 className="xui-font-sz-70 xui-font-w-500">
                      Low Priority
                    </h3>
                    <h2 className="xui-font-sz-120 xui-mt-1">06</h2>
                  </div>
                  <div className="ticket-level xui-text-white xui-text-center">
                    <h3 className="xui-font-sz-70 xui-font-w-500">
                      Unopened Tickets
                    </h3>
                    <h2 className="xui-font-sz-120 xui-mt-1">06</h2>
                  </div>
                </div>
              </div>
              <div className="xui-d-flex xui-flex-dir-column xui-flex-jc-space-between">
                <div className="ticket-channel xui-p-1">
                  <h3 className="xui-font-sz-100 xui-font-w-600">
                    Ticket By Channels
                  </h3>
                  <div className="xui-pos-relative xui-mt-2">
                    <TicketChannelChart />
                    <div
                      className="xui-pos-absolute xui-text-center xui-w-fluid-100"
                      style={{
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%)",
                      }}
                    >
                      <h3 className="xui-font-sz-75 xui-font-w-500">
                        Total Active Tickets
                      </h3>
                      <h1 className="xui-font-sz-120 xui-font-w-600 xui-mt-half">
                        60
                      </h1>
                    </div>
                  </div>
                  <div className="xui-mt-2 xui-d-flex xui-flex-ai-center xui-grid-gap-half xui-flex-jc-center xui-text-center">
                    <div className="xui-d-flex xui-flex-ai-center xui-grid-gap-half channel">
                      <span className="xui-w-10 xui-h-10 xui-bdr-rad-circle xui-bg-black xui-d-inline-block channel-circle"></span>
                      <p
                        className="xui-font-sz-70 xui-font-w-500"
                        style={{ width: "calc(100% - 30px)" }}
                      >
                        App- 30
                      </p>
                    </div>
                    <div className="xui-d-flex xui-flex-ai-center xui-grid-gap-half channel">
                      <span className="xui-w-10 xui-h-10 xui-bdr-rad-circle xui-bg-black xui-d-inline-block channel-circle"></span>
                      <p
                        className="xui-font-sz-70 xui-font-w-500"
                        style={{ width: "calc(100% - 30px)" }}
                      >
                        Email -15
                      </p>
                    </div>
                    <div className="xui-d-flex xui-flex-ai-center xui-grid-gap-half channel">
                      <span className="xui-w-10 xui-h-10 xui-bdr-rad-circle xui-bg-black xui-d-inline-block channel-circle"></span>
                      <p
                        className="xui-font-sz-70 xui-font-w-500"
                        style={{ width: "calc(100% - 30px)" }}
                      >
                        Call -10
                      </p>
                    </div>
                    <div className="xui-d-flex xui-flex-ai-center xui-grid-gap-half channel">
                      <span className="xui-w-10 xui-h-10 xui-bdr-rad-circle xui-bg-black xui-d-inline-block channel-circle"></span>
                      <p
                        className="xui-font-sz-70 xui-font-w-500"
                        style={{ width: "calc(100% - 30px)" }}
                      >
                        Website- 5
                      </p>
                    </div>
                  </div>
                </div>
                {supportRole === "Manager" && (
                  <button className="primary-bg-100 xui-mt-1 xui-bdr-rad-1 xui-px-2 xui-py-2-half xui-text-white xui-text-center">
                    <h3 className="xui-font-sz-90 xui-font-w-500">
                      Create New Tickets
                    </h3>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="xui-py-2">
        <div className="ticket-search xui-pos-relative">
          <input
            className="xui-w-fluid-100 xui-h-fluid-100"
            type="text"
            placeholder="Search ticket ID, customer name, priority etc."
          />
          <span className="xui-d-inline-block search-icon">
            <Search />
          </span>
        </div>
        <div className="ticket-table xui-p-1 xui-mt-2">
          <TicketTable />
        </div>
      </section>
    </>
  );
};

export default Home;
