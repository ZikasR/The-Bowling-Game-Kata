describe('TicTacToe', function() {

	var game;

	describe('game', function(){

		beforeEach(function(){
			game = new Game();
		});

		it('should start new game when new is called', function(){
			expect(game).toBeDefined();
		});

		it('should have a board', function(){
			expect(game.board).toBeDefined();
		});

		it('should have 2 players', function(){
			expect(game.player1).toBeDefined();
			expect(game.player2).toBeDefined();
		});

		it('should have a round', function(){
			expect(game.round).toBeDefined();
			expect(game.round).toEqual('X');
		});

		it('should be finished when board is full', function(){
			game.board.grid = [['O', 'X', 'O'], ['X', 'O', 'X'], ['O', 'O', 'X']]
			expect(game.full()).toBeTruthy();
		});

		describe('Board', function(){

			beforeEach(function(){
				game.play(1,1);
			});

			it('should have a grid', function(){
				expect(game.board.grid).toBeDefined();
			});

			it('(1,1) should equal X', function(){
				expect(game.board.grid[1][1]).toEqual('X');
			});

			it('if player1 plays a move round should equal O', function(){
				expect(game.round).toEqual('O');
			});

			it('if player2 plays (1, 1) round should equal O', function(){
				game.play(1,1);
				expect(game.round).toEqual('O');
			});

			it('if player2 plays (0, 0) round should equal O', function(){
				game.play(0,0);
				expect(game.round).toEqual('X');
			});
		});

	});
});
