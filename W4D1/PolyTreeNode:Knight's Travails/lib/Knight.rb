require_relative "./00_tree_node"
require "byebug"
class KnightPathFinder

    attr_reader :considered_positions

    MOVES = [
        [1, 2],
        [1, -2],
        [2, 1],
        [2, -1],
        [-1, -2],
        [-1, 2],
        [-2, 1],
        [-2, -1]
    ]

    def initialize(position)
        @position = position
        @root_node = PolyTreeNode.new(position)
        @considered_positions = [position]

        build_move_tree
    end


    def self.valid_moves(pos)
        valid = []
        cor_x, cor_y = pos

        MOVES.each do |x,y|
            new_pos = [cor_x + x, cor_y + y]

            if new_pos.all? { |possible| possible.between?(0, 7)}
            valid << new_pos
            end
        end
        valid

    end

    def new_move_positions(pos)
        good_moves = KnightPathFinder.valid_moves(pos)
        new_positions = []
        good_moves.each do |possible|
            if !@considered_positions.include?(possible)
                new_positions << possible
            end
        end
        @considered_positions.concat(new_positions)
        return new_positions
    end

    def build_move_tree

        queue = [@root_node]
        until queue.empty?
            current_node = queue.shift
            new_move_positions(current_node.value).each do |next_pos|
                new_node = PolyTreeNode.new(next_pos)
                current_node.add_child(new_node)
                queue << new_node
            end
        end
    end

    def find_path(end_pos)
        end_node = @root_node.dfs(end_pos)

        path_back = trace_path_back(end_node)
        path_forward = path_back.reverse
    end

    def trace_path_back(end_node)
        path = []

        current_node = end_node
        until current_node.nil?
            path << current_node.value
            current_node = current_node.parent
        end
        path

    end

      private

    attr_accessor :root_node
end

kpf = KnightPathFinder.new([0, 0])
p kpf.find_path([7, 6])

