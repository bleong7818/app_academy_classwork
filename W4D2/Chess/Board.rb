require_relative "NullPiece"
class Board
    attr_accessor :board

    def initialize
        # @NullPiece = NullPiece.instance
        @board = Array.new(2){Array.new(2, NullPiece.instance)}
    end

    def move_piece(start_pos, end_pos) 
        
        start = board[start_pos.first][start_pos.last]
        final = board[end_pos.first][end_pos.last]
        if start == NullPiece.instance || final != NullPiece.instance
            raise 

        temp = start.shift
        final << temp
    end
end

test = Board.new
p test.board[0][0] == NullPiece.instance
# @board[0][0].shift = [][]
