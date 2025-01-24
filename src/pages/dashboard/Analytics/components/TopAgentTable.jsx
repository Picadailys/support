const topAgentAnalyticsInfo = [
  {
    name: "Chukunda Davies Belema",
    averageTicketsResolved: 60,
    avergeResponsetime: 5,
  },
  { name: "Amaka Onyeka", averageTicketsResolved: 45, avergeResponsetime: 10 },
  { name: "Tunde Babalola", averageTicketsResolved: 50, avergeResponsetime: 8 },
  { name: "Ngozi Okafor", averageTicketsResolved: 30, avergeResponsetime: 12 },
  { name: "Emeka Chinedu", averageTicketsResolved: 40, avergeResponsetime: 7 },
  { name: "Aisha Bello", averageTicketsResolved: 55, avergeResponsetime: 6 },
  { name: "Ibrahim Musa", averageTicketsResolved: 35, avergeResponsetime: 15 },
  {
    name: "Fatima Abubakar",
    averageTicketsResolved: 25,
    avergeResponsetime: 20,
  },
  { name: "David Ajayi", averageTicketsResolved: 40, avergeResponsetime: 11 },
  { name: "Kemi Adeyemi", averageTicketsResolved: 20, avergeResponsetime: 18 },
  { name: "Chika Nnamdi", averageTicketsResolved: 50, avergeResponsetime: 9 },
  { name: "Solomon Ekene", averageTicketsResolved: 60, avergeResponsetime: 10 },
  { name: "Grace Edet", averageTicketsResolved: 55, avergeResponsetime: 5 },
  { name: "Samuel Uche", averageTicketsResolved: 45, avergeResponsetime: 14 },
  { name: "Helen Okoro", averageTicketsResolved: 35, avergeResponsetime: 13 },
  {
    name: "Adaobi Nwachukwu",
    averageTicketsResolved: 50,
    avergeResponsetime: 7,
  },
  { name: "Victor Adewale", averageTicketsResolved: 40, avergeResponsetime: 9 },
  {
    name: "Elizabeth Odogwu",
    averageTicketsResolved: 30,
    avergeResponsetime: 15,
  },
  { name: "Mark Eze", averageTicketsResolved: 25, avergeResponsetime: 12 },
  { name: "Joyce Anya", averageTicketsResolved: 35, avergeResponsetime: 8 },
  { name: "Peter Okonkwo", averageTicketsResolved: 45, avergeResponsetime: 10 },
  { name: "Abdul Malik", averageTicketsResolved: 50, avergeResponsetime: 6 },
  { name: "Victoria Agwu", averageTicketsResolved: 55, avergeResponsetime: 7 },
  { name: "Lucy Ogbu", averageTicketsResolved: 40, avergeResponsetime: 8 },
  { name: "John Dada", averageTicketsResolved: 30, avergeResponsetime: 14 },
  { name: "Tosin Bankole", averageTicketsResolved: 20, avergeResponsetime: 18 },
  {
    name: "Eberechi Chukwu",
    averageTicketsResolved: 25,
    avergeResponsetime: 20,
  },
  { name: "Michael Udo", averageTicketsResolved: 35, avergeResponsetime: 16 },
  { name: "Angela Obinna", averageTicketsResolved: 40, avergeResponsetime: 11 },
  { name: "Chris Nduka", averageTicketsResolved: 45, avergeResponsetime: 9 },
];

const TopAgentTable = () => {
  // Sort by average tickets resolved and response time
  const sortedAgents = [...topAgentAnalyticsInfo].sort((a, b) => {
    if (b.averageTicketsResolved !== a.averageTicketsResolved) {
      return b.averageTicketsResolved - a.averageTicketsResolved;
    }
    return b.avergeResponsetime - a.avergeResponsetime;
  });

  return (
    <div className="analytics__top-agent-table">
      <div>
        <h3>Top Agents</h3>
      </div>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Avg. Tickets Resolved</th>
            <th>Avg. Response Time</th>
          </tr>
        </thead>
        <tbody>
          {sortedAgents.map((agent, index) => (
            <tr key={index}>
              <td className="text-center">{index + 1}</td>
              <td className="text-center">{agent.name}</td>
              <td className="text-center">{agent.averageTicketsResolved}</td>
              <td className="text-center">{agent.avergeResponsetime}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TopAgentTable;
