import consumer from "./consumer"

consumer.subscriptions.create("ActivityChannel", {
  connected() {
    // Called when the subscription is ready for use on the server
    this.perform("appear")
  },
  
  disconnected() {
    // Called when the subscription has been terminated by the server
  },
  
  received(data) {
    // Called when there's incoming data on the websocket for this channel
    console.log(data.message)
  }
});
