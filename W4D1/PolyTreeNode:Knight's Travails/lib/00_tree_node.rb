require "byebug"

class PolyTreeNode

    def initialize(value)  
        @value = value
        @parent = nil
        @children = []
    end

    def parent
        @parent
    end

    def children
        @children
    end 

    def value
        @value
    end

    def parent=(parent_node) 
        
        unless @parent.nil? 
            @parent.children.delete_if { |child| child.object_id == self.object_id} 
        end

        @parent = parent_node 
        unless @parent.nil?
            @parent.children << self
        end
        
    end

    def add_child(child_node)
        child_node.parent=(self)
    end

    def remove_child(child_node)
        if child_node.parent == nil 
            raise "NOT A CHILD!!"
        else
            child_node.parent=(nil)
        end  
    end
   
    def dfs(target_value)
        return self if @value == target_value

        @children.each do |child|
            result = child.dfs(target_value) 
            return result if result
        end
        
        nil
    end


    def bfs(target_value) 
        queue = [self]
        until queue.empty?
            compare = queue.shift
            return compare if target_value == compare.value
            queue += compare.children
        end
        nil
    end
end



