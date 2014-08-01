var PoliciesView = function() {

    this.initialize = function() {
        this.el = document.createElement("div");
    };

    this.render = function() {
	
 var markup = "<article>"
 + "<h3>Our Code of Conduct</h3>"
 + "<p>"
 + "All delegates, speakers, sponsors and volunteers at any That Conference event are required to agree with the following code of conduct. Organizers will"
 + "enforce this code throughout the event."
 + "</p>"
 + "</article>"
 + "<article>"
 + "<h3>The Quick Version </h3>"
 + "<p>"
 + "That Conference is dedicated to providing a harassment-free conference experience for everyone, regardless of gender, sexual orientation, disability,"
 + "physical appearance, body size, race, or religion. We do not tolerate harassment of conference participants in any form. Sexual language and imagery is"
 + "not appropriate for any conference venue, including talks. Conference participants violating these rules may be sanctioned or expelled from the"
 + "conference without a refund at the discretion of the conference organizers."
 + "</p>"
 + "</article>"
 + "<article>"
 + "<h3>The Less Quick Version </h3>"
 + "<p>"
 + "At That Conference, we assume that most people are intelligent and well-intended, and we're not inclined to tell people what to do. However, recent"
 + "events indicate that sometimes it's necessary to spell out the behavior we support and discourage at our conference. The core of our approach is this:"
 + "we will do whatever we believe is necessary to ensure that That Conference campers, camp counselors, and guests will have a fun, safe and productive"
 + "environment.  Any form of harassment will not be tolerated."
 + "</p>"
 + "<p>"
 + "If a participant engages in harassing behavior, the conference organizers may take any action they deem appropriate, including warning the offender"
 + "or expulsion from the conference with no refund."
 + "</p>"
 + "<p>"
 + "If you are being harassed, notice that someone else is being harassed, or have any other concerns, please contact a member of conference staff"
 + "immediately. Conference staff can be identified by a clearly marked shirt and name tags."
 + "</p>"
 + "<p>"
 + "Conference staff will be happy to help participants contact hotel/venue security or local law enforcement, provide escorts, or otherwise assist"
 + "those experiencing harassment to feel safe for the duration of the conference. We value your attendance."
 + "</p>"
 + "<p>"
 + "We expect participants to follow these rules at all conference venues and conference-related social events.  Please bring any concerns to the"
 + "immediate attention of the event staff, or contact us at either <a href='mailto:carrie@thatconference.com'>carrie@thatconference.com</a>"
 + "or <a href='mailto:mark@thatconference.com'>mark@thatconference.com</a>. We thank our attendees for their help in keeping the event welcoming,"
 + "respectful, and friendly to all participants."
 + "</p>"
 + "</article>"
			

       this.el.innerHTML = markup;
       return this.el;
    };



    this.initialize();
};
