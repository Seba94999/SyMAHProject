import React from "react";
import PropTypes from "prop-types";
import Modal from "./Modal";

const ConsultarCobrosModal = ({ isOpen, onClose, trabajo }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Cobros Recibidos">
      <div>
        <h2>Cobros del Trabajo</h2>
        {trabajo && trabajo.length > 0 ? (
          <ul>
            {trabajo.map((cobro, index) => (
              <li key={index}>
                <strong>Monto:</strong> {cobro.monto} <br />
                <strong>Fecha:</strong> {cobro.fecha}
              </li>
            ))}
          </ul>
        ) : (
          <p>No hay cobros registrados para este trabajo.</p>
        )}
      </div>
    </Modal>
  );
};

ConsultarCobrosModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  trabajo: PropTypes.arrayOf(
    PropTypes.shape({
      monto: PropTypes.number.isRequired,
      fecha: PropTypes.string.isRequired,
    }),
  ),
};

export default ConsultarCobrosModal;
