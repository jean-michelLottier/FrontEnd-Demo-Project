FROM jlot/node-angular

USER root

WORKDIR /demo_project

COPY . /demo_project
#ADD e2e /demo_project
#ADD node_modules /demo_project
#ADD src /demo_project
#COPY .angular-cli.json /demo_project
#COPY .editorconfig /demo_project
#COPY karma.conf.js /demo_project
#COPY package.json /demo_project
#COPY protractor.conf.js /demo_project 
#COPY tsconfig.json /demo_project
#COPY tslint.json /demo_project

RUN cd /demo_project

EXPOSE 4200 8080

CMD ["ng", "serve", "--host=0.0.0.0", "--port=8080", "--disable-host-check"]