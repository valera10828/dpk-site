import React from 'react';
import Modal from '../../../components/ui/Modal/Modal';
import RegOpenDoorsForm from './RegOpenDoorsForm';

const ModalRegOpenDoors = ({ isOpen, onClose }) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <RegOpenDoorsForm onClose={onClose} />
        </Modal>
    );
};

export default ModalRegOpenDoors;
