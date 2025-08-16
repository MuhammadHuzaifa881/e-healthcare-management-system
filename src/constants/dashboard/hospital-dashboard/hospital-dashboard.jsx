import React from 'react';
import { FaCalendarAlt, FaFlask, FaMoneyBillWave, FaUserInjured } from 'react-icons/fa';

export const activityData = [
  { icon: <FaUserInjured className="h-4 w-4 text-blue-500" />, text: "New patient registered - John Doe", time: "10 mins ago" },
  { icon: <FaCalendarAlt className="h-4 w-4 text-green-500" />, text: "Appointment confirmed with Dr. Smith", time: "25 mins ago" },
  { icon: <FaFlask className="h-4 w-4 text-red-500" />, text: "Lab test results uploaded for Patient #1234", time: "1 hour ago" },
  { icon: <FaMoneyBillWave className="h-4 w-4 text-yellow-500" />, text: "Payment received - $250.00", time: "2 hours ago" },
];

export const patientData = [
  { name: "Jan", patients: 120 },
  { name: "Feb", patients: 190 },
  { name: "Mar", patients: 170 },
  { name: "Apr", patients: 220 },
  { name: "May", patients: 250 },
  { name: "Jun", patients: 300 },
];

