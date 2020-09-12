require 'rails_helper'

RSpec.describe UsersController, type: :controller do

    describe "GET #new" do
        it "renders the new users form" do
            get :new
            expect(response).to render_template(:new)
        end
    end

    describe "POST #create" do
        let(:user_params) do
        {
            user: {
                username: "catfish",
                password: "capybara"
            }
        }
        end

        context "with valid params" do
            it "logs in the user" do
                post :create, params: user_params
                user = User.find_by(username: "catfish")
                expect(session[:session_token]).to eq(user.session_token)
            end

            it "redirects to the user's show page" do
                post :create, params: user_params
                user = User.find_by(username: "catfish")
                expect(response).to redirect_to(user_url(user))
            end
        end

        context "with invalid params" do
            let(:user_params) do
            {
            user: {
                username: "catfish",
                password: ""
                }
            }
            end

            # post :create, params: user_params
            # user = User.find_by(username: "catfish")

            it "renders the new template" do
                post :create, params: user_params
                expect(response).to render_template(:new)
            end

            it "shows the errors" do
                post :create, params: user_params
                expect(flash[:errors]).to be_present
            end
        end
    end

    describe 'GET #show' do

      it 'shows the users page' do
        FactoryBot.create(:user, username: 'catfish', password: 'aligator')
        user = User.find_by(username: "catfish")
        get :show, params: {id: user.id}
        expect(response).to render_template(:show)
      end
    end

end
