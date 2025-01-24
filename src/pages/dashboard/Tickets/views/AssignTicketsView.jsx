import { useState } from "react";
import { ChevronSort } from "@carbon/icons-react";

// import AssignTicketModal from "../modals/AssignTicketModal";

import Card from "../../../../components/Card";
import DataFetcher from "../../../../components/DataFetcher";
import Search from "../../../../components/custom-icons/Search";

import { formatDate } from "../../../../utils/helpers";

import profileImg from "/images/default-image.webp";
// import CreateTicketModal from "../modals/CreateTicketModal";

const ticketsInfo = {
  totalTickets: 50,
  unassignedTickets: 50,
  averageAssignTime: "10:50",

  tickets: [
    {
      ticketId: "TCK-101",
      email: "jackgrealish01@gmail.com",
      customerName: "Jack Grealish",
      customerImage: profileImg,
      channel: "Web",
      description: "I need a refund for airtime purchase",
      category: "Wallet",
      dateCreated: 1719273600000,
      action: "Assign",
    },
    {
      ticketId: "TCK-101",
      email: "jackgrealish01@gmail.com",
      customerName: "Jack Grealish",
      customerImage: profileImg,
      channel: "App",
      description: "I need a refund for airtime purchase",
      category: "Wallet",
      dateCreated: 1719273600000,
      action: "Assign",
    },
    {
      ticketId: "TCK-101",
      email: "jackgrealish01@gmail.com",
      customerName: "Jack Grealish",
      customerImage: profileImg,
      channel: "Web",
      description: "I need a refund for airtime purchase",
      category: "Wallet",
      dateCreated: 1719273600000,
      action: "Assign",
    },
    {
      ticketId: "TCK-101",
      email: "jackgrealish01@gmail.com",
      customerName: "Jack Grealish",
      customerImage: profileImg,
      channel: "Web",
      description: "I need a refund for airtime purchase",
      category: "Wallet",
      dateCreated: 1719273600000,
      action: "Assign",
    },
    {
      ticketId: "TCK-101",
      email: "jackgrealish01@gmail.com",
      customerName: "Jack Grealish",
      customerImage: profileImg,
      channel: "App",
      description: "I need a refund for airtime purchase",
      category: "Wallet",
      dateCreated: 1719273600000,
      action: "Assign",
    },
    {
      ticketId: "TCK-101",
      email: "jackgrealish01@gmail.com",
      customerName: "Jack Grealish",
      customerImage: profileImg,
      channel: "Web",
      description: "I need a refund for airtime purchase",
      category: "Wallet",
      dateCreated: 1719273600000,
      action: "Assign",
    },
    {
      ticketId: "TCK-101",
      email: "jackgrealish01@gmail.com",
      customerName: "Jack Grealish",
      customerImage: profileImg,
      channel: "Web",
      description: "I need a refund for airtime purchase",
      category: "Wallet",
      dateCreated: 1719273600000,
      action: "Assign",
    },
    {
      ticketId: "TCK-101",
      email: "jackgrealish01@gmail.com",
      customerName: "Jack Grealish",
      customerImage: profileImg,
      channel: "Web",
      description: "I need a refund for airtime purchase",
      category: "Wallet",
      dateCreated: 1719273600000,
      action: "Assign",
    },
  ],
};

const AssignTicketsView = () => {
  return (
    // <DataFetcher
    //   url={`/support/get-all`}
    //   buildUI={(data) => {
    //     console.log(data);
    //     const totalTicketsCount = data?.total_count;
    //     const totalTickets = data?.data;

    //     return (
    //       <AssignTicketsDisplay
    //         totalTicketsCount={totalTicketsCount}
    //         totalTickets={totalTickets}
    //       />
    //     );
    //   }}
    // />

    <AssignTicketsDisplay totalTicketsCount={2} totalTickets={2} />
  );
};

const AssignTicketsDisplay = ({ totalTicketsCount, totalTickets }) => {
  const [showCreateTicketModal, setShowCreateTicketModal] = useState(false);
  const [showAssignTicketModal, setShowAssignTicketModal] = useState(false);
  const [selectedTicketNumber, setSelectedTicketNumber] = useState(null);
  const [selectedTicket, setSelectedTicket] = useState(null);

  const handleSelectTicket = (ticketNumber, ticket) => {
    setSelectedTicketNumber(ticketNumber);
    setSelectedTicket(ticket);
    setShowAssignTicketModal(true);
  };

  return (
    <>
      <div className="support__assign-tickets">
        <div
          className="xui-d-flex xui-flex-ai-center xui-flex-jc-flex-start xui-mb-4"
          style={{ flexWrap: "nowrap", gap: "20px" }}
        >
          <Card cardColor="#FFFFFF">
            <div
              className="xui-d-flex xui-flex-jc-center xui-flex-ai-center xui-flex-dir-column"
              style={{ gap: "20px" }}
            >
              <p>Total Tickets</p>

              <p className="fs-18 fw-600 blue-color">
                {ticketsInfo.totalTickets}
              </p>
              {/* <p className="fs-18 fw-600 blue-500">{totalTicketsCount}</p> */}
            </div>
          </Card>
          <Card cardColor="#FFFFFF">
            <div
              className="xui-d-flex xui-flex-jc-center xui-flex-ai-center xui-flex-dir-column"
              style={{ gap: "20px" }}
            >
              <p>Unassigned Tickets</p>

              <p className="fs-18 fw-600 blue-color">
                {ticketsInfo.unassignedTickets}
              </p>
            </div>
          </Card>
          <Card cardColor="#FFFFFF">
            <div
              className="xui-d-flex xui-flex-ai-center xui-flex-dir-column"
              style={{ gap: "20px" }}
            >
              <p>Avg. Assign time</p>

              <p className="fs-18 fw-600 blue-color">
                {ticketsInfo.averageAssignTime}
              </p>
            </div>
          </Card>
          <button
            className="xui-btn primary-bg-100 xui-bdr-rad-half xui-text-white xui-w-fluid-100"
            onClick={() => setShowCreateTicketModal(true)}
          >
            Create New Ticket
          </button>
        </div>

        <div className="xui-d-flex xui-flex-jc-space-between xui-flex-ai-center gap-40 xui-mb-2 support__assign-tickets-search-filter">
          <div className="ticket-search xui-pos-relative xui-w-fluid-100">
            <input
              className="xui-w-fluid-100 xui-h-fluid-100"
              type="text"
              placeholder="Search ticket ID, customer name, priority etc."
            />
            <span className="xui-d-inline-block search-icon">
              <Search />
            </span>
          </div>
          <div className="xui-d-flex xui-flex-jc-space-between xui-flex-ai-center xui-gap-4 pointer">
            <ChevronSort />
            <div className="xui-d-flex xui-flex-jc-space-between xui-flex-ai-center xui-gap-8 fw-600 fs-14 fullwidth">
              <p className="text-nowrap">Sort By:</p>
              <select className="fw-600">
                <option value="" defaultChecked selected>
                  Time
                </option>
                <option value="savings">Oldest</option>
                <option value="current">Newest</option>
              </select>
            </div>
          </div>
        </div>

        <div className="support__assign-tickets-all-tickets">
          <table>
            <thead>
              <tr>
                <th>TICKET ID</th>
                <th>CUSTOMER EMAIL</th>
                <th>CHANNEL</th>
                <th>DESCRIPTION</th>
                <th>CATEGORY</th>
                <th>DATE CREATED</th>
                <th>ACTION</th>
              </tr>
            </thead>
            <tbody>
              {ticketsInfo.tickets.map((info, index) => (
                <tr key={index} className="pointer">
                  <td className="fs-14">{info.ticketId}</td>
                  <td className="fs-14">{info.customerName}</td>
                  <td className="fs-14">{info.channel}</td>
                  <td className="fs-14">{info.description}</td>
                  <td className="fs-14">{info.category}</td>
                  <td className="fs-14">
                    {formatDate(new Date(info.dateCreated))}
                  </td>
                  <td className={`fs-14`}>
                    <button
                      className={`xui-btn mini ${
                        info.action === "Assign"
                          ? "primary-bg-100"
                          : "error-bg-100"
                      }`}
                      onClick={() => handleSelectTicket(info.ticketId, info)}
                    >
                      {info.action}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* <CreateTicketModal
        isModalOpen={showCreateTicketModal}
        setIsModalOpen={setShowCreateTicketModal}
      />

      <AssignTicketModal
        isModalOpen={showAssignTicketModal}
        setIsModalOpen={setShowAssignTicketModal}
        selectedTicketNumber={selectedTicketNumber}
        selectedTicket={selectedTicket}
      /> */}
    </>
  );
};

export default AssignTicketsView;
