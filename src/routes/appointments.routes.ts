import { Router } from 'express';
import { startOfHour, parseISO, isEqual } from 'date-fns';

import Appointments from '../modles/Appointments';
import AppointmentsRepository from '../repositories/AppointmentsRepository';

const routes = Router();
const appointmentsRepository = new AppointmentsRepository();

routes.post('/', (request, response) => {
  const { provider, date } = request.body;

  const parsedDate = startOfHour(parseISO(date));
  const findAppointmentInSameDate = appointments.find(appointment =>
    isEqual(parsedDate, appointment.date),
  );

  if (findAppointmentInSameDate) {
    return response
      .status(400)
      .json({ message: 'This appointment is already booked' });
  }

  return response.json(appointment);
});

export default routes;
