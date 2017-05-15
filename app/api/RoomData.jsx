var axios = require('axios');

const ROOM_DATA_URL = 'https://challenges.1aim.com/roombooking/getrooms';

const config = {
  method: 'post',
  url: ROOM_DATA_URL,
  params: {date: "today"},
  headers: {
    'Content-Type': 'application/json',
  },
};

module.exports = {
  getRooms: function (date) {
    axios(config)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  },

  dummyData: [
    //room object
    {
      name: "Best room",
      location: "under the tree",
      equipment: [
        //list of avaiable equipment
        "pc",
        "sauna",
        "fridge"
      ],
      size: "800m²", //size of the room in m²
      capacity: 3,
      avail: [
        //list of times at which a room is free and can be booked,
        //between 7 am and 7 pm in 15min steps
        "14:30 - 14:45",
        "14:30 - 14:45",
      ],
      images: [
        //can contain 0-3 images
        "url of image",
      ]
    },
    {
      name: "normal room",
      location: "across the park",
      equipment: [
        //list of avaiable equipment
        "pc",
        "fridge"
      ],
      size: "80m²", //size of the room in m²
      capacity: 2,
      avail: [
        //list of times at which a room is free and can be booked,
        //between 7 am and 7 pm in 15min steps
        "15:30 - 15:45",
        "15:30 - 15:45",
      ],
      images: [
        //can contain 0-3 images
        "url of image",
      ]
    },
    {
      name: "worst room",
      location: "under the tree",
      equipment: [
        //list of avaiable equipment
        "fridge"
      ],
      size: "40m²", //size of the room in m²
      capacity: 1,
      avail: [
        //list of times at which a room is free and can be booked,
        //between 7 am and 7 pm in 15min steps
        "10:30 - 10:45",
        "10:30 - 10:45",
      ],
      images: [
        //can contain 0-3 images
        "url of image",
      ]
    },
  ]
}
