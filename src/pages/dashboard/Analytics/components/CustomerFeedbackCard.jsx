import Card from "../../../../components/Card";

import ThumbsUpIcon from "../../../../components/custom-icons/ThumbsUpIcon";
import ThumbsDownIcon from "../../../../components/custom-icons/ThumbsDownIcon";
import FluentIcon from "../../../../components/custom-icons/FluentIcon";

const CustomerFeedbackCard = () => {
  return (
    <Card cardColor="rgba(243, 248, 252, 0.40)">
      <div>
        <div className="xui-d-flex xui-flex-jc-space-between xui-flex-ai-center">
          <h3 className="xui-font-sz-100 xui-font-w-600">Customer Feedback</h3>
          <select
            className="primary-bg-10 xui-btn xui-bdr-rad-1"
            style={{ padding: 4 }}
          >
            <option>Daily</option>
            <option>Monthly</option>
            <option>Yearly</option>
          </select>
        </div>
        <div className="xui-d-grid xui-lg-grid-col-2 xui-grid-col-1">
          <div className="feedback xui-p-1-half">
            <p className="xui-font-sz-70 xui-opacity-8">Total Responses</p>
            <h3 className="xui-font-sz-90 xui-mt-half">200,0000 Customers</h3>
            <p className="xui-font-sz-70 xui-font-w-600 xui-mt-half response-time">
              Average Responds Time: 30Mins
            </p>
          </div>
          <div className="feedback xui-p-1-half">
            <div className="xui-d-flex xui-flex-jc-center xui-flex-ai-center">
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
            <div className="xui-d-flex xui-flex-jc-center xui-flex-ai-center">
              <span>
                <FluentIcon />
              </span>
              <div className="xui-pl-1">
                <p className="xui-font-sz-70 xui-opacity-8">Neutral</p>
                <h3 className="xui-font-sz-90 xui-mt-half">5%</h3>
              </div>
            </div>
            <div className="xui-mt-1 progress-bar">
              <div className="progress color2 xui-w-fluid-5 xui-h-fluid-100"></div>
            </div>
          </div>
          <div className="feedback xui-p-1-half">
            <div className="xui-d-flex xui-flex-jc-center xui-flex-ai-center">
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
      </div>
    </Card>
  );
};

export default CustomerFeedbackCard;
