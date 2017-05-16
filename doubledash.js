var namespace = "http://www.w3.org/2000/svg"
var circuit = makeImage("http://vignette3.wikia.nocookie.net/mariokart/images/1/12/Luigi_Circuit_%28GCN%29_-_4.png/revision/latest?cb=20140604092322", -62, 0, 190, 50)
var x = getX(circuit)
var peach = makeImage("http://vignette3.wikia.nocookie.net/mariokart/images/6/6d/Peach_Beach_%28GCN%29_-_3.png/revision/latest?cb=20140604151518", 6, 0, 190, 50)
var x = getX(peach)
var baby = makeImage("http://vignette4.wikia.nocookie.net/mariokart/images/7/78/Baby_Park_%28GCN%29_-_2.png/revision/latest?cb=20140604151606", 73, 0, 190, 50)
var x = getX(baby)
var drydry = makeImage("https://i.ytimg.com/vi/k2TjOa8iyis/hqdefault.jpg", 138, 0, 192, 51)
var x = getX(drydry)
var bridge = makeImage("http://cubemedia.ign.com/cube/image/mkdd_111103_bridge2bev.jpg", -62, 51, 190, 50)
var x = getX(bridge)
var marcircuit = makeImage("https://i.ytimg.com/vi/gYNpPoqEFkU/hqdefault.jpg", 3, 51, 193, 50)
var x = getX(marcircuit)
var cruiser = makeImage("https://i.ytimg.com/vi/2k0AOTZLlJ4/hqdefault.jpg", 71, 51, 193, 50)
var x = getX(cruiser)
var waluigi = makeImage("http://www.whatevs.org/images/dailypics/0903/mkdd_091703_in1.jpg", 138, 51, 192, 51)
var x = getX(waluigi)
var sherbet = makeImage("http://vignette1.wikia.nocookie.net/mariokart/images/8/84/Sherbet_Land_%28GCN%29_-_8.png/revision/latest?cb=20140529030038", -62, 102, 190, 50)
var x = getX(sherbet)
var city = makeImage("http://www.retrogameage.com/wp-content/uploads/2014/02/GM4E01-98.jpg", 5, 102, 192, 51)
var x = getX(city)
var ycircuit = makeImage("https://i.ytimg.com/vi/-DgUVlQ8cHM/hqdefault.jpg", 71, 102, 192, 51)
var x = getX(ycircuit)
var mountain = makeImage("http://vignette3.wikia.nocookie.net/mario/images/3/3c/DK_Mountain_-_Fired_Cannon_-_Double_Dash%21%21.png/revision/latest?cb=20120325163117", 138, 102, 190, 51)
var x = getX(mountain)
var colosseum = makeImage("https://i.ytimg.com/vi/QRkghPaRzZk/hqdefault.jpg", -62, 154, 192, 51)
var x = getX(colosseum)
var dino = makeImage("https://i.ytimg.com/vi/gSdfemrqMgE/hqdefault.jpg", 5, 154, 192, 51)
var x = getX(dino)
var bowsercastle = makeImage("http://i.ytimg.com/vi/kG6J9pY87eQ/0.jpg", 71, 154, 192, 51)
var x = getX(bowsercastle)
var rainbowroad2 = makeImage("https://i.ytimg.com/vi/-5v7GDYW3lM/hqdefault.jpg", 138,154,192,51)
var x = getX(rainbowroad2)
var redfire = makeImage("http://vignette4.wikia.nocookie.net/mariokart/images/b/b9/Red_Fire_-_Artwork_-_Mario_Kart_Double_Dash%21%21.png/revision/latest?cb=20120817161239", -62, 210, 190, 51)
var x = getX(redfire)
var cast1 = makeImage("https://r.mprd.se/fup/up/66677-Mario_Kart_Double_Dash-1.jpg", 71, 210, 262, 151)
var bobomb = makeImage("http://img3.wikia.nocookie.net/__cb20111127141345/fantendo/images/f/f2/Bob-omb_walk.png", -62, 282, 190, 50)
var x = getX(bobomb)
var giantbanana = makeImage("http://media.ign.com/boards/images/icons2/mario_madbanana.gif", 3, 282, 190, 50)
var x = getX(giantbanana)
var chainchomp = makeImage("http://vignette1.wikia.nocookie.net/fantendo/images/8/84/Chain_Chomp_MKW2%21%21.png/revision/latest?cb=20110709230147", -22, 334, 190, 50)
var x = getX(chainchomp)
var fireball = makeImage("http://vignette1.wikia.nocookie.net/nintendo/images/b/b9/Mario_Kart_Fireball.png/revision/latest?cb=20110412215207&path-prefix=en", 3, 210, 190, 50)
addEventListener("keydown", movefireball)
function movefireball(event) {
  var x = getX(fireball)
  if (event.key == "a") {
  move(fireball, -3, 0)
  } if (event.key == "d") {
    move(fireball, 3, 0)
  } if (event.key == "w") {
    move(fireball, 0, -3)
  } if (event.key == "s") {
    move(fireball, 0, 3)
  } if (x > 300) {
  }
}
  addEventListener("keydown", giantbanana)
  function giantbanana(event) {
    var x = getX(giantbanana)
    if (event.key == "r") {
    move(giantbanana, -3, 0)
  } if (event.key == "e") {
    move(giantbanana, 3, 0)
  } if (event.key == "q") {
    move(giantbanana, 0, -3)
  } if (event.key == "2") {
    move(giantbanana, 0, 3)
  } if (x > 300) {

  }
  }
  addEventListener("keydown", bobomb)
  function bobomb(event) {
    var x = getX(bobomb)
    if (event.key == "h") {
    move(bobomb, -3, 0)
  } if (event.key == "m") {
    move(bobomb, 3, 0)
  } if (event.key == "j") {
    move(bobomb, 0, -3)
  } if (event.key == "n") {
    move(bobomb, 0, 3)
  } if (x > 300) {
  }
}
addEventListener("keydown", chainchomp)
function chainchomp(event) {
  var x = getX(chainchomp)
  if (event.key == "k") {
  move(chainchomp, -3, 0)
} if (event.key == "l") {
  move(chainchomp, 3, 0)
} if (event.key == "p") {
  move(chainchomp, 0, -3)
} if (event.key == "o") {
  move(chainchomp, 0, 3)
} if (x > 300) {
}
}

function getX(shape) {
  if (!shape) {
    throw "Uh oh, you tried to get the x coordinate of a shape that doesn't exist!"
  }
  try {
    if (shape.hasAttribute("x")) {
      return parseFloat(shape.getAttribute("x"))
    } else if (shape.hasAttribute("cx")) {
      return parseFloat(shape.getAttribute("cx"))
    }  else if (shape.hasAttribute("x1")) {
      return parseFloat(shape.getAttribute("x1"))
    }
  } catch(err) {
    throw "You're trying to get the x coordinate of something that isn't a shape!"
  }
}

function getY(shape) {
  if (!shape) {
    throw "Uh oh, you tried to get the y coordinate of a shape that doesn't exist!"
  }
  try {
    if (shape.hasAttribute("y")) {
      return parseFloat(shape.getAttribute("y"))
    } else if (shape.hasAttribute("cy")) {
      return parseFloat(shape.getAttribute("cy"))
    } else if (shape.hasAttribute("y1")) {
      return parseFloat(shape.getAttribute("y1"))
    }
  } catch (err) {
    throw "You're trying to get the y coordinate of something that isn't a shape!"
  }
}

function setX(shape, x) {
  if (!shape) {
    throw "I can't set the x of a shape that doesn't exist!"
  }
  if (isNaN(x)) {
    throw "You need to tell me what to set the x coordinate to!"
  }
  if (shape.hasAttribute("x")) {
    shape.setAttribute("x", x)
  } else if (shape.hasAttribute("cx")) {
    shape.setAttribute("cx", x)
  } else if (shape.hasAttribute("x1")) {
    var xDiff = parseFloat(shape.getAttribute("x2")) - parseFloat(shape.getAttribute("x1"))
    shape.setAttribute("x1", x)
    shape.setAttribute("x2", x + xDiff)
  }
}

function setY(shape, y) {
  if (!shape) {
    throw "I can't set the y of a shape that doesn't exist!"
  }
  if (isNaN(y)) {
    throw "You need to tell me what to set the y coordinate to!"
  }
  if (shape.hasAttribute("y")) {
    shape.setAttribute("y", y)
  } else if (shape.hasAttribute("cy")) {
    shape.setAttribute("cy", y)
  } else if (shape.hasAttribute("y1")) {
    var yDiff = parseFloat(shape.getAttribute("y2")) - parseFloat(shape.getAttribute("y1"))
    shape.setAttribute("y1", y)
    shape.setAttribute("y2", y + yDiff)
  }
}

function move(shape, dx, dy) {
  if (!shape) {
    throw "I can't move a shape that doesn't exist!"
  }
  if (isNaN(dx)) {
    throw "You need to tell me how much to move the shape in the x direction!"
  }
  if (isNaN(dy)) {
    throw "You need to tell me how much to move the shape in the y direction!"
  }
  if (shape.hasAttribute("x") && shape.hasAttribute("y")) {
    var x = parseFloat(shape.getAttribute("x"))
    var y = parseFloat(shape.getAttribute("y"))
    shape.setAttribute("x", x + dx)
    shape.setAttribute("y", y + dy)
  } else if (shape.hasAttribute("cx")) {
    var cx = parseFloat(shape.getAttribute("cx"))
    var cy = parseFloat(shape.getAttribute("cy"))
    shape.setAttribute("cx", cx + dx)
    shape.setAttribute("cy", cy + dy)
  } else if (shape.hasAttribute("x1")) {
    var x1 = parseFloat(shape.getAttribute("x1"))
    var y1 = parseFloat(shape.getAttribute("x1"))
    setX(shape, x1 + dx)
    setY(shape, y1 + dy)
  }
}

function makeCircle(cx, cy, r, fill, opacity) {
  var circle = document.createElementNS(namespace, "circle")
  circle.setAttribute("cx", cx)
  circle.setAttribute("cy", cy)
  circle.setAttribute("r", r)
  circle.setAttribute("fill", fill)
  circle.setAttribute("opacity", opacity)

  var canvas = document.getElementById("canvas")
  canvas.appendChild(circle)
  return circle
}

function makeRect(x, y, width, height, fill, opacity) {
  var rect = document.createElementNS(namespace, "rect")
  rect.setAttribute("x", x)
  rect.setAttribute("y", y)
  rect.setAttribute("width", width)
  rect.setAttribute("height", height)
  rect.setAttribute("fill", fill)
  rect.setAttribute("opacity", opacity)

  var canvas = document.getElementById("canvas")
  canvas.appendChild(rect)
  return rect
}

function makeEllipse(cx, cy, rx, ry, fill, opacity) {
  var ellipse = document.createElementNS(namespace, "ellipse")
  ellipse.setAttribute("cx", cx)
  ellipse.setAttribute("cy", cy)
  ellipse.setAttribute("rx", rx)
  ellipse.setAttribute("ry", ry)
  ellipse.setAttribute("fill", fill)
  ellipse.setAttribute("opacity", opacity)

  var canvas = document.getElementById("canvas")
  canvas.appendChild(ellipse)
  return ellipse
}

function makeLine(x1, y1, x2, y2, stroke, strokeWidth, opacity) {
  var line = document.createElementNS(namespace, "line")
  line.setAttribute("x1", x1)
  line.setAttribute("y1", y1)
  line.setAttribute("x2", x2)
  line.setAttribute("y2", y2)
  line.setAttribute("stroke", stroke)
  line.setAttribute("stroke-width", strokeWidth)
  line.setAttribute("opacity", opacity)

  var canvas = document.getElementById("canvas")
  canvas.appendChild(line)
  return line
}

function makePolyline(points, stroke, strokeWidth, opacity) {
  var polyline = document.createElementNS(namespace, "polyline")
  polyline.setAttribute("points", points)
  polyline.setAttribute("stroke", stroke)
  polyline.setAttribute("stroke-width", strokeWidth)
  polyline.setAttribute("opacity", opacity)
  polyline.setAttribute("fill", "none")

  var canvas = document.getElementById("canvas")
  canvas.appendChild(polyline)
  return polyline
}

function makePolygon(points, fill, opacity) {
  var polygon = document.createElementNS(namespace, "polygon")
  polygon.setAttribute("points", points)
  polygon.setAttribute("opacity", opacity)
  polygon.setAttribute("fill", fill)

  var canvas = document.getElementById("canvas")
  canvas.appendChild(polygon)
  return polygon
}

function makeText(message, x, y, fontSize, fontFamily, fill, opacity) {
  var text = document.createElementNS(namespace, "text")
  text.innerHTML = message
  text.setAttribute("x", x)
  text.setAttribute("y", y)
  text.setAttribute("font-size", fontSize)
  text.setAttribute("font-family", fontFamily)
  text.setAttribute("fill", fill)
  text.setAttribute("opacity", opacity)

  var canvas = document.getElementById("canvas")
  canvas.appendChild(text)
  return text
}

function makeImage(url, x, y, width, height, opacity) {
  var image = document.createElementNS(namespace, "image")
  image.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", url)
  image.setAttribute("x", x)
  image.setAttribute("y", y)
  image.setAttribute("width", width)
  image.setAttribute("height", height)
  image.setAttribute("opacity", opacity)

  var canvas = document.getElementById("canvas")
  canvas.appendChild(image)
  return image
}

function collides(shape1, shape2) {
  var centerX, centerY
  if (shape1.hasAttribute("x")) {
    centerX = getX(shape1) + parseFloat(shape1.getAttribute("width"))/2
    centerY = getY(shape1) + parseFloat(shape1.getAttribute("height"))/2
  } else if (shape1.hasAttribute("cx")) {
    centerX = getX(shape1)
    centerY = getY(shape1)
  } else {
    throw "Oops, that kind of shape isn't supported by the collide function!"
  }

  var xMin, xMax, yMin, yMax
  if (shape2.hasAttribute("x")) {
    xMin = getX(shape2)
    yMin = getY(shape2)
    xMax = getX(shape2) + parseFloat(shape2.getAttribute("width"))
    yMax = getY(shape2) + parseFloat(shape2.getAttribute("height"))
  } else if (shape2.hasAttribute("cx")) {
    if (shape2.hasAttribute("rx")) {
      var rx = parseFloat(shape2.getAttribute("rx"))
      var ry = parseFloat(shape2.getAttribute("ry"))
      xMin = getX(shape2) - rx
      yMin = getY(shape2) - ry
      xMax = getX(shape2) + rx
      yMax = getY(shape2) + ry
    } else {
      var r = parseFloat(shape2.getAttribute("r"))
      xMin = getX(shape2) - r
      yMin = getY(shape2) - r
      xMax = getX(shape2) + r
      yMax = getY(shape2) + r
    }
  } else {
    throw "Oops, that kind of shape isn't supported by the collide function!"
  }
  return (centerX > xMin &&
          centerX < xMax &&
         centerY > yMin &&
         centerY < yMax)
}
