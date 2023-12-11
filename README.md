# TurnoFinalApp
![image](https://github.com/pcivita/TurnoFinalApp/assets/106632611/d86923c1-7a8c-4896-8a86-7f9647aa6975)

Turno is an app designed to help busy individuals achieve their goals and lead more
active lifestyles. Designed for on-the-go users, Turno aims to transform your daily goals
into a fun and motivational journey. It's made for those overwhelmed by choices or
struggling with time management and motivation. Our user research showed a
common challenge: decision paralysis.

It is designed to be a fun, dice-rolling iOS app that randomly selects an
activity from your personalized list of up to six options. Celebrate your achievements by
sharing your progress with friends within the app. Keep a visual diary of your completed
activities, chart your progress through statistics, and reflect on your journey. Stay
connected and inspired by interacting with your friends' activities. "Kudos", comment, 
and join in on the fun as you and your friends motivate each other towards an active
lifestyle.

## Installation Instructions for Hi-Fi Prototype
Access on iPhone or Android
Download the Expo Go app and scan the following QR code
![image](https://github.com/pcivita/TurnoFinalApp/assets/106632611/04fc619c-e466-4637-b6be-f9082bf0d9bb)

### Opening the source code
1. Download the code from GitHub
2. Download Expo and node
3. Open in VS Studio or your favorite text editor
4. Run npm install
5. Run npx expo start and open iOS simulator (press i) or scan the QR code.


## Operating Instructions / How to Use the App
When you open the app, you are directed to the “Roll” page, where you can see your die!
If it is your first time using Turno, or if you've run out of activities, you might need to add
activities to your dice (this time we pre-populated them for you.) If that's the case, just
click on the “Create activity” button on the Roll page. In every other case, navigate to the
“Activities” page through the button on the navigation bar, and click “Create activity”.
To create an activity:
1. Click on a greyed “+” box
2. Choose a name for the activity (e.g. “Go on a run”) – keep it short!
3. Write a description (optional) (e.g. Run around lake lag for 40 minutes)
4. Choose a category (e.g. Exercise)
5. Click on "add to dice!"

You should have at least two activities, populating two sides of the dice before rolling,
but you should always try to keep it at six – dream big!

### Now, you’re all set! 
TLDR: Add your activities to the dice on the "Activities" page, roll to get assigned an
activity on the main "Roll" page (dice icon on the navigation bar), post to "Feed" or not,
add it back to the dice (make it one of the Activities) again or not, or just complete (bu
clicking "done". If you posted, check it out in your profile. On the "Feed", interact with your
friends' posts, and on the "Progress" page, check out your turno Journey and your Stats!

## Limitations
The current limitations of our code are the hard-coded aspects as well as some
incomplete segments.
In the current version of the app, we do not have an authentication that allows users
to input their credentials and create their accounts in the app. Instead, you are
always logged in as the same profile (@pcivita).
Your Friends' profile pages are also under construction. Though they are clickable,
you can not see their posts and their friends for now. You can only see their profile
picture and name. This will be completed to be fully functioning.
The progress page is not embedded with actual user data.
The blue, animated die on the progress page, still rotates, indicating the
incompletion of an activity, even after the activity was completed.
Users can't change their names on the settings page.

### Feed Is Hard-Coded:
Hard-Coded Element: The posts in the feed are pre-written and do not change
based on user interaction or input.
Implication: This demonstrates the layout and design of the feed without the need
for a dynamic content management system. It limits the user experience to a static
set of posts, showcasing the UI/UX design. Users are still allowed to interact with the
post, mimicking how it would actually take place.

### Progress Page is Wizard of Oz:
The progress page is designed to give the impression that it is dynamically
displaying a user's progress based on their actions and interactions within the app.
In reality, the data shown is not derived from the user's actual activity. Instead, it's
pre-set by us 😄.
### Implication: This serves to demonstrate how the Stats and Journey pages would
potentially operate and look with real user data. It provides a visual representation
of potential functionalities without the need for complex data processing or
analytics backend.
