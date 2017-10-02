class EventController < ApplicationController
  def create
    data = {
      title: params[:title],
      start: params[:start],
      end: params[:end]
    }
    REDIS.set('data', JSON.generate(data))
  end
end
