# pop-time-server

A test server for building a time booking Slack app.

## Instructions

Step-by-step notes on what I've done here...

## App features

### Commands

* `/examination` - List helpful examination commands (--help)

Student specific:

* `/examination book` - Book a time
* `/examination time` - See what time is booked
* `/examination cancel` - Cancels booked time
* ~~`/examination amiready` - Tests students repo~~

Teacher/examinator specific

* `/examination create` - Create examination timeslots
* `/examination add` - Add day/time to examination
* `/examination ???` - zzz

### Extra features

* Ping student 30 minutes before their examination time
  * Needs bot?

## API

### GET `/time`

Get booked time

### POST `/time`

Book time

#### Payload

Param | Description
---|---
time | zzz
date | zzz

##### Example

```json
{
  "time": "10.45",
  "date": "2017-11-22"
}
```

#### Responses

Response | Description
---|---
200 | zzz
400 | zzz

## Command workflow

### `/examination create`

* Select days (dates)
* Input examination length
* Choose number of examinations/students
* Choose start time and end time
* Preconfigured times for breaks/lunch
* Only specific Slack users allowed, how?
* Choose GitHub organisation? Connected to Slack channel for course?
