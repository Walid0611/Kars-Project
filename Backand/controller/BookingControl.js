const bookingSchema = require('../model/Bookings');



 
exports.addBooking = async (req, res) => {
    try {
      const { Image, name, series, categories ,model  } = req.body;
      const newBooking = new bookingSchema({
        name ,
        Image,
        series,
        categories,
        model,
      });
      await newBooking.save();
      res.status(200).json({ msg: 'Success booking', newBooking });
    } catch (err) {
      console.log(err);
      res.status(500).json({ msg: 'An error occurred while creating the booking' });
    }
  };
  
 

  //  ID
  exports.deleteBooking = async (req, res) => {
    try {
      const { id } = req.params;
      const booking = await bookingSchema.findByIdAndDelete(id);
      if (!booking) {
        res.status(404).json({ msg: "Booking does not exist" });
        return;
      }
      res.status(200).json({ msg: 'Booking successfully deleted' });
    } catch (err) {
      console.err(err);
      res.status(500).json({ msg: 'An error occurred while deleting the booking ' });
    }
  }
  
  

// Update a booking 
exports.updateBookingById = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, series, categories, model ,Image  } = req.body;

    // Find and update the booking by ID
    const updatedBooking = await bookingSchema.findByIdAndUpdate(
      id,
      { name, series,categories, model , Image },
      { new: true }
    );

    
    if (!updatedBooking) {
      res.status(404).json({ msg: "Booking not found" });
      return;
    }

    
    res.status(200).json({ msg: 'Booking updated successfully', updatedBooking });
  } catch (err) {
    console.err(err);
   
    res.status(500).json({ msg: 'An error occurred while updating the booking' });
  }
}

  



// Get all bookings
exports.getAllBookings = async (req, res) => {
    try {
      // Find all bookings in the database
      const allBookings = await bookingSchema.find();
  
      res.status(200).json({ msg: 'All bookings', allBookings });
    } catch (err) {
      console.err(err);
      res.status(500).json({ msg: 'An error occurred while getting the bookings' });
    }
  }
  


// Get a booking by ID
exports.getBookingById = async (req, res) => {
    try {
      const { id } = req.params;
  
      // Find the booking by ID in the database
      const booking = await bookingSchema.findById(id);
  
      if (!booking) {
        res.status(404).json({ msg: 'Booking not found' });
        return;
      }
  
      res.status(200).json({ msg: 'Booking found', booking });
    } catch (error) {
      console.err(err);
      res.status(500).json({ msg: 'An error occurred while getting the booking' });
    }
  }