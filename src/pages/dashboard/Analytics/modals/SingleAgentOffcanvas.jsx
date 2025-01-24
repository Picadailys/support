import Offcanvas from "../../../../components/modals/Offcanvas";

const SingleAgentOffcanvas = ({ selectedAgent, closeOffcanvas }) => {
  return (
    <Offcanvas handleClose={closeOffcanvas}>
      <p>{selectedAgent?.name}</p>
    </Offcanvas>
  );
};

export default SingleAgentOffcanvas;
