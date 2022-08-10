import {getPostById} from './services/json-placeholder-rest.js';

function getPostTitles(ids: any): Promise<string[]> {
  const promises: Promise<string>[] = [];

  for (const id of ids) {
    promises.push(getPostById(id));
  }

  return new Promise((resolve, reject) => {
    Promise.all(promises)
      .then((postTitles: string[]) => {
        resolve(postTitles);
      })
      .catch((err: any) => {
        reject(err);
      });
  });
}

export {getPostTitles};
