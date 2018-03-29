import Nomination from './model';
import { getErrors } from '../../utils';

/**
 * @api {get} /nomination
 * @apiGroup Nomination
 * @apiName getNominations
 * @apiDescription Get all nominations
 *
 * @apiParam (Query Params) {String} [position] Nomination position
 *
 * @apiSuccess {Integer} status
 * @apiSuccess {String} message
 * @apiSuccess {Object[]} data
 * @apiSuccess {String} data._id ID of nomination
 * @apiSuccess {String} data.nominee Name of nominee
 * @apiSuccess {String} data.position Position nominated
 * @apiSuccess {String} data.name
 *
 * @apiSuccessExample {json} Success-Response:
 * HTTP/1.1 200 OK
 * {
 *   "status": 200,
 *   "message": "Successfully fetched nominations",
 *   "data": [
 *     {
 *       "_id": "5a800cffafc3fd4a438b76d9",
 *       "nominee": "Harold Roxas",
 *       "position": "CEO",
 *       "name": "Erlen Evangelista"
 *     },
 *     {
 *       "_id": "5a800d0dafc3fd4a438b76da",
 *       "nominee": "Lorenz Afable",
 *       "position": "DCEO",
 *       "name": "Kia Somabes"
 *     },
 *   ]
 * }
 *
 * @apiError (Error 500) {String[]} errors List of errors
 * @apiError (Error 500) {String} errors.message Error message
 */
export const getNominations = async (req, res) => {
  try {
    const nominations = await Nomination.find(req.params);

    res.status(200).json({
      status: 200,
      message: 'Successfully fetched nominations',
      data: nominations
    });
  } catch (err) {
    res.status(500).json({ errors: getErrors(err) });
  }
}

/**
 * @api {post} /nomination addNomination
 * @apiGroup Nomination
 * @apiName addNomination
 * @apiDescription Add a nomination
 *
 * @apiParam (Body Params) {String} nominee Name of nominee
 * @apiParam (Body Params) {String} position Position being nominated to
 * @apiParam (Body Params) {String} [name] Name of person who nominated
 *
 * @apiSuccess {Integer} status
 * @apiSuccess {String} message
 * @apiSuccess {Object} data
 * @apiSuccess {String} data._id ID of nomination
 * @apiSuccess {String} data.nominee Name of nominee
 * @apiSuccess {String} data.name Name of person who nominated
 *
 * @apiSuccessExample {json} Success-Response:
 * HTTP/1.1 200 OK
 * {
 *   "status": 200,
 *   "message": "Successfully added new nomination",
 *   "data": {
 *     "_id": "5a800cffafc3fd4a438b76d9",
 *     "nominee": "Harold Roxas",
 *     "position": "CEO",
 *     "name": "Erlen Evangelista"
 *   }
 * }
 * 
 * @apiError (Error 500) {String[]} errors List of errors
 * @apiError (Error 500) {String} errors.message Error message
 */
export const addNomination = async (req, res) => {
  try {
    const { nominee, position } = req.body;

    const nominations = await Nomination.find({ nominee, position });
    const nomination = new Nomination(req.body);

    if (!nominations.length) {
      await nomination.save();
    }

    res.status(200).json({
      status: 200,
      message: 'Successfully added new nomination',
      data: nominations.length ? nominations[0] : nomination
    });
  } catch (err) {
    res.status(500).json({ errors: getErrors(err) });
  }
}

/**
 * @api {delete} /nomination/:_id removeNomination
 * @apiGroup Nomination
 * @apiName removeNomination
 * @apiDescription Remove a nomination
 *
 * @apiParam (URL Params) {String} _id ID of nomination
 *
 * @apiSuccess {Integer} status
 * @apiSuccess {String} message
 *
 * @apiSuccessExample {json} Success-Response:
 * HTTP/1.1 200 OK
 * {
 *   "status": 200,
 *   "message": "Successfully removed nomination"
 * }
 *
 * @apiError (Error 500) {String[]} errors List of errors
 * @apiError (Error 500) {String} errors.message Error message
 */

export const removeNomination = async (req, res) => {
  try {
    await Nomination.findOneAndRemove(req.params);

    res.status(200).json({
      status: 200,
      message: 'Successfully removed nomination',
    });
  } catch (err) {
    res.status(500).json({ errors: getErrors(err) });
  }
}