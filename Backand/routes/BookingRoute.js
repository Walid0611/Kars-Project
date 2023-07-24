const express = require('express');
const BookingRouter = express.Router();
const BookingControl =require('../controllers/BookingControl')



BookingRouter.get('/getAll', BookingControl.getAllBookings);
//http://localhost:3002/booking/getAll
BookingRouter.get('/getAll/:id', BookingControl.getBookingById);
//http://localhost:3002/booking/getAll
BookingRouter.post('/addBooking', BookingControl.addBooking);
//http://localhost:3002/booking/addbooking
BookingRouter.put('/UpBooking/:id', BookingControl.updateBookingById);
//http://localhost:3002/booking/UpBooking:id
BookingRouter.delete('/deleteBooking/:id', BookingControl.deleteBookingById);
//http://localhost:3002/booking/deleteBooking:id



BookingRouter.delete('deleteBooking', BookingControl.deleteBooking);

module.exports = BookingRouter;