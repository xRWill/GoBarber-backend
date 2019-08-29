import User from '../models/User';
import File from '../models/File';
import Appointment from '../models/Appointment';

class ScheduleController {
  async index(req, res) {
    const { page = 1 } = req.query;

    const appointments = await Appointment.findAll({
      where: {
        user_id: req.userId,
      },
      limit: 20,
      offset: (page - 1) * 20,
      order: ['date'],
      attributes: ['id', 'date'],
      include: [
        {
          model: User,
          as: 'provider',
          attributes: ['id', 'name'],
          include: [{ model: File, as: 'avatar', attributes: ['path', 'url'] }],
        },
      ],
    });

      return res.json(appointments);
  }
}

export default new ScheduleController();
