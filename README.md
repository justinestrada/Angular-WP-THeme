# Angular-WP-THeme
Angular WordPress Theme


## Local Setup
1. Setup local Apache2, PHP and a MySQL database. PhpMyAdmin (optional)
Recommended WAMP for Windows
Recommended MAMP for Apple
2. Download wordpress CMS from wordpress.org https://wordpress.org/download/
3. In your Apache root ex: htcdocs unzip, create new_folder, put the wordpress download here, unzip
4. Navigate to wp-content/themes/
5. git clone https://github.com/justinestrada/Angular-WP-THeme.git
6. change directories to angular-app, run npm install
7. then run ng serve or ng build, this will open up localhost:4200, you can close this
8. start your WAMP or MAMP server
9. Navigate to localhost, you should see the apache directory with 'Index of' at the top. Click the folder you put the wordpress in, ex: localhost/wordpress
10. On my system this doesn't work, because I have a custom homebrew config, that makes like a local.wordpresss.com, but anyways you should be good to go and seeing the theme work 


