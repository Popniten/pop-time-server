const router = require('express').Router()

/**
 * Main router for the web application.
 *
 * /snippets
 *  GET:
 *    description:  Renders the frontpage of the application.
 *    responses:    200 - When requesting webapp root.
 */
router.route('/')
  .get((req, res) => {
    res.json({message: 'Express app is running!'})
  })

module.exports = router
