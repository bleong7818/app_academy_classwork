def windowed_max_range(array, window)
    current_max_range = nil
    
    array.each_with_index do |ele, idx| 
        piece = array[idx...idx + window] 
        min = piece.min 
        max = piece.max 
        test = max - min
        if current_max_range.nil? || current_max_range < test
            current_max_range = test
        end
    end

    current_max_range
end

# p windowed_max_range([1, 0, 2, 5, 4, 8], 2) # == 4 # 4, 8
# p windowed_max_range([1, 0, 2, 5, 4, 8], 3) # == 5 # 0, 2, 5
# p windowed_max_range([1, 0, 2, 5, 4, 8], 4) # == 6 # 2, 5, 4, 8
# p windowed_max_range([1, 3, 2, 5, 4, 8], 5) # == 6 # 3, 2, 5, 4, 8

class MyQueue

    def initialize
        @store = []
    end

    def peek
        @store.first
    end

    def size
        @store.length
    end

    def empty?
        @store.empty?
    end

    def enqueue(arg)
        @store << arg
    end

    def dequeue
        ele = @store.pop
        ele
    end
end

class MyStack

    def initialize
        @store = []
    end

    def peek
        @store.first
    end

    def size
        @store.length
    end

    def empty?
        @store.empty?
    end

    def pop
        ele = @store.pop
        ele
    end

    def push(arg)
        @store << arg
    end
end