
function defaultMask (value) {
  console.log('default')
  return value
    .replace(/\D/g, '')
    .replace(/(\d{4})(\d)/, '$1 $2')
    .replace(/(\d{4})(\d)/, '$1 $2')
    .replace(/(\d{4})(\d{1,4})/, '$1 $2')
    .replace(/(\s\d{4})\d+?$/, '$1');
}

function defaultUntil19Digits (value) {
  console.log('visa')
  return value
    .replace(/\D/g, '')
    .replace(/(\d{4})(\d)/, '$1 $2')
    .replace(/(\d{4})(\d)/, '$1 $2')
    .replace(/(\d{4})(\d)/, '$1 $2')
    .replace(/(\d{4})(\d{1,3})/, '$1 $2')
    .replace(/(\s\d{3})\d+?$/, '$1');
}

function amex (value) {
  console.log('amex')
  return value
    .replace(/\D/g, '')
    .replace(/(\d{4})(\d)/, '$1 $2')
    .replace(/(\d{6})(\d{1,5})/, '$1 -$2')
    .replace(/(-\d{5})\d+?$/, '$1');
}

function dinners (value) {
  console.log('dinners')
  return value
    .replace(/\D/g, '')
    .replace(/(\d{4})(\d)/, '$1 $2')
    .replace(/(\d{4})(\d)/, '$1 $2')
    .replace(/(\d{4})(\d{1,2})/, '$1 $2')
    .replace(/(\s\d{2})\d+?$/, '$1');
}

function checkDinners (splittedNumber) {
  return splittedNumber.slice(0,3).join('') >= 300 && splittedNumber.slice(0,3).join('') <= 305 || splittedNumber.slice(0,2).join('') === '36'
}

function checkVisa (splittedNumber) {
  return splittedNumber[0] === '4';
}

function checkAmex (splittedNumber) {
  return splittedNumber.slice(0,2).join('') === '34' || splittedNumber.slice(0,2).join('') === '37';
}

function checkJCB (splittedNumber) {
  return splittedNumber.slice(0,4).join('') >= 3528 && splittedNumber.slice(0,4).join('') <= 3589;
}

function checkDiscover (splittedNumber) {
  return (
    splittedNumber.slice(0,2).join('') === '65' ||
    splittedNumber.slice(0,3).join('') >= 644 && splittedNumber.slice(0,3).join('') <= 649 ||
    splittedNumber.slice(0,4).join('') === '6011' ||
    splittedNumber.slice(0,6).join('') >= 622126 && splittedNumber.slice(0,6).join('') <= 622925
  )
}

function checkMaestro (splittedNumber) {
  return (
    splittedNumber.slice(0,4).join('') === '5018' ||
    splittedNumber.slice(0,4).join('') === '5020' ||
    splittedNumber.slice(0,4).join('') === '5038' ||
    splittedNumber.slice(0,4).join('') === '5893' ||
    splittedNumber.slice(0,4).join('') === '6304' ||
    splittedNumber.slice(0,4).join('') === '6759' ||
    splittedNumber.slice(0,4).join('') === '6761' ||
    splittedNumber.slice(0,4).join('') === '6762' ||
    splittedNumber.slice(0,4).join('') === '6763'
  )
}

function maskCreditCard (value) {
  if (!value) return value.replace(/\D/g, '');
  const splittedNumber = value.split('');

  if (checkAmex(splittedNumber)) return amex(value);
  if (checkDinners(splittedNumber)) return dinners(value);

  if (
    checkVisa(splittedNumber) ||
    checkJCB(splittedNumber) ||
    checkDiscover(splittedNumber) ||
    checkMaestro(splittedNumber)
  ) return defaultUntil19Digits(value);

  return defaultMask(value);
}
