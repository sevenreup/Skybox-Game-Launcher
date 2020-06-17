export const getColorStore = store => store.color;

export const getActivePrimaryColor = store => getColorStore(store).activeGameColors;