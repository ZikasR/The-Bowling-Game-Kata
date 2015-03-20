/**
* Board
*/
function Board() {
  this.grid = [[null, null, null], [null, null, null], [null, null, null]];
};



/**
* Test if the grid is full
* @return {Boolean}
*/
Board.prototype.full = function() {
  for(var line = 0; line < this.grid.length; line++){
    for(var move = 0; move < this.grid[line].length; move++){
      if(this.grid[line][move] === null){
        return false;
      }
    }
  }
  return true;
};

/**
* Test if a move is empty
* @horizontal {Number}
* @vertical {Number}
*/
Board.prototype.moveIsEmpty = function(horizontal, vertical){
  return this.grid[horizontal][vertical] === null;
};

/**
* Place a mark in a given position
* @horizontal {Number}
* @vertical {Number}
* @round {String} X or O
*/
Board.prototype.placeMark = function(horizontal, vertical, round){
  this.grid[horizontal][vertical] = round;
};
