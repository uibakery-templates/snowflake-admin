const [products, orderDetails] = await Promise.all([{{actions.loadProducts.trigger()}}, {{actions.loadOrderDetails.trigger()}}]);

const productQuantities = orderDetails.reduce((histogram, { PRODUCT_ID, QUANTITY }) => {
  histogram[PRODUCT_ID] = (histogram[PRODUCT_ID] ?? 0) + QUANTITY;
  return histogram;
}, {});

return products.map(({ PRODUCT_ID, UNIT_PRICE }) => ({
  id: PRODUCT_ID,
  boughtQuantity: productQuantities[PRODUCT_ID] ?? 0,
  revenue: (productQuantities[PRODUCT_ID] ?? 0) * UNIT_PRICE,
}));