class UsersController < ApplicationController
    

    def new
        @user = User.new
        render :new
    end

    def create
        @user = User.new(user_params)
        if @user.save
            @user.login
            redirect_to cats_url
        else
            render :new
        end
    end

    def show
        @user = User.find(params[:id])
        render :show
    end

    private
    def user_params
        params.require(:user).permit(:user_name, :password_digest, :session_token)
    end
end
