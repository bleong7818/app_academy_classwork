# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

    # users = User.create([ {username: 'Jonathan123'}, {username: 'Brandon432'}, {username: 'Porkchoppy32'}])
    mona = Artwork.create(title: 'MonaLisa', image_url: 'MonaLisa.com', artist_id: User.last.id)
    ArtworkShare.create(artwork_id: mona.id, viewer_id: User.all[1].id)
    sponge = Artwork.create(title: 'Spongebob', image_url: 'spongebob.com', artist_id: User.first.id)
    ArtworkShare.create(artwork_id: sponge.id, viewer_id: User.all[2].id)
