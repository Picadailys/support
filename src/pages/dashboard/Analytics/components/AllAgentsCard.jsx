import React, { useState } from "react";

import Card from "../../../../components/Card";
import { ImageFallbackIcon } from "../../../../components/custom-icons/ImageFallback";

import ThumbsUpIcon from "../../../../components/custom-icons/ThumbsUpIcon";
import ThumbsDownIcon from "../../../../components/custom-icons/ThumbsDownIcon";
import FluentIcon from "../../../../components/custom-icons/FluentIcon";
import SingleAgentOffcanvas from "../modals/SingleAgentOffcanvas";

const allAgenstsInfo = [
  {
    name: "Ayodele Emmanuel Ukpong",
    image: null,
    positiveResponseRate: 70,
    neutralResponseRate: 3,
    negativeResponseRate: 27,
    totalTickets: 200,
    averageResponseTime: 30,
  },
  {
    name: "Ayodele Emmanuel Ukpong",
    image: null,
    positiveResponseRate: 70,
    neutralResponseRate: 3,
    negativeResponseRate: 27,
    totalTickets: 200,
    averageResponseTime: 30,
  },
  {
    name: "Ayodele Emmanuel Ukpong",
    image: null,
    positiveResponseRate: 70,
    neutralResponseRate: 3,
    negativeResponseRate: 27,
    totalTickets: 200,
    averageResponseTime: 30,
  },
  {
    name: "Ayodele Emmanuel Ukpong",
    image: null,
    positiveResponseRate: 70,
    neutralResponseRate: 3,
    negativeResponseRate: 27,
    totalTickets: 200,
    averageResponseTime: 30,
  },
  {
    name: "Ayodele Emmanuel Ukpong",
    image: null,
    positiveResponseRate: 70,
    neutralResponseRate: 3,
    negativeResponseRate: 27,
    totalTickets: 200,
    averageResponseTime: 30,
  },
];

const AllAgentsCard = () => {
  const [selectedAgent, setSelectedAgent] = useState(null);

  return (
    <>
      <Card cardColor="#FFFFFF">
        <div>
          <h2 className="xui-mb-2">All Agents</h2>

          {allAgenstsInfo.map((agent, index) => (
            <div className="xui-mb-2" key={index}>
              <Card cardColor="#FFFFFF">
                <div className="xui-d-flex xui-flex-jc-center xui-md-flex-jc-space-between xui-flex-ai-center xui-grid-gap-2">
                  <div className="xui-d-flex xui-flex-jc-center xui-flex-ai-center xui-grid-gap-1-half">
                    {agent.image ? (
                      <img src={agent.image} />
                    ) : (
                      <ImageFallbackIcon />
                    )}
                    <div>
                      <h4>{agent.name}</h4>
                      <div className="xui-d-flex xui-flex-jc-center xui-flex-ai-center xui-grid-gap-1-half xui-mt-1">
                        <div className="xui-d-flex xui-flex-jc-center xui-flex-ai-center">
                          <ThumbsUpIcon width={20} height={20} />
                          <p>{agent.positiveResponseRate}</p>
                        </div>
                        <div className="xui-d-flex xui-flex-jc-center xui-flex-ai-center">
                          <FluentIcon width={20} height={20} />
                          <p>{agent.neutralResponseRate}</p>
                        </div>
                        <div className="xui-d-flex xui-flex-jc-center xui-flex-ai-center">
                          <ThumbsDownIcon width={20} height={20} />
                          <p>{agent.negativeResponseRate}</p>
                        </div>
                        &#8226;
                        <p className="fs-14">
                          Total Tickets: {agent.totalTickets}
                        </p>
                        &#8226;
                        <p className="fs-14 blue-color">
                          Avg. Response Time: {agent.averageResponseTime}min
                        </p>
                      </div>
                    </div>
                  </div>
                  <p
                    className="fs-12 pointer blue-color"
                    onClick={() => setSelectedAgent(agent)}
                  >
                    See More
                  </p>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </Card>

      {selectedAgent && (
        <SingleAgentOffcanvas
          selectedAgent={selectedAgent}
          closeOffcanvas={() => setSelectedAgent(null)}
        />
      )}
    </>
  );
};

export default AllAgentsCard;
