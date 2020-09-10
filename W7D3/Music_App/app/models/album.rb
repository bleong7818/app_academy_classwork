class Album < ApplicationRecord
    validates :band_id, uniqueness: {scope: :title}
    validates :band_id, :title, :year, presence: true
    validates :studio, inclusion: {in: [true, false]}

    belongs_to :band,
        primary_key: :id,
        foreign_key: :band_id,
        class_name: :Band

end
