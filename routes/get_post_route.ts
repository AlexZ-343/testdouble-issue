import express from 'express';
import {getPostTitles} from '../get_post_service.js';
import {getTextByHelper} from '../js_dummy_service.js';

const router = express.Router();

router.get('/get-posts-by-id', async function (req: any, res: any) {
  const ids: string[] = req.body.id;
  const helper: string = req.body.helper;

  const postTitle = getPostTitles(ids);

  // this is just to have a testable js file
  const helperResult = getTextByHelper(helper);

  return res.status(200).json({
    postTitle: postTitle,
    helperResult: helperResult
  });
});

export default router;
