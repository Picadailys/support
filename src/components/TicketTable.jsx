import React from 'react';
import { useState } from "react";
import { CaretDown, CaretUp } from '@carbon/icons-react';
import DropdownIcon from '../components/custom-icons/DropdownIcon';
import Dropdown from './Dropdown';

const TicketTable = () => {
    // Sample data
  const initialData = [
    { ticketID: 'TCK0101', agentName: "Emmanuel Ayodele U.", customerName: "Fidelia Maxwel Odum", category: "Wallet", priority: <><span className='xui-p-half xui-font-sz-80 xui-bdr-rad-half error-bg-100 xui-text-white'>High Priority</span></>, dateCreated: "2024-01-01", 
    status: 
    <>
    <div className='xui-d-flex xui-flex-jc-space-between xui-flex-ai-center'>
        <div className='xui-bdr-rad-half primary-bg xui-p-half'>In progress</div>
        {/* <span className='xui-d-inline-block'><DropdownIcon /></span> */}
        <Dropdown width="19" height="19">
            <p className='xui-font-sz-110'>Edit Ticket</p>
            <p className='xui-font-sz-110 xui-mt-1-half'>High Priority</p>
            <p className='xui-font-sz-110 xui-mt-1-half'>Low Priority</p>
            <p className='xui-font-sz-110 xui-mt-1-half'>Resolve</p>
        </Dropdown>
    </div>
    </> },
    { ticketID: 'TCK0102', agentName: "Emmanuel Ayodele U.", customerName: "Fidelia Maxwel Odum", category: "Wallet", priority: <><span className='xui-p-half xui-font-sz-80 xui-bdr-rad-half secondary-bg-60 xui-text-white'>Low Priority</span></>, dateCreated: "2024-02-15", status: 
    <>
    <div className='xui-d-flex xui-flex-jc-space-between xui-flex-ai-center'>
        <div className='xui-bdr-rad-half primary-bg xui-p-half'>In progress</div>
        <Dropdown width="19" height="19">
            <p className='xui-font-sz-110'>Edit Ticket</p>
            <p className='xui-font-sz-110 xui-mt-1-half'>High Priority</p>
            <p className='xui-font-sz-110 xui-mt-1-half'>Low Priority</p>
            <p className='xui-font-sz-110 xui-mt-1-half'>Resolve</p>
        </Dropdown>
    </div>
    </> },
    { ticketID: 'TCK0103', agentName: "Emmanuel Ayodele U.", customerName: "Fidelia Maxwel Odum", category: "Wallet", priority: <><span className='xui-p-half xui-font-sz-80 xui-bdr-rad-half secondary-bg-60 xui-text-white'>High Priority</span></>, dateCreated: "2024-03-10", status: 
    <>
    <div className='xui-d-flex xui-flex-jc-space-between xui-flex-ai-center'>
        <div className='xui-bdr-rad-half primary-bg xui-p-half'>In progress</div>
        <Dropdown width="19" height="19">
            <p className='xui-font-sz-110'>Edit Ticket</p>
            <p className='xui-font-sz-110 xui-mt-1-half'>High Priority</p>
            <p className='xui-font-sz-110 xui-mt-1-half'>Low Priority</p>
            <p className='xui-font-sz-110 xui-mt-1-half'>Resolve</p>
        </Dropdown>
    </div>
    </> },
  ];

  const [data, setData] = useState(initialData);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });

  // Table headers configuration
  const headers = [
    { label: "Ticket ID", key: "ticketID", sortable: false },
    { label: "Agent Name", key: "agentName", sortable: true },
    { label: "Customer Name", key: "customerName", sortable: false },
    { label: "Category", key: "category", sortable: true },
    { label: "Priority", key: "priority", sortable: true },
    { label: "Date Created", key: "dateCreated", sortable: false },
    { label: "Status", key: "status", sortable: true },
  ];

  // Sorting logic
  const sortData = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }

    const sortedData = [...data].sort((a, b) => {
      if (a[key] < b[key]) {
        return direction === "asc" ? -1 : 1;
      }
      if (a[key] > b[key]) {
        return direction === "asc" ? 1 : -1;
      }
      return 0;
    });

    setSortConfig({ key, direction });
    setData(sortedData);
  };

  // Get sort indicator (ascending or descending)
  const getSortIndicator = (key) => {
    if (sortConfig.key === key) {
      return sortConfig.direction === "asc" ? <CaretUp size='20' /> : <CaretDown size='20' />;
    }
    return <CaretUp size='20' />; // Default neutral arrow when the column is sortable
  };
    return (
        <table style={{ width: "100%", textAlign: "left", borderCollapse: "collapse" }}>
        <thead>
            <tr>
            {headers.map((header) => (
                <th
                key={header.key}
                onClick={header.sortable ? () => sortData(header.key) : null}
                style={{
                    cursor: header.sortable ? "pointer" : "default",
                    backgroundColor: "transparent",
                    textAlign: "left",
                }}
                >
                {header.label}{" "}
                {header.sortable && (
                    <span style={{ fontSize: "0.8rem" }}>{getSortIndicator(header.key)}</span>
                )}
                </th>
            ))}
            </tr>
        </thead>
        <tbody>
            {data.map((row, index) => (
            <tr key={index}>
                {headers.map((header) => (
                <td key={header.key}>
                    {row[header.key]}
                </td>
                ))}
            </tr>
            ))}
        </tbody>
    </table>
    );
};

export default TicketTable;