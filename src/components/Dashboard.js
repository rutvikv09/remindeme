

import React, { useState } from 'react';

const Dashboard = () => {
    const [reminders] = useState([
        {
            id: 1,
            title: 'Team Meeting',
            description: 'Discuss project milestones and timelines.',
            dueDate: '2024-11-25',
            dueTime: '10:00',
            attachment: null,
        },
        {
            id: 2,
            title: 'Doctor Appointment',
            description: 'Visit Dr. Smith for the annual check-up.',
            dueDate: '2024-11-26',
            dueTime: '14:30',
            attachment: null,
        },
        {
            id: 3,
            title: 'Grocery Shopping',
            description: 'Buy fruits, vegetables, and household items.',
            dueDate: '2024-11-27',
            dueTime: '18:00',
            attachment: null,
        },
        {
            id: 4,
            title: 'Project Deadline',
            description: 'Submit the final project report.',
            dueDate: '2024-11-28',
            dueTime: '23:59',
            attachment: null,
        },
    ]);

    return (
        <div className="min-h-screen bg-gray-100 mt-11 p-11">
            <div className="flex justify-between items-center mb-2">
                <h1 className="text-3xl font-bold text-gray-800">Reminder Dashboard</h1>
                <button
                    onClick={() => alert('Create Reminder Modal Placeholder')}
                    className="bg-blue-500 text-white py-2 px-4 rounded shadow hover:bg-blue-600 transition"
                >
                    Create Reminder
                </button>
            </div>

            <div className="mt-4">
                {reminders.length === 0 ? (
                    <p className="text-gray-700">No reminders found. Create one to get started!</p>
                ) : (
                    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {reminders.map((reminder) => (
                            <ReminderCard key={reminder.id} reminder={reminder} />
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

const ReminderCard = ({ reminder }) => (
    <li className="bg-white p-4 rounded shadow">
        <h3 className="text-lg font-semibold">{reminder.title}</h3>
        <p className="text-gray-600">{reminder.description}</p>
        <p className="text-gray-600">
            Due: {reminder.dueDate} at {reminder.dueTime}
        </p>
        {reminder.attachment && (
            <a
                href={reminder.attachment}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline text-sm"
            >
                View Attachment
            </a>
        )}
        <div className="flex space-x-3 mt-4">
            <button
                onClick={() => alert('Edit Reminder Placeholder')}
                className="bg-yellow-400 text-white py-1 px-3 rounded"
            >
                Edit
            </button>
            <button
                onClick={() => alert('Delete Reminder Placeholder')}
                className="bg-red-500 text-white py-1 px-3 rounded"
            >
                Delete
            </button>
        </div>
    </li>
);

export default Dashboard;
