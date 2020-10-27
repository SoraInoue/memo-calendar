class Calendar < ApplicationRecord
  belongs_to :user

  validates :title, presence: true, length: { in: 1..8 }
end
