require "byebug"
def bad_two_sum?(array, target)
    array.each_with_index do |num1, idx1|
        array.each_with_index do |num2, idx2|
            if idx2 > idx1
                if num1 + num2 == target
                    return true
                end
            end
        end
    end
    false
end

def okay_two_sum?(array, target)
    # debugger
    return false if array.length < 2
    sorted = array.sort
    sum = sorted.first + sorted.last

    if sum == target
        return true
    elsif sum > target
        sorted.pop
        okay_two_sum?(sorted, target)
    else
        sorted.shift
        okay_two_sum?(sorted,target)
    end
end

def two_sum?(array, target)
    hash = Hash.new { |k, v| hash[k]}

    array.each do |ele|
        result = target - ele
        if hash.has_key?(result)
            true
        else
            hash[ele] = true
        end
    end
    false
end

array = [0, 1, 5, 7]
p okay_two_sum?(array, 6)
p okay_two_sum?(array, 10)