const express = require('express');
const BookingRouter = express.Router();
const BookingControl =require('../controller/BookingControl')



BookingRouter.get('/getAll', BookingControl.getAllBookings);
//http://localhost:3002/booking/getAll
BookingRouter.post('/addBooking', BookingControl.addBooking);
//http://localhost:3002/booking/addbooking
BookingRouter.put('/updatedBooking/:id', BookingControl.updateBookingById);
//http://localhost:3002/booking/updatedBooking:id
BookingRouter.delete('/deleteBooking/:id', BookingControl.deleteBooking);
//http://localhost:3002/booking/deleteBooking:id



BookingRouter.delete('deleteBooking', BookingControl.deleteBooking);

module.exports = BookingRouter;