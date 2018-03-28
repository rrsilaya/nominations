import Member from './model';
import { getErrors } from '../../utils';

export const getMembers = async (req, res) => {
  try {
    const members = await Member.find();

    res.status(200).json({
      status: 200,
      message: 'Successfully fetched members',
      data: members
    });
  } catch (err) {
    res.status(500).json({ errors: getErrors(err) });
  }
}

export const addMember = async (req, res) => {
  try {
    const member = new Member(req.body);

    res.status(200).json({
      status: 200,
      message: 'Successfully added member',
      data: member
    });
  } catch (err) {
    res.status(500).json({ errors: getErrors(err) });
  }
}

export const removeMember = async (req, res) => {
  try {
    await Member.findOneAndRemove(req.params);

    res.status(200).json({
      status: 200,
      message: 'Successfully removed member',
    });
  } catch (err) {
    res.status(500).json({ errors: getErrors(err) });
  }
}