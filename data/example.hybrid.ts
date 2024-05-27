/**
 * Flat Small Object
 */
let smallFlatObject = {
  id: "35c6779a-fd9d-4036-b1ab-af0b932fc903",
  name: "Start",
  x: 0,
  y: 0,
  icon: "icon",
};

/**
 * Nested Standard Object
 */
let largeNestedObject = {
  id: "15b6679a-fd9d-4036-b1ab-af0b932fc903",
  name: "Triage",
  incoming: "d5bc89b2-74ea-4d1a-a0ed-22f4de79a580",
  outgoing: "d4ae89b2-74ea-4d1a-a0ed-22f4de79a580",
  metadata: [
    {
      duration: {
        distribution: "log normal",
        parameters: [{ meanlog: 0.1640238 }, { sdlog: 0.4169375 }],
      },
    },
  ],
  ui: {
    coordinates: {
      x: 0,
      y: 0,
    },
    icon: "icon",
  },
};

/**
 * Flat Small tuple
 */
let smallFlatTuple = [
  "35c6779a-fd9d-4036-b1ab-af0b932fc903",
  "Start",
  0,
  0,
  "icon",
];

/**
 * Nested Standard tuple
 */
let largeNestedTuple = [
  "15b6679a-fd9d-4036-b1ab-af0b932fc903",  // 0
  "Triage", // 1
  "d5bc89b2-74ea-4d1a-a0ed-22f4de79a580", // 2
  "d4ae89b2-74ea-4d1a-a0ed-22f4de79a580", // 3
  [[[["log normal"], [0.1640238, 0.4169375]]]],
  [[0, 0], "icon"],
];

largeNestedTuple = [
  "15b6679a-fd9d-4036-b1ab-af0b932fc903",  // 0
  "Triage", // 1
  "d5bc89b2-74ea-4d1a-a0ed-22f4de79a580", // 2
  "d4ae89b2-74ea-4d1a-a0ed-22f4de79a580", // 3
  [ // 4
    [ // [4][0]
      [ // [4][0]
        ["log normal"], // [4][0][0]
        [0.1640238, 0.4169375] // [4][0][1]
      ]
    ]
  ],
  [ // 5
    [0, 0], // [5][0]
    "icon" // [5][1]
  ],
];

let largeNestedTupleKeys = [
  "id",
  "name",
  "incoming",
  "outgoing",
  [
    [
      //"duration",
      [
        //"distribution",
        [
          "meanlog",
          "sdlog"
        ]
      ]
    ]
  ],
  [
    //"coordinates",
    [
      "x",
      "y"
    ],
    "icon"
  ]
];

/*
 * use existing comparison between tuples and object but increase the amount of metadata in each to assess the impact.
 * Apply separation of concerns by using two different data structure one for data and one for UI
 * Meaning a tuple is used for the UI and an object for the data
 * Drawback:
 * - Increases complexity: Logic will be needed to keep the data and UI in sync
 * - Increases memory usage: Extra logic and additional data structure needed
 */

let nodeData = {
  id: "15b6679a-fd9d-4036-b1ab-af0b932fc903",
  name: "Triage",
  incoming: "d5bc89b2-74ea-4d1a-a0ed-22f4de79a580",
  outgoing: "d4ae89b2-74ea-4d1a-a0ed-22f4de79a580",
  metadata: [
    {
      duration: {
        distribution: "log normal",
        parameters: [{ meanlog: 0.1640238 }, { sdlog: 0.4169375 }],
      },
    },
  ],
};

let nodeUI = ["15b6679a-fd9d-4036-b1ab-af0b932fc903", 0, 0, "icon"];
