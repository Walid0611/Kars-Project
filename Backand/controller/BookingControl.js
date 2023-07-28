const bookingSchema = require('../model/Booking');


  exports.getAllBookings = async (req, res) => {
    try {
      
      const allBookings = await bookingSchema.find();
  
      res.status(200).json({ msg: 'All bookings', allBookings });
    } catch (err) {
      console.err(err);
      res.status(500).json({ msg: 'An error occurred while getting the bookings' });
    }
  };

  // getBookingById: async (req, res) => {
  //   try {
  //     // Your logic to get a specific booking by ID
  //     // ...
  //   } catch (err) {
  //     console.log(err);
  //     res.status(500).json({ error: 'Internal server error' });
  //   }
  // },

  exports.addBooking = async (req, res) => {
      try {
      const { name, series, categories, model , Image } = req.body;
      const newBooking = new bookingSchema({
        name,
        series,
        categories,
        model,
        Image
      });
      await newBooking.save();
      res.status(200).json({ msg: 'Success booking', newBooking });
    } catch (err) {
      console.log(err);
      res.status(500).json({ msg: 'An error of creating the booking' });
    }
  };

 exports.updateBookingById = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, series,categories , model , Image} = req.body;

    // Find and update the booking by ID
    const updatedBooking = await bookingSchema.findByIdAndUpdate(
      id,
      { name, series,categories , model , Image},
      { new: true }
    );

    // If the booking is not found, return an error
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
  

