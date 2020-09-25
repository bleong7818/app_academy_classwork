class FollowToggle {
    constructor(el) {
        // this.$el = el
        let $el = $(el);
        this.userId = $el.data("user-id");
        this.followState = $el.data("initial-follow-state");
        // debugger;
        this.render();
        this.handleClick = this.handleClick.bind(this);

        // $el.on('click', '.follow-toggle', event => {
        $('.follow-toggle').on('click', event => {
            console.log("i got clicked");
            this.handleClick(event);
        });

        // $('#new-gif-form').on('submit', e => {
        //     e.preventDefault();
        //     // Fetch a new GIF
        //     fetchNewGif();
        //   });
    }

    render() {
        if (this.followState === "unfollowed") return "Follow!";
        if (this.followState === "followed") return "Unfollow!";
    }

    handleClick(event) {
        event.preventDefault();
        
        // bind it to constructor
        if (this.followState === "unfollowed") {
            $.ajax({
                type: "POST",
                url: "/users/:user_id/follow",
                dataType: "JSON",
            })
            .then(this.followState = "followed", this.render());
        } else {
            $.ajax({
                type: "DELETE",
                url: "/users/:user_id/follow",
                dataType: "JSON",
            }).then(this.followState = "unfollowed", this.render());
        }
        console.log("follow state got switched");
        console.log(this.followState);
    }
}

module.exports = FollowToggle;
// exports.FollowToggle = FollowToggle;