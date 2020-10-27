class CalendarsController < ApplicationController
  def index
    @calendars = Calendar.all.order("start_time DESC")
    @calendar = Calendar.new
  end

  def create
    Calendar.create(calendar_parameter)
    redirect_to root_path
  end

  def destroy
    @calendar = Calendar.find(params[:id])
    @calendar.destroy
    redirect_to root_path, notice:"削除しました"
  end
  
  private

  def calendar_parameter
    params.require(:calendar).permit(:title, :memo, :start_time).merge(user_id: current_user.id)
  end
end