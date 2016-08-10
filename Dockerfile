FROM alpine:latest

MAINTAINER Kelly Leahy

WORKDIR "/opt"

ADD .docker_build/go-main /opt/bin/go-main
ADD ./templates /opt/templates
ADD ./static /opt/static

CMD ["/opt/bin/go-main"]

