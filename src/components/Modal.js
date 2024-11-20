import React from 'react';

const Modal = ({ formData, onInputChange, onFileChange, onSubmit, onCancel, isEditing }) => (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-700 bg-opacity-50 z-50">
        <div className="bg-white p-6 rounded shadow-md w-1/3 mt-100"> {/* Set mt-5 for ~20px margin */}
            <h2 className="text-xl font-semibold mb-4">{isEditing ? 'Edit Reminder' : 'Create Reminder'}</h2>
            <form onSubmit={onSubmit}>
                <input
                    type="text"
                    name="title"
                    placeholder="Title"
                    value={formData.title}
                    onChange={onInputChange}
                    required
                    className="border border-gray-300 p-2 mb-2 w-full rounded"
                />
                <textarea
                    name="description"
                    placeholder="Description"
                    value={formData.description}
                    onChange={onInputChange}
                    className="border border-gray-300 p-2 mb-2 w-full rounded"
                />
                <input
                    type="date"
                    name="dueDate"
                    value={formData.dueDate}
                    onChange={onInputChange}
                    required
                    className="border border-gray-300 p-2 mb-2 w-full rounded"
                />
                <select
                    name="dueTime"
                    value={formData.dueTime}
                    onChange={onInputChange}
                    required
                    className="border border-gray-300 p-2 mb-2 w-full rounded"
                >
                    <option value="">Select Time</option>
                    {[...Array(24)].map((_, i) => (
                        <option key={i} value={`${i + 1}:00 PM`}>{`${i + 1}:00 PM`}</option>
                    ))}
                    {[...Array(12)].map((_, i) => (
                        <option key={i + 24} value={`${i + 1}:00 AM`}>{`${i + 1}:00 AM`}</option>
                    ))}
                </select>
                <input
                    type="file"
                    onChange={onFileChange}
                    className="border border-gray-300 p-2 mb-2 w-full rounded"
                />
                <div className="flex justify-end"> {/* Added a wrapper for button alignment */}
                    <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded mr-2">
                        {isEditing ? 'Update Reminder' : 'Create Reminder'}
                    </button>
                    <button type="button" onClick={onCancel} className="bg-gray-500 text-white py-2 px-4 rounded">
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    </div>
);

export default Modal;
