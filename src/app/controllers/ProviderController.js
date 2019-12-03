import User from '../models/User';
import File from '../models/File';

class ProviderController {
  async index(req, res) {
    const Providers = await User.findAll({
      where: { provider: true },
      attributes: ['id', 'name', 'email', 'avatar_id'],
      include: [
        { model: File, as: 'avatar', attributes: ['name', 'path', 'url'] },
      ],
    });

    return res.json(Providers);
  }
}

export default new ProviderController();
