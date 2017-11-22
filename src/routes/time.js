const router = require('express').Router()

/**
 * Handles timetable for Slack app.
 *
 * /time
 *  GET:
 *    description:  Gets available examination times.
 *    responses:    200 - When times are available.
 *                  204 - When no time slots are available.
 */
router.route('/')
  .get((req, res) => {
    res.json([
      {
        day: 'Torsdag',
        slots: [
          '09.00-09.30',
          '90.30-10.00'
        ]
      },
      {
        day: 'Fredag',
        slots: [
          '09.00-09.30',
          '90.30-10.00'
        ]
      }
    ])
  })

module.exports = router
