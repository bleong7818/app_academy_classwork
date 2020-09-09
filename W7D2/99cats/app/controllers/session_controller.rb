class SessionController < ApplicationController

    def new
        @user = User.new
        render :new
    end

    def create
        @user = User.find_by_credentials(
            params[:user][:user_name],
            params[:user][:password]
        )
        
        if @user
            login!(@user)
            self.session_token = @user.reset_session_token 
            redirect_to cats_url
        else
            render :new
        end
    end

    def destroy
        if current_user
            current_user.reset_session_token!
            session[:session_token].destroy
        else
            render :new
        end
    end
end
