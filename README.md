A Simple chat room app using node js. 

High Level requirements:

Server side:
	1. Support 10k users
	2. Display username, avtar, 
	2. Set up -  Generate a list of 20k random words (censor list)  (Test case)
	3. Censor list - When each message is received validate it against the above dict - check each message in chat against this censor list. If word is in the list, don't show the message.
	4. Support private 1 to 1 messaging (P1)
	5. Deploy at least 10 AWS micro instances and make the system tolerant of any individual instance going down. So for example if I am connected to the chat system and my instance is removed, my connection should not break and my experience should not be interrupted. (P1) 
	6. Emoji support

CLient side (nodejs + seleniumhq):
 	1.	Test Case: Generate 10k users, with certain attributes assigned to each user - color, username, avatar pic.
 	2. Test Case: Have  10k users post 5 msgs / minute in the chat room.

 