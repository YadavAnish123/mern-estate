import React, { useState, useEffect } from 'react';
import { AiOutlineClose } from 'react-icons/ai';

const Modal = ({ isOpen, onClose, property }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [modalPosition, setModalPosition] = useState({ top: '50%', left: '50%' });
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (isDragging) {
        setModalPosition({
          left: `${e.clientX - dragStart.x}px`,
          top: `${e.clientY - dragStart.y}px`,
        });
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    // Attach mouse move and up events to the window to allow dragging outside the modal
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, dragStart]);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setDragStart({ x: e.clientX - parseInt(modalPosition.left), y: e.clientY - parseInt(modalPosition.top) });
  };

  if (!isOpen || !property) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
    >
      <div
        className="bg-white p-5 rounded shadow-lg w-full max-w-sm overflow-y-auto"
        style={{
          position: 'absolute',
          top: modalPosition.top,
          left: modalPosition.left,
          transform: 'translate(-50%, -50%)', // Centering the modal
        }}
        onMouseDown={handleMouseDown}
      >
        {/* Close Icon */}
        <button onClick={onClose} className="absolute top-2 right-2">
          <AiOutlineClose className="text-gray-600 hover:text-red-500" size={24} />
        </button>

        <h2 className="text-xl font-semibold">{property.name}</h2>
        <img src={property.img} alt={property.name} className="rounded mb-3" />
        <p><strong>Location:</strong> {property.location}</p>
        <p><strong>Price:</strong> {property.price}</p>
        <p><strong>Area:</strong> {property.area} sq ft</p>
        <p><strong>Facing:</strong> {property.facing}</p>
        <p><strong>Likes:</strong> {property.likes}</p>
        <p><strong>Dislikes:</strong> {property.dislikes}</p>
        <button onClick={onClose} className="bg-red-500 text-white p-2 rounded mt-4">Close</button>
        <button className="bg-green-500 text-white p-2 rounded mt-4 ml-2">Add to Cart</button>
      </div>
    </div>
  );
};

export default Modal;
