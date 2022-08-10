import {describe} from 'mocha';
import * as assert from 'assert';
import * as getPostTitles from '../get_post_service.js';
import * as td from 'testdouble';

process.env.NODE_ENV = 'test';

describe('validate EID', () => {
  let response = {
    "userId": 1,
    "title": "testdouble should mock this but it does not",
  };

  let mock_json_placeholder_rest: any;

  beforeEach(async () => {
    mock_json_placeholder_rest = await td.replaceEsm('../services/json-placeholder-rest.js');
  });

  afterEach(function () {
    td.reset();
  });

  it('successfully validates an active eid', () => {
    td.when(mock_json_placeholder_rest.prototype.getPostById(td.matchers.anything())).thenResolve(response);

    return getPostTitles.getPostTitles(['1']).then((postTitles: string[]) => {
      assert.equal(1, postTitles.length);
      assert.equal('testdouble should mock this but it does not', postTitles[0]);
    });
  });
});
