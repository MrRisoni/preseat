var segments = 3;
// skip 13
var fillup = 35;
var pricingKeys = [
  "OS2pha83MngY",
  "Tz8j1EwLUM3i",
  "Nd7IaiLHRW4G",
  "OQjLVGnKvqfk",
  "cwpJgeTSGlCY",
  "wvqruWMFfGBb",
  "wTEoTjyzDiSg"
];

var sections = [
  [
    { start: 5, end: 18, layoutStr: "WAACW", key: "OS2pha83MngY" },
    { start: 19, end: 25, layoutStr: "WCAACW", key: "Tz8j1EwLUM3i" }
  ],
  [
    { start: 9, end: 18, layoutStr: "WCACACW", key: "Nd7IaiLHRW4G" },
    { start: 21, end: 29, layoutStr: "WCAACW", key: "OQjLVGnKvqfk" }
  ],
  [
    { start: 10, end: 18, layoutStr: "WAACW", key: "cwpJgeTSGlCY" },
    { start: 19, end: 25, layoutStr: "WCAACW", key: "wvqruWMFfGBb" },
    { start: 26, end: 38, layoutStr: "WCAACW", key: "wTEoTjyzDiSg" }
  ]
];

var layOutObj = [];
for (var sg = 0; sg < segments; sg++) {
  var subsecions = sections[sg];
  var subsectLen = subsecions.length;

  var sekta = [];
  for (sc = 0; sc < subsectLen; sc++) {
    var rows = [];
    var seatLen = subsecions[sc].layoutStr.length;
    for (var r = subsecions[sc].start; r < subsecions[sc].end; r++) {
      if (r != 13) {
        var seats = [];
        for (var t = 0; t < seatLen; t++) {
          var free = 1;
          seats.push({ props: "LG", free: free });
        }
        rows.push({ rowId: r, seats: seats });
      }
    }
    var kasta = {
      segId: sg,
      start: subsecions[sc].start,
      end: subsecions[sc].end,
      layoutStr: subsecions[sc].layoutStr,
      pricingKey: subsecions[sc].key,
      rows: rows
    };
    //var kasta = subsecions[sc];
    sekta.push(kasta);
  }

  layOutObj.push(sekta);
  //	var newItm = {segId:sg,sections:sekta};
}

console.log(layOutObj);
