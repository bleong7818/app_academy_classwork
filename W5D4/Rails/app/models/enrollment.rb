# == Schema Information
#
# Table name: enrollments
#
#  id         :bigint           not null, primary key
#  course_id  :integer
#  student_id :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Enrollment < ApplicationRecord
    # validates :course_id, :student_id, presence:true, uniqueness:true
    # validates :created_at, :updated_at, presence:true

    belongs_to :student,
        primary_key: :id,
        foreign_key: :student_id,
        class_name: :User
        
    belongs_to :course,
        primary_key: :id,
        foreign_key: :course_id,
        class_name: :Course

end
