const express = require('express');
const router = express.Router();
const Event = require('./eventModel');

router.post('/', async (req, res) => {
    const { name, description, date, time, category, reminder } = req.body;

    const newEvent = await Event({
        name,
        description,
        date,
        time,
        category,
        reminder
    }).save();

    if (newEvent) {
        res.status(201).json(newEvent);
    } else {
        res.status(404).json({ message: "Invalid Event" });
    }
});

router.get('/:id', async (req, res) => {
    const event = await Event.findById(req.params.id);

    if (event) {
        res.status(200).json(event);
    } else {
        res.status(404).json({ message: "Event not found" });
    }
});

router.post('/:id/reminder', async (req, res) => {
    const eventId = req.params.id;
    const event = await Event.findById(eventId);

    if (event) {
        event.reminder = true;
        await event.save();

        res.status(200).json({ message: `Reminder set for event: ${event.name}`, reminderDate: event.date });
    } else {
        res.status(404).json({ message: "Event not found" });
    }
});

module.exports = router;