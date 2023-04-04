function validParentheses(parenStr) {
  let stack = [];
  let pair = { "(": ")" };

  for(let i = 0; i < parenStr.length; i++) {
    if(parenStr[i] === '(') {
      stack.push(parenStr[i])
    } else {
      const picked = stack.pop();

      if(parenStr[i] !== pair[picked]) {
        return false;
      }
    }
  }

  if(stack.length !== 0) {
    return false;
  }

  return true;
}
