import { Link } from "react-router-dom";
import Search2 from "../../components/custom-icons/Search2";
import Plus from "../../components/custom-icons/Plus";
import Dropdown from "../../components/Dropdown";
import TopChannelHeader from "../../components/TopChannelHeader";

const Channel = () => {
  return (
    <>
      <div>
        <TopChannelHeader />
        <section className="channel-chat-panel xui-d-flex">
          {/* <h3 className='xui-pos-absolute' style={{top: '70px', left: '50%', transform: 'translate(-50%)'}}>Today</h3> */}
          <div
            style={{ alignItems: "center" }}
            className={
              "channel-chat-box xui-d-flex xui-flex-ai-center xui-flex-dir-row blue-light"
            }
          >
            <div
              className={
                "channel-chat-profile xui-bg-lazy xui-bg-pos-center xui-bg-sz-cover"
              }
            >
              <img
                className="xui-w-fluid-100 xui-h-fluid-100 xui-bdr-rad-circle"
                src={
                  "https://img.freepik.com/free-photo/portrait-handsome-young-man-with-arms-crossed-holding-white-headphone-around-his-neck_23-2148096439.jpg?semt=ais_hybrid"
                }
                alt=""
              />
            </div>
            <div
              className={
                "channel-chat-msg-box xui-d-flex xui-pl-1 xui-flex-jc-flex-start xui-text-left"
              }
            >
              <p className="xui-d-flex xui-flex-ai-center">
                <span className="xui-font-sz-70 xui-font-w-700 xui-opacity-6">
                  Sim Batista escalated{" "}
                  <span className="blue-color xui-font-w-600">
                    TICKET ID: TCK0016
                  </span>{" "}
                  to the group
                </span>
                <span className="xui-p-half xui-font-sz-70 xui-bdr-rad-half error-bg-100 xui-text-white xui-ml-half">
                  High Priority
                </span>{" "}
                &nbsp; - &nbsp;
                <span className="xui-font-sz-80 xui-font-w-700 xui-opacity-6">
                  11:54AM
                </span>
              </p>
            </div>
          </div>
          <div
            className={
              "channel-chat-box xui-d-flex xui-flex-dir-row-reverse blue-light"
            }
          >
            <div
              className={
                "channel-chat-profile xui-bg-lazy xui-bg-pos-center xui-bg-sz-cover"
              }
            >
              <img
                className="xui-w-fluid-100 xui-h-fluid-100 xui-bdr-rad-circle"
                src={
                  "https://img.freepik.com/free-photo/portrait-handsome-young-man-with-arms-crossed-holding-white-headphone-around-his-neck_23-2148096439.jpg?semt=ais_hybrid"
                }
                alt=""
              />
            </div>
            <div
              className={
                "channel-chat-msg-box xui-d-flex xui-pr-1 xui-flex-jc-flex-end xui-text-right"
              }
            >
              <p className="xui-d-flex xui-flex-ai-center">
                <span className="xui-font-sz-80 xui-font-w-700 xui-opacity-6">
                  11:54AM
                </span>{" "}
                &nbsp; - &nbsp;
                <span className="xui-font-sz-80 xui-font-w-700 xui-opacity-6">
                  Francis Peters (YOU)
                </span>
              </p>
              <div
                className={
                  "xui-w-fluid-100 xui-mt-half xui-lg-w-fluid-80 xui-line-height-1-half xui-font-sz-80 xui-d-flex xui-flex-jc-flex-end"
                }
              >
                <span>
                  <span className="blue-color xui-font-w-600">@SimBatista</span>{" "}
                  Kindly help{" "}
                  <span className="blue-color xui-font-w-600">
                    @FrancisPeters
                  </span>{" "}
                  reassign this ticket. He seems to be having an issue with
                  collaboration
                </span>
              </div>
            </div>
          </div>
          <div
            style={{ alignItems: "center" }}
            className={
              "channel-chat-box xui-d-flex xui-flex-ai-center xui-flex-dir-row blue-light"
            }
          >
            <div
              className={
                "channel-chat-profile xui-bg-lazy xui-bg-pos-center xui-bg-sz-cover"
              }
            >
              <img
                className="xui-w-fluid-100 xui-h-fluid-100 xui-bdr-rad-circle"
                src={
                  "https://img.freepik.com/free-photo/portrait-handsome-young-man-with-arms-crossed-holding-white-headphone-around-his-neck_23-2148096439.jpg?semt=ais_hybrid"
                }
                alt=""
              />
            </div>
            <div
              className={
                "channel-chat-msg-box xui-d-flex xui-pl-1 xui-flex-jc-flex-start xui-text-left"
              }
            >
              <p className="xui-d-flex xui-flex-ai-center">
                <span className="xui-font-sz-70 xui-font-w-700 xui-opacity-6">
                  Francis Peters escalated{" "}
                  <span className="blue-color xui-font-w-600">
                    TICKET ID: TCK00198
                  </span>{" "}
                  with channel
                </span>
                <span className="xui-p-half xui-font-sz-70 xui-bdr-rad-half secondary-bg-60 xui-text-white xui-ml-half">
                  Low Priority
                </span>{" "}
                &nbsp; - &nbsp;
                <span className="xui-font-sz-80 xui-font-w-700 xui-opacity-6">
                  11:54AM
                </span>
              </p>
            </div>
          </div>
          <div
            className={
              "channel-chat-box xui-d-flex xui-flex-dir-row-reverse blue-light"
            }
          >
            <div
              className={
                "channel-chat-profile xui-bg-lazy xui-bg-pos-center xui-bg-sz-cover"
              }
            >
              <img
                className="xui-w-fluid-100 xui-h-fluid-100 xui-bdr-rad-circle"
                src={
                  "https://img.freepik.com/free-photo/portrait-handsome-young-man-with-arms-crossed-holding-white-headphone-around-his-neck_23-2148096439.jpg?semt=ais_hybrid"
                }
                alt=""
              />
            </div>
            <div
              className={
                "channel-chat-msg-box xui-d-flex xui-pr-1 xui-flex-jc-flex-end xui-text-right"
              }
            >
              <p className="xui-d-flex xui-flex-ai-center">
                <span className="xui-font-sz-80 xui-font-w-700 xui-opacity-6">
                  11:54AM
                </span>{" "}
                &nbsp; - &nbsp;
                <span className="xui-font-sz-80 xui-font-w-700 xui-opacity-6">
                  Francis Peters (YOU)
                </span>
              </p>
              <div
                className={
                  "xui-w-fluid-100 xui-mt-half xui-lg-w-fluid-80 xui-line-height-1-half xui-font-sz-80 xui-d-flex xui-flex-jc-flex-end"
                }
              >
                <span>
                  Kindly select a category so i can refer your complaint to the
                  appropriate customer care representative{" "}
                </span>
              </div>
            </div>
          </div>
          <div
            className={
              "channel-chat-box xui-d-flex xui-flex-dir-row blue-light"
            }
          >
            <div
              className={
                "channel-chat-profile xui-bg-lazy xui-bg-pos-center xui-bg-sz-cover"
              }
            >
              <img
                className="xui-w-fluid-100 xui-h-fluid-100 xui-bdr-rad-circle"
                src={
                  "https://img.freepik.com/free-photo/portrait-handsome-young-man-with-arms-crossed-holding-white-headphone-around-his-neck_23-2148096439.jpg?semt=ais_hybrid"
                }
                alt=""
              />
            </div>
            <div
              className={
                "channel-chat-msg-box xui-d-flex xui-pl-1 xui-flex-jc-flex-start xui-text-left"
              }
            >
              <p className="xui-d-flex xui-flex-ai-center">
                <span className="xui-font-sz-70 xui-font-w-700 xui-opacity-6">
                  Francis Peters removed{" "}
                  <span className="blue-color xui-font-w-700">
                    Toyo philips
                  </span>
                  from channel
                </span>
                &nbsp; - &nbsp;
                <span className="xui-font-sz-80 xui-font-w-700 xui-opacity-6">
                  11:54AM
                </span>
              </p>
            </div>
          </div>
          <div
            className={
              "channel-chat-box xui-d-flex xui-flex-dir-row blue-light"
            }
          >
            <div
              className={
                "channel-chat-profile xui-bg-lazy xui-bg-pos-center xui-bg-sz-cover"
              }
            >
              <img
                className="xui-w-fluid-100 xui-h-fluid-100 xui-bdr-rad-circle"
                src={
                  "https://img.freepik.com/free-photo/portrait-handsome-young-man-with-arms-crossed-holding-white-headphone-around-his-neck_23-2148096439.jpg?semt=ais_hybrid"
                }
                alt=""
              />
            </div>
            <div
              className={
                "channel-chat-msg-box xui-d-flex xui-pl-1 xui-flex-jc-flex-start xui-text-left"
              }
            >
              <p className="xui-d-flex xui-flex-ai-center">
                <span className="xui-font-sz-80 xui-font-w-700 xui-opacity-6">
                  Francis Peters
                </span>{" "}
                &nbsp; - &nbsp;
                <span className="xui-font-sz-80 xui-font-w-700 xui-opacity-6">
                  11:54AM
                </span>
              </p>
              <div
                className={
                  "xui-w-fluid-100 xui-mt-half xui-line-height-1-half xui-font-sz-80 xui-d-flex xui-flex-jc-flex-start"
                }
              >
                <span>
                  Kindly select a category so i can refer your complaint to the
                  appropriate customer care representative{" "}
                </span>
              </div>
            </div>
          </div>
        </section>
        <section className="channel-chat-action-box xui-d-flex xui-flex-ai-center">
          <div className="xui-w-fluid-100 xui-d-flex xui-flex-ai-center xui-mt-1 channel-msg-box-holder">
            <div className="channel-chat-msg-box-holder xui-pr-half">
              <div className="channel-chat-msg-box-actions xui-d-flex xui-flex-ai-center">
                <div className="channel-chat-msg-box-action xui-d-flex xui-flex-ai-center xui-flex-jc-center xui-cursor-not-allowed">
                  <Search2 />
                </div>
                <input type="text" placeholder="Type a message..." />
              </div>
            </div>
            <button className="channel-chat-msg-send-box xui-d-flex xui-flex-ai-center xui-flex-jc-center">
              <Plus />
            </button>
          </div>
        </section>
      </div>
    </>
  );
};

export default Channel;
