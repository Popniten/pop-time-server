# pop-time-server

A test server for building a time booking Slack app.

## Instructions

Step-by-step notes on what I've done here...

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
