    # it 'the show page shows guests\' gifts' do
    #   get '/api/parties/2'
    #   expect(json['guests'][0]['gifts'][0]['title']).to eq('Baseball Glove')
    #   expect(json['guests'][0]['gifts'].count).to eq(2)

json.name @party.name
json.guests do
  json.array! @party.guests do |guest|
      json.name guest.name
      json.gifts guest.gifts do |gift|  
          json.title gift.title
          json.description gift.description
      end
  end
end