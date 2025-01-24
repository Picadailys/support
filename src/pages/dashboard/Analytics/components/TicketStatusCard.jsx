import Card from "../../../../components/Card";
import PieChart from "../../../../components/charts/PieChart";
import TicketStatusChart from "../../../../components/charts/TicketStatusChart";

const ticketStatusOptions = {
  series: [5, 15, 15, 15, 10, 40],
  chart: {
    width: 380,
    type: "pie",
  },
  labels: [
    "In Progress",
    "Unopened",
    "Escalated",
    "Reassigned",
    "Overdue",
    "Closed",
  ],
  responsive: [
    {
      breakpoint: 480,
      options: {
        chart: {
          width: 200,
        },
        legend: {
          position: "top",
        },
      },
    },
  ],
};

const TicketStatusCard = () => {
  return (
    <Card cardColor="#FFFFFF">
      <h3 className="xui-font-sz-100 xui-font-w-600">Ticket Status</h3>
      <div className="xui-flex-ai-center xui-mt-2">
        <PieChart options={ticketStatusOptions} />
      </div>
    </Card>
  );
};

export default TicketStatusCard;
