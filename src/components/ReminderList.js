import React from 'react';

const ReminderList = ({ reminders }) => {
    return (
        <div>
            {reminders.length > 0 ? (
                reminders.map(reminder => (
                    <div key={reminder.id}>{reminder.title}</div>
                ))
            ) : (
                <p>No reminders available.</p>
            )}
        </div>
    );
};

export default ReminderList;
