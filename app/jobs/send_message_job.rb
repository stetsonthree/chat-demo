class SendMessageJob < ApplicationJob
  queue_as :default

  def perform(message)
    html = ApplicationController.render(partial: 'messages/theirs', locals: { message: message })

    cable_ready["room_channel_#{message.room_id}"].insert_adjacent_html(
      selector: '#messages',
      position: 'beforeend',
      html: html
    )
    cable_ready.broadcast
  end
end
