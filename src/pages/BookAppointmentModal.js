import React from 'react';
import './BookAppointmentModal.css';

const doctors = [
  {
    name: 'Dr. Jillian Stabile',
    title: 'MD, Geriatrician',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    name: 'Dr. Chinedu Ngwudike',
    title: 'MD, Geriatrician',
    avatar: 'https://randomuser.me/api/portraits/men/45.jpg',
  },
];

const days = [
  { day: '10', label: 'Thu' },
  { day: '11', label: 'Fri' },
  { day: '12', label: 'Sat' },
  { day: '13', label: 'Sun' },
  { day: '14', label: 'Mon' },
  { day: '15', label: 'Tues' },
  { day: '16', label: 'Wed' },
];

const times = [
  ['9:00', '11:00', '13:00', '14:00'],
  ['10:00', '11:00', '13:00'],
  ['9:00', '11:00', '13:00', '14:00'],
  ['9:00', '11:00', '13:00'],
  ['9:00', '11:00', '13:00'],
  ['9:00', '11:00', '13:00', '14:00'],
  ['9:00', '11:00', '13:00', '14:00'],
];

const BookAppointmentModal = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <div className="modal-overlay">
      <div className="modal-window">
        <button className="modal-close" onClick={onClose}>×</button>
        <h2 className="modal-title">Book Appointment</h2>
        <div className="modal-doctors">
          {doctors.map((doc, idx) => (
            <div className="modal-doctor-card" key={idx}>
              <img src={doc.avatar} alt={doc.name} />
              <div>
                <strong>{doc.name}</strong>
                <div className="modal-doctor-title">{doc.title}</div>
              </div>
            </div>
          ))}
          <span className="modal-next">Next page &gt;</span>
        </div>
        <div className="modal-calendar">
          <div className="modal-days">
            {days.map((d, idx) => (
              <div className="modal-day" key={idx}>
                <div className="modal-day-num">{d.day}</div>
                <div className="modal-day-label">{d.label}</div>
              </div>
            ))}
          </div>
          <div className="modal-times">
            {times.map((col, colIdx) => (
              <div className="modal-times-col" key={colIdx}>
                {col.map((t, tIdx) => (
                  <button className="modal-time-btn" key={tIdx}>{t}</button>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookAppointmentModal; 