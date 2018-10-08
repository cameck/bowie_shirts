// TODO: Do this server side so the client isn't bogged down with it
export const uniquePossibilities = (arr, value) => {
  return Array.from(new Set(arr.map(a => a[value])));
};

export const mapVariationsObj = variations => {
  // Weed out everything out of stock
  const mappedVars = {};
  for (var i = 0; i < variations.length; i++) {
    variations[i].color;
    if (variations[i].stock > 0) {
      if (!mappedVars[variations[i].color]) {
        mappedVars[variations[i].color] = [];
      }
      const isSelected = i === 0;
      mappedVars[variations[i].color].push(
        Object.assign({}, variations[i], { isSelected: isSelected })
      );
    }
  }
  return mappedVars;
};

export const findSelection = (
  allVariations,
  selectedVariation,
  isColor,
  item
) => {
  return allVariations.find(variation => {
    if (isColor) {
      return (
        variation.color === item && selectedVariation.size === variation.size
      );
    } else {
      return (
        variation.color === selectedVariation.color && variation.size === item
      );
    }
  });
};
