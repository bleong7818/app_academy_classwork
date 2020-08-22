require "byebug"
def first_anagram?(string1, string2)
    chars = string1.split("")
    all_anagrams = chars.permutation.to_a
    all_anagrams.include?(string2.split(""))
end

def second_anagram?(string1, string2)
    # debugger
    chars = string1.split("")
    more_chars = string2.split("")
    
    chars.each do |char|
        idx = more_chars.find_index(char)
        more_chars.delete(more_chars[idx])
    end
    return more_chars.empty?
end

def third_anagram?(string1, string2)
    string1.split("").sort == string2.split("").sort
end

def fourth_anagram?(string1, string2)
    hash1 = Hash.new(0)
    hash2 = Hash.new(0)
    string1.each_char do |char|
        hash1[char] += 1
    end 
    string2.each_char do |char|
        hash2[char] += 1
    end 
    hash1 == hash2
end

def bonus_anagram?(string1, string2)
    # debugger
    hash = Hash.new(0)

    string1.each_char do |char|
        hash[char] += 1
    end
    string2.each_char do |char|
        hash[char] -= 1
    end
    hash.each do |k,v|
        if v != 0
            return false
        end
    end
    true
end

p bonus_anagram?("elvis", "lives")
p bonus_anagram?("gizmo", "sally")

