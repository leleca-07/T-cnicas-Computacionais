const getCSS = (variavel) => {
    return getComputedStyle(document.body).getPropertyValue(variavel)
};
const tickConfig = {
    color: getCSS('--cor-texto'),
    size: 16,
    family: getCSS('--font')
  }

export {getCSS, tickConfig}
