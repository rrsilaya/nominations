import Member from './model';
import { getErrors } from '../../utils';

/**
 * @api {get} /member getMembers
 * @apiGroup Member
 * @apiName getMembers
 * @apiDescription Fetch all members
 *
 * @apiSuccess {Integer} status
 * @apiSuccess {String} message
 * @apiSuccess {Object[]} data
 * @apiSuccess {String} name name of member
 *
 * @apiSuccessExample {json} Success-Response:
 * HTTP/1.1 200 OK
 * {
 *   "status": 200,
 *   "message": "Successfully fetched members",
 *   "data": [
 *     {
 *       "_id": "5a800cffafc3fd4a438b76d9",
 *       "name": "Harold Roxas"
 *     },
 *     {
 *       "_id": "5a800cffafc3fd4a438b76d8",
 *       "name": "Erlen Evangelista"
 *     }
 *   ]
 * }
 *
 * @apiError {String[]} errors List of errors
 * @apiError {String} errors.message Error message
 */
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

/**
 * @api {post} /member addMember
 * @apiGroup Member
 * @apiName addMember
 * @apiDescription Add a member
 *
 * @apiParam {String} [name] Name of member
 *
 * @apiSuccess {Integer} status
 * @apiSuccess {String} message
 * @apiSuccess {Object} data
 * @apiSuccess {String} data.name Name of member
 *
 * @apiSuccessExample {json} Success-Response:
 * HTTP/1.1 200 OK
 * {
 *   "status": 200,
 *   "message": "Successfully added member",
 *   "data": {
 *     "_id": "5a800cffafc3fd4a438b76d9",
 *     "name": "Harold Roxas"
 *   }
 * }
 *
 * @apiError {String[]} errors List of errors
 * @apiError {String} errors.message Error message
 */
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

/**
 * @api {delete} /member/:_id removeMember
 * @apiGroup Member
 * @apiName removeMember
 * @apiDescription Remove a member
 *
 * @apiParam (URL Params) {String} _id Member ID
 *
 * @apiSuccess {Integer} status
 * @apiSuccess {String} message
 *
 * @apiSuccessExample {json} Success-Response:
 * HTTP/1.1 200 OK
 * {
 *   "status": 200,
 *   "message": "Successfully removed member"
 * }
 * 
 * @apiError {String[]} errors List of errors
 * @apiError {String} errors.message Error message
 */
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