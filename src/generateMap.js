var fs = require("fs");

var segments = 3;
var fillup = 35;

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
  var sectionOfSegment = sections[sg];
  var subsectLen = sectionOfSegment.length;
  console.log('************************');

  console.log('Creating SEGMENT ' + sg);
  var allSectionSegments = [];
  var partialSection = [];

  for (sc = 0; sc < subsectLen; sc++) {
    console.log('Checking section ' + sc);
    var rows = [];
    var seatLen = sectionOfSegment[sc].layoutStr.length;
    // make rows for section sc
    console.log('starts from ' + sectionOfSegment[sc].start + ' ends in ' + sectionOfSegment[sc].end)
    for (
      var r = sectionOfSegment[sc].start;
      r < sectionOfSegment[sc].end;
      r++
    ) {
      if (r != 13) {
        var seats = [];
        for (var t = 0; t < seatLen; t++) {
          var free = 0;
          var props = "";
          if (r <= sectionOfSegment[sc].start + 2) {
            props = "LG";
          }
          if (Math.random() * 100 > fillup) {
            free = 1;
          }
          seats.push({ props: props, free: free });
        } //end if seats iteration
        console.log('Creted seats for row ' + r);
          rows.push({ rowId: r, seats: seats });
      } //end if row 13

    } // end if rows iteration

    partialSection.push({
      start: sectionOfSegment[sc].start,
      end: sectionOfSegment[sc].end,
      layoutStr: sectionOfSegment[sc].layoutStr,
      pricingKey: sectionOfSegment[sc].key,
      rows: rows
    });

  } // end for segment section

  layOutObj.push({ segId: sg, sections: partialSection });
}


fs.writeFile("seatMapLayout.json", JSON.stringify(layOutObj), "utf8", function(err) {
  if (err) {
    console.log("An error occured while writing JSON Object to File.");
    return console.log(err);
  }

  console.log("JSON file has been saved.");
});
