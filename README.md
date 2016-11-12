
Server side:
NodeJS + Socket.io : Support 10k users
	1. Display username, avtar, 
	2. Set up -  Generate a list of 20k random words (censor list) 
	3. When each message is received validate it against the above dict - check each message in chat against this censor list. If word is in the list, don't show the message.

CLient side (nodejs + seleniumhq):
 	1.	Write a script to generate those users, with certain attributes assigned to each user - color, username, avatar pic.
 	2. Have the 10k users post 5 msgs / minute in the chat room.

 Extras:
  1. Support private 1 to 1 messaging (optional)
  2. Deploy at least 10 AWS micro instances and make the system tolerant of any individual instance going down. So for example if I am connected to the chat system and my instance is removed, my connection should not break and my experience should not be interrupted.
 (optional)


 Node defaults:
 