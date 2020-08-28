# == Schema Information

#
# Table name: courses
#
#  id            :bigint           not null, primary key
#  name          :string
#  prereq_id     :integer
#  instructor_id :integer
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#
class Course < ApplicationRecord
    validates :name, :instructor_id, presence: true, uniqueness: true
    validates :created_at, :updated_at, presence: true
    validates :prereq_id, uniqueness: true

    # has_many :enrollments,
    #     primary_key: :id,
    #     foreign_key: :course_id,
    #     class_name: :Enrollment

    has_many(:enrollments, {primary_key: :id, foreign_key: :course_id, class_name: :Enrollment})
        
    belongs_to :prereq,
        primary_key: :id,
        foreign_key: :prereq_id,
        class_name: :Course
        
    has_many :instructors, 
        primary_key: :id,
        foreign_key: :instructor_id, 
        class_name: :User
        
    has_many :students, 
        through: :enrollments,
        source: :student
    end
    