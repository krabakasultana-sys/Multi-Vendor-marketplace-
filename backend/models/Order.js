const mongoose = require('mongoose');

const orderItemSchema = new mongoose.Schema({
  product:  { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
  name:     { type: String, required: true },
  image:    { type: String, required: true },
  price:    { type: Number, required: true },
  quantity: { type: Number, required: true },
});

const orderSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  items: [orderItemSchema],
  shippingAddress: {
    firstName: { type: String, required: true },
    lastName:  { type: String, required: true },
    address:   { type: String, required: true },
    city:      { type: String, required: true },
    country:   { type: String, required: true },
    zipCode:   { type: String, required: true },
    phone:     { type: String, required: true },
    email:     { type: String, required: true },
  },
  paymentMethod: {
    type: String,
    required: true,
    default: 'Card',
  },
  paymentStatus: {
    type: String,
    enum: ['PENDING', 'PAID', 'FAILED'],
    default: 'PENDING',
  },
  orderStatus: {
    type: String,
    enum: ['IN PROGRESS', 'PACKAGING', 'ON THE ROAD', 'DELIVERED', 'CANCELED'],
    default: 'IN PROGRESS',
  },
  itemsPrice:    { type: Number, required: true, default: 0 },
  shippingPrice: { type: Number, required: true, default: 0 },
  totalPrice:    { type: Number, required: true, default: 0 },
  paidAt:        { type: Date },
  deliveredAt:   { type: Date },
  notes:         { type: String, default: '' },
}, { timestamps: true });

module.exports = mongoose.model('Order', orderSchema);
