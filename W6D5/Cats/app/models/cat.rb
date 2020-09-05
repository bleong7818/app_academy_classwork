class Cat < ApplicationRecord
    validates :birth_date, :color, :name, :description, presence: true
    validates :sex, presence: true, inclusion: %w(M F) #['M', 'F']

    COLORS = ["Orange", "White", "Black"]
end    