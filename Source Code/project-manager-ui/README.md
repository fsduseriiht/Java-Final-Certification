# project-manager-ui

If you are running the application from localhost/Docker(@latest version), the url needed to be hit to access the application is - http://localhost:4200

If you are running the application from Docker Tool Box for windows (for older windows versions), the url needed to be hit to access the application is - http://192.168.99.100:4200



## The following should be executed only when your service layer is up and running:
-----------------------
	{{baseurl}} = the context url with dns and port and application context
	
	Example - 
		Local PC/Docker - http://localhost:8080/projectmanagerbackend/
		Docker Tool Box for older windows - http://192.168.99.100:8080/projectmanagerbackend/


#### IF DATABASE IS EMPTY WE NEED TO hit the following services in the order given
-----------------------
###### The following services can be hit from Browser as well after bringing up the service, since, they are normal GET methods. The POSTMAN Collection can be imported into POSTMAN from the location - 

####### project-manager-backend/other-resources/postman-import-json_for_docker_toolbox/

####### project-manager-backend/other-resources/postman-import-json_for_localhost/

	{{baseurl}}user/dump
	{{baseurl}}parent/dump
	{{baseurl}}project/dump
	{{baseurl}}task/dump

Information on docker commands and execution -
# First Step - Go to UI project root folder and execute the build command: ng build [-or-] ng build --prod

Docker for UI Layer - PROJECT MANAGER Project
-----------------------------------------------------------------------
General Commands to be executed in Docker related to push/build/run- 
=======================================================================
	docker build -t your_image_name your_repo_url
	docker tag your_image_name docker_username/your_image_name
	docker push your_image_name docker_username/your_image_name
	docker run -d -p 80:80/tcp -p 80:80/udp --name your_image_name your_image_id_value


Example for push/build/run- 
=======================================================================
	docker build -t project-manager-ui https://github.com/fsduseriiht/project-manager-ui.git
	docker tag project-manager-ui amitabhadockerwork/project-manager-ui
	docker push amitabhadockerwork/project-manager-ui
	docker run -d -p 80:80/tcp -p 80:80/udp --name project-manager-ui_running <your_image_id_value>
