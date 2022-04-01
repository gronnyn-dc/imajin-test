export const addCommas = (x, format = 'Rp. ', komaStrip = true) =>
  format +
  x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.') +
  (komaStrip ? ',-' : '');