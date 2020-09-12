require 'rails_helper'

RSpec.describe User, type: :model do
  let(:failing_user) { User.new(username: 'Cap', password: 'password') }

  subject(:passing_user) { User.new(username: 'Capy', password: 'password') }


  it { should validate_presence_of(:username) }
  it { should validate_presence_of(:password_digest) }
  it { should validate_presence_of(:session_token) }
  it { should validate_uniqueness_of(:username) }
  it { should validate_uniqueness_of(:session_token) }
  it { should validate_length_of(:password).is_at_least(6) }

  describe 'session_token' do
    it 'assigns a session_token if none given' do
      expect(FactoryBot.build(:user).session_token).not_to be_nil
    end
  end

  describe '#password=' do
    it 'creates a password_digest' do
      expect(FactoryBot.build(:user).password_digest).not_to be_nil
    end
  end


  describe 'password encryption' do
    it 'does not save password to the database' do
      FactoryBot.create(:user, username: "Harry Potter")

      user = User.find_by(username: "Harry Potter")
      expect(user.password).not_to eq("capybara")
    end

    it 'should have encrypted the password using BCrypt' do
      expect(BCrypt::Password).to receive(:create).with("password")
      FactoryBot.build(:user, password: "password")
    end
  end

  describe 'User::find_by_credentials' do
    it 'find a User with specific credentials' do
      FactoryBot.create(:user, username: "Harry Potter")
      user = User.find_by_credentials('Harry Potter', 'capybara')
      expect(user.username).to eq('Harry Potter')
    end
  end

  describe '#reset_session_token!' do
    it 'resets the session_token' do
      user = FactoryBot.create(:user, username: "Harry Potter")
      initial_session_token = user.session_token
      expect(initial_session_token).not_to eq(user.reset_session_token!)
    end
  end

end


