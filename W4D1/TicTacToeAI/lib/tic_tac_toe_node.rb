require_relative 'tic_tac_toe'

class TicTacToeNode

  attr_reader :board, :next_mover_mark, :prev_move_pos

  def initialize(board, next_mover_mark, prev_move_pos = nil)
    @board = board
    @next_mover_mark = next_mover_mark
    @prev_move_pos = prev_move_pos
  end

  def losing_node?(evaluator)
    if board.over?

    return board.won? && board.winner != evaluator
    end

    if self.next_mover_mark == evaluator
      self.children.all? { |child| child.losing_node?(evaluator)}
    else
      self.children.any? { |child| child.losing_node?(evaluator)}
    end
  end

  def winning_node?(evaluator)
    if board.over?

    return board.won? && board.winner == evaluator
    end

    if self.next_mover_mark == evaluator
      self.children.all? { |child| child.winning_node?(evaluator)}
    else
      self.children.any? { |child| child.winning_node?(evaluator)}
    end
  end

  # This method generates an array of all moves that can be made after
  # the current move.
  def children
    children = []

    (0..2).each do |row_idx|
      (0..2).each do |col_idx|
        pos = [row_idx, col_idx]

        next unless board.empty?(pos)
        copy = board.dup
        copy[pos] = next_mover_mark
        new_mark = (next_mover_mark == :x ? :o : :x)
        prev_move_pos = pos

        children << TicTacToeNode.new(copy, new_mark, prev_move_pos)
      end
    end  
    children

  end
end
