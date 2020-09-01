
function maskCreditCard (value) {
  return value
    .replace(/\D/g, '')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d{1,2})/, '$1-$2')
    .replace(/(-\d{2})\d+?$/, '$1')
}


document.querySelectorAll('input').forEach($input => {
  $input.addEventListener(
    'input',
    (e: any) => {
      maskCreditCard(e.target.value)
    },
    false
  );
});