class UsersController < ApplicationController
    def index
        render plain: "I'm in the index action!"

        users = Users.all
        render json: users
        
    end 

    def create
        user = User.new(params.require(:user).permit(:name, :email))  
        # replace the `user_attributes_here` with the actual attribute keys
        if user.save
            render json: user
        else
            render json: user.errors.full_messages, status: :unprocessable_entity 
        end
    end

    def update
        user = User.find(params[:id])
            if user.update(user_params)
                redirect_to_user_url(user)
            else
                render json: user.errors.full_messages, status: 422
            end
    end

    def destroy
        user = User.find(params[:id])
        user.destroy
        render json: user
    end

    def show
        user = User.find(params[:id])
        render json: user 
    end

    def user_params
        params.require(:user).permit(:name, :email)
         
    end
end