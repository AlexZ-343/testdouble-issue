export function getTextByHelper(helper) {
  let helperResult;

  if (helper === 'blog') {
    helperResult = 'something'
  } else if (helper === 'forum') {
    helperResult = 'another outcome'
  } else {
    helperResult = 'not found';
  }

  return helperResult;
}
