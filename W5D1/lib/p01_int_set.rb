class MaxIntSet
  attr_reader :store
  def initialize(max)
    @max = max
    @store = Array.new(@max, false)
  end

  def insert(num)
    validate!(num)
    self.store[num] = true 
  end
  
  def remove(num)
    validate!(num)
    self.store[num] = false
  end
  
  def include?(num)
    self.store[num] == true
  end
  
  private
  
  def is_valid?(num)
  end
  
  def validate!(num)
    if !(0...self.store.length).include?(num)
      raise "Out of bounds"
    end 
  end
end


class IntSet
  def initialize(num_buckets = 20)
    @store = Array.new(num_buckets) { Array.new }
  end

  def insert(num)
    self[num] << num
  end

  def remove(num)
    self[num].delete(num)
  end

  def include?(num)
    self[num].include?(num)
  end

  private

  def [](num)
    # optional but useful; return the bucket corresponding to `num`
    @store[num % num_buckets]
  end

  def num_buckets
    @store.length
  end
end

class ResizingIntSet
  attr_reader :count

  def initialize(num_buckets = 20)
    @store = Array.new(num_buckets) { Array.new }
    @count = 0
  end

  def insert(num)
    if !self[num].include?(num)
      self[num] << num 
      @count += 1
    end 

    if @count > num_buckets
      resize!
    end
  end

  def remove(num)
    if self[num].include?(num)
    self[num].delete(num)
    @count -= 1
    end
  end

  def include?(num)
    self[num].include?(num)
  end

  private

  def [](num)
    # optional but useful; return the bucket corresponding to `num`
    @store[num % num_buckets]
  end

  def num_buckets
    @store.length
  end

  def resize!
    @count = 0
    old = @store
    @store = Array.new(num_buckets * 2) { Array.new } 
    old.flatten.each do |ele|
      self.insert(ele)
    end 
  end
end
