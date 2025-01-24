import { useState } from "react";
import Modal from "../../../../components/modals/Modal";

const defaultFormData = {
  name: "",
  email: "",
  role: "",
};

const AddAgentModal = ({ closeModal }) => {
  const [formData, setFormData] = useState(defaultFormData);
  const { name, email, role } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <Modal handleClose={closeModal}>
      <h3>Add Agent</h3>

      <form className="xui-mt-1 xui-form">
        <div className="xui-d-flex xui-flex-dir-column xui-grid-gap-half xui-mb-1">
          <label htmlFor="name">Name of Agent</label>
          <input
            id="name"
            name="name"
            type="text"
            value={name}
            onChange={handleChange}
            placeholder="Enter agent name"
            className="xui-bdr-w-2 xui-bdr-rad-half"
          />
        </div>

        <div className="xui-d-flex xui-flex-dir-column xui-grid-gap-half xui-mb-1">
          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            name="email"
            type="email"
            value={email}
            onChange={handleChange}
            placeholder="Enter email address"
            className="xui-bdr-w-2 xui-bdr-rad-half"
          />
        </div>

        <div className="xui-d-flex xui-flex-dir-column xui-grid-gap-half xui-mb-1">
          <label htmlFor="role">Assign Role</label>
          <select
            id="role"
            name="role"
            value={role}
            onChange={handleChange}
            className="xui-bdr-w-2 xui-bdr-rad-half"
          >
            <option value="" disabled>
              -- select
            </option>
            <option value="Agent">Agent</option>
            <option value="Moderator">Moderator</option>
          </select>
        </div>

        <button
          disabled={!name || !email || !role}
          className="xui-btn xui-bdr-rad-half primary-bg-100 xui-text-white xui-w-fluid-100"
        >
          Add Agent
        </button>
      </form>
    </Modal>
  );
};

export default AddAgentModal;
