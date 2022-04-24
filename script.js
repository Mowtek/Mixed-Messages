const userDay = +prompt("Please enter your birth day: (1-31)");
const userMonth = +prompt("Please enter your birth month: (1-12)");

function getUserZodiac(day, month) {
  switch (month) {
    case 1:
      if (day <= 19 && day > 0) return "Capricorn";
      else if (day >= 20 && day <= 31) return "Aquarius";
      else return "Please enter a valid day for January (1-31)";
    case 2:
      if (day <= 18 && day > 0) return "Aquarius";
      else if (day >= 19 && day <= 29) return "Pisces";
      else return "Please enter a valid day for February (1-29)";
    case 3:
      if (day <= 20 && day > 0) return "Pisces";
      else if (day >= 21 && day <= 31) return "Aries";
      else return "Please enter a valid day for March (1-31)";
    case 4:
      if (day <= 19 && day > 0) return "Aries";
      else if (day >= 20 && day <= 30) return "Taurus";
      else return "Please enter a valid day for April (1-30)";
    case 5:
      if (day <= 20 && day > 0) return "Taurus";
      else if (day >= 21 && day <= 31) return "Gemini";
      else return "Please enter a valid day for May (1-31)";
    case 6:
      if (day <= 20 && day > 0) return "Gemini";
      else if (day >= 21 && day <= 30) return "Cancer";
      else return "Please enter a valid day for June (1-30)";
    case 7:
      if (day <= 22 && day > 0) return "Cancer";
      else if (day >= 23 && day <= 31) return "Leo";
      else return "Please enter a valid day for July (1-31)";
    case 8:
      if (day <= 22 && day > 0) return "Leo";
      else if (day >= 23 && day <= 31) return "Virgo";
      else return "Please enter a valid day for August (1-31)";
    case 9:
      if (day <= 22 && day > 0) return "Virgo";
      else if (day >= 23 && day <= 30) return "Libra";
      else return "Please enter a valid day for September (1-30)";
    case 10:
      if (day <= 22 && day > 0) return "Libra";
      else if (day >= 23 && day <= 31) return "Scorpio";
      else return "Please enter a valid day for October (1-31)";
    case 11:
      if (day <= 21 && day > 0) return "Scorpio";
      else if (day >= 22 && day <= 30) return "Sagittarius";
      else return "Please enter a valid day for Nobember (1-30)";
    case 12:
      if (day <= 21 && day > 0) return "Sagittarius";
      else if (day >= 22 && day <= 31) return "Capricorn";
      else return "Please enter a valid day for December (1-31)";
    default:
      return "Please enter a valid month (1-12)";
  }
}

const colorNames = [
  "AliceBlue",
  "AntiqueWhite",
  "Aqua",
  "Aquamarine",
  "Azure",
  "Beige",
  "Bisque",
  "Black",
  "BlanchedAlmond",
  "Blue",
  "BlueViolet",
  "Brown",
  "BurlyWood",
  "CadetBlue",
  "Chartreuse",
  "Chocolate",
  "Coral",
  "CornflowerBlue",
  "Cornsilk",
  "Crimson",
  "Cyan",
  "DarkBlue",
  "DarkCyan",
  "DarkGoldenRod",
  "DarkGray",
  "DarkGrey",
  "DarkGreen",
  "DarkKhaki",
  "DarkMagenta",
  "DarkOliveGreen",
  "DarkOrange",
  "DarkOrchid",
  "DarkRed",
  "DarkSalmon",
  "DarkSeaGreen",
  "DarkSlateBlue",
  "DarkSlateGray",
  "DarkSlateGrey",
  "DarkTurquoise",
  "DarkViolet",
  "DeepPink",
  "DeepSkyBlue",
  "DimGray",
  "DimGrey",
  "DodgerBlue",
  "FireBrick",
  "FloralWhite",
  "ForestGreen",
  "Fuchsia",
  "Gainsboro",
  "GhostWhite",
  "Gold",
  "GoldenRod",
  "Gray",
  "Grey",
  "Green",
  "GreenYellow",
  "HoneyDew",
  "HotPink",
  "IndianRed",
  "Indigo",
  "Ivory",
  "Khaki",
  "Lavender",
  "LavenderBlush",
  "LawnGreen",
  "LemonChiffon",
  "LightBlue",
  "LightCoral",
  "LightCyan",
  "LightGoldenRodYellow",
  "LightGray",
  "LightGrey",
  "LightGreen",
  "LightPink",
  "LightSalmon",
  "LightSeaGreen",
  "LightSkyBlue",
  "LightSlateGray",
  "LightSlateGrey",
  "LightSteelBlue",
  "LightYellow",
  "Lime",
  "LimeGreen",
  "Linen",
  "Magenta",
  "Maroon",
  "MediumAquaMarine",
  "MediumBlue",
  "MediumOrchid",
  "MediumPurple",
  "MediumSeaGreen",
  "MediumSlateBlue",
  "MediumSpringGreen",
  "MediumTurquoise",
  "MediumVioletRed",
  "MidnightBlue",
  "MintCream",
  "MistyRose",
  "Moccasin",
  "NavajoWhite",
  "Navy",
  "OldLace",
  "Olive",
  "OliveDrab",
  "Orange",
  "OrangeRed",
  "Orchid",
  "PaleGoldenRod",
  "PaleGreen",
  "PaleTurquoise",
  "PaleVioletRed",
  "PapayaWhip",
  "PeachPuff",
  "Peru",
  "Pink",
  "Plum",
  "PowderBlue",
  "Purple",
  "RebeccaPurple",
  "Red",
  "RosyBrown",
  "RoyalBlue",
  "SaddleBrown",
  "Salmon",
  "SandyBrown",
  "SeaGreen",
  "SeaShell",
  "Sienna",
  "Silver",
  "SkyBlue",
  "SlateBlue",
  "SlateGray",
  "SlateGrey",
  "Snow",
  "SpringGreen",
  "SteelBlue",
  "Tan",
  "Teal",
  "Thistle",
  "Tomato",
  "Turquoise",
  "Violet",
  "Wheat",
  "White",
  "WhiteSmoke",
  "Yellow",
  "YellowGreen",
];

function getRandomColor(colorsArray) {
  const randomColorIndex = Math.floor(Math.random() * (colorsArray.length - 1));
  let color = colorsArray[randomColorIndex];
  let capitalCounter = 0;
  for (letter of color) {
    if (letter === letter.toUpperCase()) {
      capitalCounter++;
    }
  }
  if (capitalCounter >= 2) {
    let colorArray = color.split("");
    for (let index = 0; index < colorArray.length + capitalCounter; index++) {
      let letter = "" + colorArray[index];
      if (letter === letter.toUpperCase()) {
        if (colorArray[index - 1] === " " || index === 0) continue;
        const tempArr = colorArray.splice(index);
        colorArray.push(" ");
        tempArr.forEach((letter) => colorArray.push(letter));
      }
    }
    color = colorArray.join("");
  }
  return color;
}

const horoscope = {
  names: [
    "Your husbands",
    "Your",
    "Your Wifes",
    "Your sisters",
    "Your dogs",
    "Your fathers",
  ],
  things: [
    "day",
    "evening",
    "morning",
    "night",
    "weekend",
    "afternoon",
    "bone",
  ],
  stuff: [
    "destroyed",
    "filled with joy",
    "interesting",
    "extremely sad",
    "very successful",
  ],
  getRandomName() {
    return this.names[Math.floor(Math.random() * (this.names.length - 1))];
  },
  getRandomThing() {
    return this.things[Math.floor(Math.random() * (this.things.length - 1))];
  },
  getRandomStuff() {
    return this.stuff[Math.floor(Math.random() * (this.stuff.length - 1))];
  },
  getRandomSent() {
    return `Hello ${getUserZodiac(
      userDay,
      userMonth
    )}!\n${this.getRandomName()} ${this.getRandomThing()} will be ${this.getRandomStuff()}.\nLucky Color: ${getRandomColor(
      colorNames
    )}\nLucky Number: ${Math.floor(Math.random() * 10)}`;
  },
};
