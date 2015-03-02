import Ember from "ember";
import config from "./config/environment";

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource("event", {
    path: "/event/:event_id"
  }, function() {
    this.route("review");
    this.route("edit");
    this.resource("location", function() {});
    this.route("shares", function() {});
    this.route("media", function() {});
  });

  this.route("event/submit", {
    path: "/event/submit"
  });

  this.route("events", {
    path: "/events"
  }, function() {});

  this.resource("person", function() {
    this.route("auth", function() {
      this.route("reset");
    });
  });

  this.resource("attachments", function() {});
  this.resource("location", function() {});
});

export default Router;