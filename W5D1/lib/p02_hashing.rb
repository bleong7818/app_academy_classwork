class Integer

  # Integer#hash already implemented for you
end

class Array
  def hash
    
    hash_values = self.map.with_index { |ele, idx| ele.hash * idx.hash}

    hash_values.inject(0) do |acc, num|
      acc + num
    end 
  end
end

class String
  def hash
  end
end

class Hash
  # This returns 0 because rspec will break if it returns nil
  # Make sure to implement an actual Hash#hash method
  def hash
    0
  end
end
