// Store target positions for each card
const cardPositions = {};

document.getElementById("cards").onmousemove = (e) => {
  for (const card of document.getElementsByClassName("card")) {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Set the target position for this specific card
    const cardId = card.id || Math.random().toString(36).substr(2, 9); // Create ID if none exists
    card.id = cardId; // Ensure card has an ID

    if (!cardPositions[cardId]) {
      cardPositions[cardId] = {
        currentX: x,
        currentY: y,
        targetX: x,
        targetY: y,
      };
    } else {
      cardPositions[cardId].targetX = x;
      cardPositions[cardId].targetY = y;
    }
  }
};

// Much lower easing factor for more noticeable delay
const ease = 0.05;

function animate() {
  for (const cardId in cardPositions) {
    const card = document.getElementById(cardId);
    if (!card) continue;

    const pos = cardPositions[cardId];

    // Calculate the distance between current and target positions
    const dx = pos.targetX - pos.currentX;
    const dy = pos.targetY - pos.currentY;

    // Move current position a small percentage of the way to the target
    pos.currentX += dx * ease;
    pos.currentY += dy * ease;

    // Apply the new position
    card.style.setProperty("--mouse-x", `${pos.currentX}px`);
    card.style.setProperty("--mouse-y", `${pos.currentY}px`);
  }

  // Request the next frame
  requestAnimationFrame(animate);
}

// Start the animation loop
animate();

am5.ready(function () {
  var root = am5.Root.new("chartdiv");
  root.dateFormatter.setAll({
    dateFormat: "dd MMM",
    dateFields: ["valueX", "openValueX"],
  });

  root.setThemes([am5themes_Animated.new(root)]);

  var chart = root.container.children.push(
    am5xy.XYChart.new(root, {
      panX: true,
      panY: false,
      wheelX: "panX",
      wheelY: "none", // Prevent vertical scrolling from zooming
      layout: root.verticalLayout,
      paddingLeft: 0,
    })
  );

  var colors = chart.get("colors");

  // Reorder data to ensure headers appear in correct positions
  var data = [
    // FINANCIALS & PLANNING
    {
      category: "FINANCIALS & PLANNING",
      // fromDate: "2025-01-01",
      // toDate: "2026-01-31",
      columnSettings: { fill: "#e06666", fillOpacity: 0.3 },
      isHeader: true,
    },
    {
      category: "Establish Draft Budget",
      fromDate: "2025-03-01",
      toDate: "2025-03-31",
      columnSettings: { fill: "#f58787" },
    },
    {
      category: "Jim Sharman Award Application",
      fromDate: "2025-03-01",
      toDate: "2025-04-30",
      columnSettings: { fill: "#f58787" },
    },
    {
      category: "Review budget",
      fromDate: "2025-05-01",
      toDate: "2025-06-30",
      columnSettings: { fill: "#f58787" },
    },
    {
      category: "Jim Sharman grant notification (KM)",
      fromDate: "2025-05-01",
      toDate: "2025-05-30",
      columnSettings: { fill: "#f58787" },
    },
    {
      category: "Weekly Budget Review",
      fromDate: "2025-07-01",
      toDate: "2025-12-30",
      columnSettings: { fill: "#f58787" },
    },

    // DESIGN & DEVELOPMENT
    {
      category: "DESIGN & DEVELOPMENT",
      // fromDate: "2025-01-01",
      // toDate: "2026-01-31",
      columnSettings: { fill: "#45a29e", fillOpacity: 0.3 },
      isHeader: true,
    },
    {
      category: "Proof of concept design",
      fromDate: "2025-01-01",
      toDate: "2025-02-28",
      columnSettings: { fill: "#4ecbc4" },
    },
    {
      category: "Proof of concept development",
      fromDate: "2025-02-01",
      toDate: "2025-04-30",
      columnSettings: { fill: "#4ecbc4" },
    },
    {
      category: "Proof of Concept Initial Release (KM)",
      fromDate: "2025-05-01",
      toDate: "2025-05-31",
      columnSettings: { fill: "#f3d58b" },
    },
    {
      category: "Beta testing with 33 actors",
      fromDate: "2025-05-01",
      toDate: "2025-07-31",
      columnSettings: { fill: "#4ecbc4" },
    },
    {
      category: "Full Application Design",
      fromDate: "2025-07-01",
      toDate: "2025-10-31",
      columnSettings: { fill: "#4ecbc4" },
    },
    {
      category: "Website Design & Development",
      fromDate: "2025-07-01",
      toDate: "2025-09-30",
      columnSettings: { fill: "#4ecbc4" },
    },
    {
      category: "Large Language Model R&D & Training",
      fromDate: "2025-07-01",
      toDate: "2025-10-31",
      columnSettings: { fill: "#4ecbc4" },
    },
    {
      category: "Front & Backend App Development",
      fromDate: "2025-10-01",
      toDate: "2026-01-31",
      columnSettings: { fill: "#4ecbc4" },
    },
    {
      category: "Testing & Contingency",
      fromDate: "2025-11-01",
      toDate: "2025-12-31",
      columnSettings: { fill: "#4ecbc4" },
    },
    {
      category: "Hypercare period post release",
      fromDate: "2025-12-01",
      toDate: "2026-01-31",
      columnSettings: { fill: "#4ecbc4" },
    },

    // DELIVERY
    // {
    //   category: "DELIVERY",
    //   // fromDate: "2025-01-01",
    //   // toDate: "2026-01-31",
    //   columnSettings: { fill: "#e6b84c", fillOpacity: 0.3 },
    //   isHeader: true,
    // },

    {
      category: "Final Product Release (KM)",
      fromDate: "2026-01-01",
      toDate: "2026-01-31",
      columnSettings: { fill: "#f3d58b" },
    },

    // MARKETING & COMMUNICATION
    {
      category: "MARKETING & COMMUNICATION",
      // fromDate: "2025-01-01",
      // toDate: "2026-01-31",
      columnSettings: { fill: "#6c8ebe", fillOpacity: 0.3 },
      isHeader: true,
    },
    {
      category: "Develop brand Strategy and identity",
      fromDate: "2025-04-01",
      toDate: "2025-05-31",
      columnSettings: { fill: "#8aabdc" },
    },
    {
      category: "Social Media & Web Soft Launch",
      fromDate: "2025-04-01",
      toDate: "2025-04-30",
      columnSettings: { fill: "#8aabdc" },
    },
    {
      category: "Mailing List, Weekly Distribution",
      fromDate: "2025-05-01",
      toDate: "2026-01-31",
      columnSettings: { fill: "#8aabdc" },
    },
    {
      category: "Launch website and social media",
      fromDate: "2025-07-01",
      toDate: "2025-07-31",
      columnSettings: { fill: "#8aabdc" },
    },
    {
      category: "Release launch video introduction (KM)",
      fromDate: "2025-08-01",
      toDate: "2025-08-31",
      columnSettings: { fill: "#8aabdc" },
    },
    {
      category: "Organic Social campaign",
      fromDate: "2025-07-01",
      toDate: "2026-01-31",
      columnSettings: { fill: "#8aabdc" },
    },
    {
      category: "Paid Social Campaign",
      fromDate: "2025-10-01",
      toDate: "2026-01-31",
      columnSettings: { fill: "#8aabdc" },
    },
    {
      category: "Social campaign - Our Story",
      fromDate: "2025-11-01",
      toDate: "2026-01-31",
      columnSettings: { fill: "#8aabdc" },
    },
    {
      category: "Launch event at NIDA (KM)",
      fromDate: "2026-01-01",
      toDate: "2026-01-31",
      columnSettings: { fill: "#8aabdc" },
    },
  ];

  // Y-axis with categories
  var yAxis = chart.yAxes.push(
    am5xy.CategoryAxis.new(root, {
      categoryField: "category",
      renderer: am5xy.AxisRendererY.new(root, {
        inversed: true,
        cellStartLocation: 0,
        cellEndLocation: 1,
        minGridDistance: 30, // Increase spacing between rows
      }),
      tooltip: am5.Tooltip.new(root, {}),
    })
  );

  // Configure the category labels
  yAxis.get("renderer").labels.template.setAll({
    oversizedBehavior: "wrap",
    maxWidth: 200,
    fontSize: 12,
    fill: am5.color(0x000000),
    textAlign: "right",
    dx: 5, // Add some padding from the left edge
  });

  // Add custom class to header rows
  yAxis
    .get("renderer")
    .labels.template.adapters.add("className", function (className, target) {
      if (
        target.dataItem &&
        target.dataItem.dataContext &&
        target.dataItem.dataContext.isHeader
      ) {
        return "header-row";
      }
      return className;
    });

  // Bold header labels and add custom styling
  yAxis
    .get("renderer")
    .labels.template.adapters.add("text", function (text, target) {
      if (
        target.dataItem &&
        target.dataItem.dataContext &&
        target.dataItem.dataContext.isHeader
      ) {
        target.setAll({
          fontWeight: "bold",
          fontSize: 14,
          // paddingTop: 10,
          // paddingBottom: 10,
          textAlign: "right", // Ensure header text is also left-aligned
        });
      }
      return text;
    });

  // Add extra vertical space after header rows
  yAxis
    .get("renderer")
    .grid.template.adapters.add(
      "strokeOpacity",
      function (strokeOpacity, target) {
        if (
          target.dataItem &&
          target.dataItem.dataContext &&
          target.dataItem.dataContext.isHeader
        ) {
          return 0.8;
        }
        return 0.3;
      }
    );

  yAxis
    .get("renderer")
    .grid.template.adapters.add("stroke", function (stroke, target) {
      if (
        target.dataItem &&
        target.dataItem.dataContext &&
        target.dataItem.dataContext.isHeader
      ) {
        return am5.color(0x000000);
      }
      return stroke;
    });

  // Set data to y-axis
  yAxis.data.setAll(data);

  // X-axis with dates (positioned at top)
  var xAxis = chart.xAxes.push(
    am5xy.DateAxis.new(root, {
      baseInterval: { timeUnit: "day", count: 1 },
      renderer: am5xy.AxisRendererX.new(root, {
        minGridDistance: 40,
        opposite: true, // This places the axis at the top
      }),
      min: new Date("2025-01-01").getTime(),
      max: new Date("2026-01-31").getTime(),
      tooltip: am5.Tooltip.new(root, {}),
    })
  );

  // Format month labels for x-axis
  xAxis.get("dateFormats")["month"] = "MMM";
  xAxis.get("periodChangeDateFormats")["month"] = "MMM";

  // Create series for gantt chart bars
  var series = chart.series.push(
    am5xy.ColumnSeries.new(root, {
      xAxis: xAxis,
      yAxis: yAxis,
      openValueXField: "fromDate",
      valueXField: "toDate",
      categoryYField: "category",
      sequencedInterpolation: true,
    })
  );

  // Customize appearance of bars
  series.columns.template.adapters.add("fill", function (fill, target) {
    if (target.dataItem) {
      var dataContext = target.dataItem.dataContext;
      if (
        dataContext &&
        dataContext.columnSettings &&
        dataContext.columnSettings.fill
      ) {
        return dataContext.columnSettings.fill;
      }
    }
    return fill;
  });

  series.columns.template.adapters.add(
    "fillOpacity",
    function (fillOpacity, target) {
      if (target.dataItem) {
        var dataContext = target.dataItem.dataContext;
        if (
          dataContext &&
          dataContext.columnSettings &&
          dataContext.columnSettings.fillOpacity
        ) {
          return dataContext.columnSettings.fillOpacity;
        }
      }
      return fillOpacity;
    }
  );

  // Different heights for headers and tasks with larger spacing
  series.columns.template.adapters.add("height", function (height, target) {
    if (
      target.dataItem &&
      target.dataItem.dataContext &&
      target.dataItem.dataContext.isHeader
    ) {
      return am5.percent(35); // Slightly thinner header rows
    }
    return am5.percent(60); // Task rows
  });

  // Add vertical spacing between rows
  series.columns.template.adapters.add("dy", function (dy, target) {
    if (
      target.dataItem &&
      target.dataItem.dataContext &&
      target.dataItem.dataContext.isHeader
    ) {
      return 10; // Push headers down a bit
    }
    return 0;
  });

  // Basic styling for all columns
  series.columns.template.setAll({
    strokeOpacity: 0,
    tooltipText: "{category}: {openValueX} - {valueX}",
    cornerRadiusTL: 0,
    cornerRadiusTR: 0,
    cornerRadiusBL: 0,
    cornerRadiusBR: 0,
  });

  // Process dates
  series.data.processor = am5.DataProcessor.new(root, {
    dateFields: ["fromDate", "toDate"],
    dateFormat: "yyyy-MM-dd",
  });

  // Set data to the series
  series.data.setAll(data);

  // Add grid for better readability
  yAxis.get("renderer").grid.template.setAll({
    strokeDasharray: [2, 3],
    stroke: am5.color(0xcccccc),
    strokeOpacity: 0.4,
    location: 1,
  });

  // Add scrollbar
  chart.set(
    "scrollbarX",
    am5.Scrollbar.new(root, { orientation: "horizontal" })
  );

  // Animate chart appearance
  series.appear(1000);
  chart.appear(1000, 100);
});
// end am5.ready()
