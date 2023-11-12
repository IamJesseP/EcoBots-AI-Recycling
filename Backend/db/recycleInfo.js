const recyclingInfo = {
  plastic: {
    response: 'This is a recyclable plastic!',
    carbonFootprint: 'Approximately 6 kg CO2 per kg of plastic',
    facts: [
      'Plastic takes up to 1,000 years to decompose in landfills.',
      'More than 8 million tons of plastic are dumped into our oceans every year.'
    ],
    recyclingTip:
      'Rinse plastic containers before recycling to remove any residues. Avoid single-use plastics by opting for reusable alternatives.',
    energySavings:
      'Recycling saves about 30% of the energy and emissions compared to producing new plastic from raw materials.',
    resourceConservation:
      'Recycling 500 grams of plastic saves around 12,000 BTUs of energy (equivalent to about 0.0112 gallons or 0.0425 liters of crude oil).'
  },
  paper: {
    response: 'This is  recyclable paper!',
    carbonFootprint: 'Approximately 1.7 kg CO2 per kg of paper',
    facts: [
      'Recycling a stack of newspaper just 3 feet high saves one tree.',
      'Every ton of paper recycled can save 17 trees.'
    ],
    recyclingTip:
      'Remove any plastic windows from envelopes and staples from documents before recycling. Store paper in a dry place as wet paper might not be recyclable.',
    energySavings:
      'Recycling saves about 40% of the energy compared to producing new paper from raw materials.',
    resourceConservation:
      'Recycling approximately 120 grams of paper saves 1% of a tree. Recycling saves significant amounts of wood fiber and reduces the demand for logging and paper pulp production.'
  },
  metal: {
    response: 'This is a recyclable metal!',
    carbonFootprint:
      'Varies with type. Aluminum, for instance, produces around 10 kg CO2 per kg when considering the entire lifecycle.',
    facts: [
      'Recycling metal uses about 95% less energy than producing new metal.',
      'Aluminum can be recycled indefinitely without losing its quality.'
    ],
    recyclingTip:
      'Rinse metal cans and containers before recycling. Crush soda cans to save space.',
    energySavings:
      'Recycling saves about 95% of the energy compared to producing new metal from raw materials.',
    resourceConservation:
      'Recycling 500 grams of metal saves significant amounts of raw materials, including iron, aluminum, or other metals, depending on the type of metal being recycled. Recycling approximately 478 grams of steel to save 1 kg of raw materials.'
  },
  cardboard: {
    response: 'This is a recyclable cardboard!',
    carbonFootprint: 'Approximately 3 kg CO2 per kg of cardboard',
    facts: [
      'Corrugated cardboard is typically made up of 70-100% recycled material.',
      'Recycling 1 ton of cardboard saves 9 cubic yards of landfill space.'
    ],
    energySavings:
      'Recycling paper and cardboard can result in energy savings of up to 40%. Specifically, recycling one ton of cardboard saves the energy equivalent of 46 gallons of oil',
    recyclingTip:
      'Flatten cardboard boxes before recycling. Remove any non-cardboard materials, such as plastic wrap or foam.',
    resourceConservation:
      'Recycling 588 grams of cardboard saves approximately 1% of a tree, reducing the demand for new cardboard production.'
  },
  glass: {
    response: 'This is a recyclable glass!',
    carbonFootprint: 'Around 0.33 kg CO2 per kg of recycled glass',
    facts: [
      'Glass is 100% recyclable and can be recycled endlessly without quality or purity loss.',
      'Recycled glass reduces emissions and consumption of raw materials.'
    ],
    recyclingTip:
      'Rinse glass containers before recycling. Avoid breaking the glass; intact bottles and jars are more valuable for recycling.',
    energySavings:
      'Recycling saves about 30% of the energy compared to producing new glass from raw materials.',
    resourceConservation:
      'Recycling approximately 667 grams of glass to save 1 kilogram of sand from being used to create new glass.'
  },
  trash: {
    response:
      "This doesn't look like a recyclable item! Think it is? Try taking a picture at a different angle!",
    carbonFootprint:
      'Varies widely based on content, but general waste produces an average of 0.92 kg CO2e per kg of waste.',
    facts: [
      'The average American throws away about 4.4 pounds of trash daily, contributing to over 1600 pounds a year.'
    ],
    recyclingTip:
      'Reduce your trash output by composting organic waste, buying products with less packaging, and reusing items when possible.'
  }
};

// To access a category, for instance 'plastic':
// console.log(recyclingInfo.plastic);
export default recyclingInfo;

// Sources:
// Cardboard
// https://ecomyths.org/wp-content/uploads/2020/11/lca-2010-aluminumassoc.pdf
// Plastic:
// https://onlinelibrary.wiley.com/doi/10.1111/jiec.13167
// Metal(Aluminum):
// https://www.aluminum.org/sites/default/files/2021-11/FactSheet2018.pdf
