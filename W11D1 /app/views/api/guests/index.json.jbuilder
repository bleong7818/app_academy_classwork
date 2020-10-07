  json.array! @guests.where('age >= 40 AND age <= 50') do |guest|
    json.name guest.name
    json.age guest.age
    json.color guest.favorite_color
  end
