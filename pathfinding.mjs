/* Copyright by YOUR MOM HAHAHHAHAHAHHA
*
*   yeah thats right cry
*
*/

//import "spot.mjs";


// Function to delete element from the array
function removeFromArray(arr, elt) {
  // Could use indexOf here instead to be more efficient
  for (var i = arr.length - 1; i >= 0; i--) {
    if (arr[i] == elt) {
        arr.splice(i, 1);
    }
  }
}

// An educated guess of how far it is between two points
function heuristic(a, b) {
  var d = dist(a.i, a.j, b.i, b.j);
  // var d = abs(a.i - b.i) + abs(a.j - b.j);
  return d;
}

// How many columns and rows?
var cols = 50;
var rows = 50;

// This will be the 2D array
var grid = new Array(cols);

// Open and closed set
var openSet = [];
var closedSet = [];

// Start and end
var start;
var end;

// Width and height of each cell of grid
var w, h;

// The road taken
var path = [];

var finished;

function AIinitSetup(aibool) {
  console.log('A*');
  DebugAIDraw = aibool;

  // Spawn player and enemy at positions and return their position
  let spawn = spawnPlayerAndEnemyMain(false);
  console.log(spawn);

  // Split the different positions and map them to grid size
  playerSpawnX = Math.round(map(spawn[0][0], 0, width, 0, 50));
  playerSpawnY = Math.round(map(spawn[0][1], 0, width, 0, 50));
  enemySpawnX = Math.round(map(spawn[1][0], 0, width, 0, 50));
  enemySpawnY = Math.round(map(spawn[1][1], 0, width, 0, 50));

  console.log(playerSpawnX, playerSpawnY);
  console.log(enemySpawnX, enemySpawnY);


  // Grid cell size
  w = width / cols;
  h = height / rows;

  // Making a 2D array
  for (var i = 0; i < cols; i++) {
   grid[i] = new Array(rows);
  }

  for (var i = 0; i < cols; i++) {
    for (var j = 0; j < rows; j++) {
        grid[i][j] = new Spot(i, j);
    }
  }

  // All the neighbors
  for (var i = 0; i < cols; i++) {
    for (var j = 0; j < rows; j++) {
        grid[i][j].addNeighbors(grid);
    }
  }


  // Start and end
  start = grid[playerSpawnX][playerSpawnY];
  end = grid[enemySpawnX][enemySpawnY];
  start.wall = false;
  end.wall = false;

  // openSet starts with beginning only
  openSet.push(start);
}


function draw() {

  if (finished === true) {
        //noLoop();
        clear();
        copy(buffer, 0, 0, buffer.width, buffer.height, 0, 0, width, height);
        console.log("not running");

        if(testVar) {
          barrack.x = mouseX;
          barrack.y = mouseY;
        }
  } else {
    // Am I still searching?
    if (openSet.length > 0) {

      // Best next option
      var winner = 0;
      for (var i = 0; i < openSet.length; i++) {
        if (openSet[i].f < openSet[winner].f) {
          winner = i;
        }
      }
      var current = openSet[winner];

      // Did I finish?
      if (current === end) {
        console.log("DONE!");
        console.log(path);
        spawnPlayerAndEnemyMain(true);
        finished = true;
        return;
      }

      // Best option moves from openSet to closedSet
      removeFromArray(openSet, current);
      closedSet.push(current);

      // Check all the neighbors
      var neighbors = current.neighbors;
      for (var i = 0; i < neighbors.length; i++) {
        var neighbor = neighbors[i];

        // Valid next spot?
        if (!closedSet.includes(neighbor) && !neighbor.wall) {
          var tempG = current.g + heuristic(neighbor, current);

          // Is this a better path than before?
          var newPath = false;
          if (openSet.includes(neighbor)) {
            if (tempG < neighbor.g) {
            neighbor.g = tempG;
            newPath = true;
            }
          } else {
            neighbor.g = tempG;
            newPath = true;
            openSet.push(neighbor);
          }

          // Yes, it's a better path
          if (newPath) {
            neighbor.h = heuristic(neighbor, end);
            neighbor.f = neighbor.g + neighbor.h;
            neighbor.previous = current;
          }
        }
      }
      // Uh oh, no solution
    } else {
      console.log('no solution');
      noLoop();
      return;
    }

    // Draw current state of everything
    //background(255);

    // Find the path by working backwards
    path = [];
    var temp = current;
    path.push(temp);
    while (temp.previous) {
      path.push(temp.previous);
      temp = temp.previous;
    }

    //Debug draw
    if(DebugAIDraw === true) {
      for (var i = 0; i < cols; i++) {
        for (var j = 0; j < rows; j++) {
            grid[i][j].show();
        }
      }
      
      for (var i = 0; i < closedSet.length; i++) {
        closedSet[i].show(color(255, 0, 0, 50));
      }
    
      for (var i = 0; i < openSet.length; i++) {
        openSet[i].show(color(0, 255, 0, 50));
      }
      
    
      
    
      
      // for (var i = 0; i < path.length; i++) {
      // path[i].show(color(0, 0, 255));
      //}
    
      // Drawing path as continuous line
      noFill();
      stroke(255, 0, 200);
      strokeWeight(w / 2);
      beginShape();
      for (var i = 0; i < path.length; i++) {
        vertex(path[i].i * w + w / 2, path[i].j * h + h / 2);
      }
      endShape();
    }
  }
  
  
}