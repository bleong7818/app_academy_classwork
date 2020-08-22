require "byebug"
def my_min_compare(array)
    # debugger
    min = array.first
    array.each_with_index do |ele1, idx1|
        array.each_with_index do |ele2, idx2|
            if ele2 < min && idx2 > idx1
                min = ele2
            end
        end
    end
    min
end

def my_min_iterative(array) # O(n)
    pivot = array.first
    array.each do |num|
        if num < pivot
            pivot = num
        end
    end
    pivot
end

# array = [ 0, 3, 5, 4, -5, 10, 1, 90 ]
# p my_min_compare(array)
# p my_min_iterative(array)

def largest_contiguous_subsum(list) 
    sums = []
    
    (0...list.length).each do |idx1| #0 
        (idx1...list.length).each do |idx2| # 1
            sums << list[idx1..idx2]
        end
    end

    final = []
    sums.each do |subarr|
        sum = 0
        subarr.each do |num|
            sum += num
        end
        final << sum
    end
    final.sort.last
end

def better_contiguous_sum(list)
    max_sum = list.first
    current_sum = 0
    i = 0
    while i < list.length
        current_sum += list[i]
        
        if current_sum > max_sum
            max_sum = current_sum
        elsif current_sum < 0
            current_sum = 0
        end
        i += 1
    end
    max_sum
end



# list = [5, 3,-7]
# list = [2, 3, -6, 7, -6, 7]
list = [-5, -1, -3]
p better_contiguous_sum(list)