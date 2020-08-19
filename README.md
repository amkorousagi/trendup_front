# trendup_front
see src/views/trendup

1. docker build -t front_image -f Dockerfile_front
2. docker run -it -p 6001:6001 --name front_container front_image /bin/bash
3. cd /exmaple/trendup_front
4. npm install
5. npm install react-chartjs-2 react-sigma
6. npm run start
7. quit by X button of terminal (for working as daemon)
